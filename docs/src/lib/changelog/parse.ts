/**
 * Pure parser for the changesets-generated `CHANGELOG.md` files. It turns the
 * markdown each package ships into a typed, render-ready structure:
 *
 *   package → releases (newest-first) → change groups (by semver level) → entries
 *
 * Every entry keeps its PR / commit / author references, a parsed body (a tiny
 * block + inline AST so the docs can render it with the design system instead of
 * `dangerouslySetInnerHTML`), and a `dependency` flag. Automated dependency
 * bumps (renovate "Deps:" entries and changesets' "Updated dependencies" rollups)
 * are flagged so the UI can collapse them behind a single disclosure.
 *
 * No filesystem access — the generate script feeds it strings, and the unit
 * tests exercise it directly.
 */
export type SemverLevel = 'major' | 'minor' | 'patch';

export type InlineToken =
    | { type: 'text'; value: string }
    | { type: 'code'; value: string }
    | { type: 'strong'; value: string }
    | { href: string; label: string; type: 'link' };

export type ChangelogBlock = { tokens: InlineToken[]; type: 'paragraph' } | { items: InlineToken[][]; type: 'list' };

export type ChangelogReference = {
    commit: { hash: string; url: string } | null;
    pull: { number: number; url: string } | null;
    thanks: { handle: string; url: string } | null;
};

export type ChangelogEntry = {
    body: ChangelogBlock[];
    dependency: boolean;
    reference: ChangelogReference;
    summary: string;
};

export type ChangelogChangeGroup = {
    entries: ChangelogEntry[];
    level: SemverLevel;
};

export type ChangelogRelease = {
    dependencyUpdates: number;
    groups: ChangelogChangeGroup[];
    version: string;
};

export type PackageChangelog = {
    displayName: string;
    name: string;
    releases: ChangelogRelease[];
    slug: string;
};

/** `@nordcom/nordstar-button` → `nordstar-button`. */
export function slugFromPackageName(name: string): string {
    return name.replace(/^@[^/]+\//, '');
}

/** `@nordcom/nordstar-dropdown-menu` → `Dropdown Menu`; the umbrella → `Nordstar`. */
export function displayNameFromPackageName(name: string): string {
    const slug = slugFromPackageName(name);
    if (slug === 'nordstar') return 'Nordstar';
    return slug
        .replace(/^nordstar-/, '')
        .split('-')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/** Leading metadata of a changesets entry: `[#pr] [commit] Thanks [@handle]! - `. */
const ENTRY_META =
    /^(?:\[#(\d+)\]\(([^)]+)\)\s*)?(?:\[`([^`]+)`\]\(([^)]+)\)\s*)?(?:Thanks \[@([^\]]+)\]\(([^)]+)\)!\s*)?-\s+/;

export function parseInline(text: string): InlineToken[] {
    const tokens: InlineToken[] = [];
    let buffer = '';
    let index = 0;

    const flush = () => {
        if (buffer) {
            tokens.push({ type: 'text', value: buffer });
            buffer = '';
        }
    };

    while (index < text.length) {
        const char = text[index];

        if (char === '`') {
            const end = text.indexOf('`', index + 1);
            if (end !== -1) {
                flush();
                tokens.push({ type: 'code', value: text.slice(index + 1, end) });
                index = end + 1;
                continue;
            }
        }

        if (char === '*' && text[index + 1] === '*') {
            const end = text.indexOf('**', index + 2);
            if (end !== -1) {
                flush();
                tokens.push({ type: 'strong', value: text.slice(index + 2, end) });
                index = end + 2;
                continue;
            }
        }

        if (char === '[') {
            const labelEnd = text.indexOf(']', index + 1);
            if (labelEnd !== -1 && text[labelEnd + 1] === '(') {
                const hrefEnd = text.indexOf(')', labelEnd + 2);
                if (hrefEnd !== -1) {
                    flush();
                    tokens.push({
                        href: text.slice(labelEnd + 2, hrefEnd),
                        label: text.slice(index + 1, labelEnd),
                        type: 'link',
                    });
                    index = hrefEnd + 1;
                    continue;
                }
            }
        }

        buffer += char;
        index += 1;
    }

    flush();
    return tokens;
}

export function parseBlocks(markdown: string): ChangelogBlock[] {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const blocks: ChangelogBlock[] = [];
    let paragraph: string[] = [];
    let listItems: string[] | null = null;

    const flushParagraph = () => {
        if (paragraph.length > 0) {
            blocks.push({ tokens: parseInline(paragraph.join(' ')), type: 'paragraph' });
            paragraph = [];
        }
    };

    const flushList = () => {
        if (listItems && listItems.length > 0) {
            blocks.push({ items: listItems.map((item) => parseInline(item)), type: 'list' });
        }
        listItems = null;
    };

    for (const rawLine of lines) {
        const trimmed = rawLine.trim();

        if (trimmed === '') {
            flushParagraph();
            flushList();
            continue;
        }

        const bullet = /^[-*]\s+(.*)$/.exec(trimmed);
        if (bullet) {
            flushParagraph();
            if (!listItems) listItems = [];
            listItems.push(bullet[1] ?? '');
            continue;
        }

        if (listItems && listItems.length > 0) {
            const last = listItems.length - 1;
            listItems[last] = `${listItems[last] ?? ''} ${trimmed}`;
            continue;
        }

        paragraph.push(trimmed);
    }

    flushParagraph();
    flushList();
    return blocks;
}

function tokensToText(tokens: InlineToken[]): string {
    return tokens.map((token) => (token.type === 'link' ? token.label : token.value)).join('');
}

function summarise(blocks: ChangelogBlock[]): string {
    for (const block of blocks) {
        if (block.type === 'paragraph') return tokensToText(block.tokens);
    }
    for (const block of blocks) {
        if (block.type === 'list') {
            const first = block.items[0];
            if (first) return tokensToText(first);
        }
    }
    return '';
}

function dedent(lines: string[]): string[] {
    const indents = lines.filter((line) => line.trim() !== '').map((line) => (line.match(/^ */)?.[0] ?? '').length);
    const min = indents.length > 0 ? Math.min(...indents) : 0;
    return lines.map((line) => line.slice(min));
}

function parseEntry(rawLines: string[]): ChangelogEntry {
    const firstLine = (rawLines[0] ?? '').replace(/^-\s+/, '');
    const continuation = rawLines.slice(1);
    const dedented = dedent(continuation);

    if (/^Updated dependencies\b/.test(firstLine)) {
        const packages = continuation
            .map((line) => /^\s*-\s+(.+?)\s*$/.exec(line)?.[1])
            .filter((value): value is string => Boolean(value));
        return {
            body: parseBlocks(dedented.join('\n')),
            dependency: true,
            reference: { commit: null, pull: null, thanks: null },
            summary: packages.length > 0 ? packages.join(', ') : 'Updated dependencies',
        };
    }

    const meta = ENTRY_META.exec(firstLine);
    let reference: ChangelogReference = { commit: null, pull: null, thanks: null };
    let bodyFirst = firstLine;

    if (meta) {
        const [, prNumber, prUrl, hash, commitUrl, handle, thanksUrl] = meta;
        reference = {
            commit: hash ? { hash, url: commitUrl ?? '' } : null,
            pull: prNumber ? { number: Number(prNumber), url: prUrl ?? '' } : null,
            thanks: handle ? { handle, url: thanksUrl ?? '' } : null,
        };
        bodyFirst = firstLine.slice(meta[0].length);
    }

    const body = parseBlocks([bodyFirst, ...dedented].join('\n'));
    const dependency = reference.thanks?.handle === 'renovate' || /^Deps:/i.test(bodyFirst.trim());

    return { body, dependency, reference, summary: summarise(body) };
}

function compareVersionsDesc(a: string, b: string): number {
    const left = a.split('.').map((part) => Number.parseInt(part, 10));
    const right = b.split('.').map((part) => Number.parseInt(part, 10));
    const length = Math.max(left.length, right.length);

    for (let i = 0; i < length; i += 1) {
        const x = left[i] ?? 0;
        const y = right[i] ?? 0;
        if (Number.isNaN(x) || Number.isNaN(y)) return b.localeCompare(a);
        if (x !== y) return y - x;
    }

    return 0;
}

/** The newest release version, or `null` for a package with no releases yet. */
export function latestVersion(pkg: PackageChangelog): string | null {
    return pkg.releases[0]?.version ?? null;
}

/** The most recent human-authored change summary, skipping dependency bumps. */
export function notableHighlight(pkg: PackageChangelog): string | null {
    for (const release of pkg.releases) {
        for (const group of release.groups) {
            for (const entry of group.entries) {
                if (!entry.dependency && entry.summary) return entry.summary;
            }
        }
    }
    return null;
}

export function parseChangelog(markdown: string, name: string): PackageChangelog {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const releases: ChangelogRelease[] = [];

    let release: ChangelogRelease | null = null;
    let group: ChangelogChangeGroup | null = null;
    let entryLines: string[] = [];

    const flushEntry = () => {
        if (entryLines.length > 0 && group) {
            group.entries.push(parseEntry(entryLines));
        }
        entryLines = [];
    };

    const flushRelease = () => {
        flushEntry();
        if (!release) return;
        release.groups = release.groups.filter((candidate) => candidate.entries.length > 0);
        release.dependencyUpdates = release.groups.reduce(
            (total, candidate) => total + candidate.entries.filter((entry) => entry.dependency).length,
            0,
        );
        if (release.groups.length > 0) releases.push(release);
        release = null;
        group = null;
    };

    for (const line of lines) {
        if (/^##\s/.test(line) && !/^###/.test(line)) {
            flushRelease();
            release = { dependencyUpdates: 0, groups: [], version: line.replace(/^##\s+/, '').trim() };
            continue;
        }

        const levelMatch = /^###\s+(Major|Minor|Patch)\s+Changes\s*$/i.exec(line);
        if (levelMatch && release) {
            flushEntry();
            group = { entries: [], level: (levelMatch[1] ?? '').toLowerCase() as SemverLevel };
            release.groups.push(group);
            continue;
        }

        if (/^#\s/.test(line)) continue;

        if (release && group) {
            if (/^-\s/.test(line)) {
                flushEntry();
                entryLines = [line];
            } else if (entryLines.length > 0) {
                entryLines.push(line);
            }
        }
    }

    flushRelease();
    releases.sort((a, b) => compareVersionsDesc(a.version, b.version));

    return {
        displayName: displayNameFromPackageName(name),
        name,
        releases,
        slug: slugFromPackageName(name),
    };
}
