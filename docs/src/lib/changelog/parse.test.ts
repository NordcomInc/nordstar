import { describe, expect, it } from 'vitest';

import {
    displayNameFromPackageName,
    latestVersion,
    notableHighlight,
    parseBlocks,
    parseChangelog,
    parseInline,
    slugFromPackageName,
} from './parse';

describe('slugFromPackageName', () => {
    it('drops the @nordcom scope', () => {
        expect(slugFromPackageName('@nordcom/nordstar')).toBe('nordstar');
        expect(slugFromPackageName('@nordcom/nordstar-button')).toBe('nordstar-button');
        expect(slugFromPackageName('@nordcom/nordstar-dropdown-menu')).toBe('nordstar-dropdown-menu');
    });
});

describe('displayNameFromPackageName', () => {
    it('titles the umbrella package as Nordstar', () => {
        expect(displayNameFromPackageName('@nordcom/nordstar')).toBe('Nordstar');
    });

    it('strips the nordstar prefix and title-cases the remainder', () => {
        expect(displayNameFromPackageName('@nordcom/nordstar-button')).toBe('Button');
        expect(displayNameFromPackageName('@nordcom/nordstar-system')).toBe('System');
        expect(displayNameFromPackageName('@nordcom/nordstar-dropdown-menu')).toBe('Dropdown Menu');
    });
});

describe('parseInline', () => {
    it('returns a single text token for plain prose', () => {
        expect(parseInline('Upgrade turbo.')).toEqual([{ type: 'text', value: 'Upgrade turbo.' }]);
    });

    it('extracts inline code spans', () => {
        expect(parseInline('Fix `<Button/>` rendering')).toEqual([
            { type: 'text', value: 'Fix ' },
            { type: 'code', value: '<Button/>' },
            { type: 'text', value: ' rendering' },
        ]);
    });

    it('extracts markdown links', () => {
        expect(parseInline('See [the docs](https://example.com/x) now')).toEqual([
            { type: 'text', value: 'See ' },
            { href: 'https://example.com/x', label: 'the docs', type: 'link' },
            { type: 'text', value: ' now' },
        ]);
    });

    it('extracts bold spans', () => {
        expect(parseInline('this is **important** text')).toEqual([
            { type: 'text', value: 'this is ' },
            { type: 'strong', value: 'important' },
            { type: 'text', value: ' text' },
        ]);
    });
});

describe('parseBlocks', () => {
    it('parses a single paragraph', () => {
        expect(parseBlocks('Upgrade turbo.')).toEqual([
            { tokens: [{ type: 'text', value: 'Upgrade turbo.' }], type: 'paragraph' },
        ]);
    });

    it('joins soft-wrapped lines into one paragraph', () => {
        expect(parseBlocks('A sentence that wraps\nacross two lines.')).toEqual([
            { tokens: [{ type: 'text', value: 'A sentence that wraps across two lines.' }], type: 'paragraph' },
        ]);
    });

    it('separates paragraphs on blank lines', () => {
        const [first, second] = parseBlocks('First paragraph.\n\nSecond paragraph.');
        expect(first).toEqual({ tokens: [{ type: 'text', value: 'First paragraph.' }], type: 'paragraph' });
        expect(second).toEqual({ tokens: [{ type: 'text', value: 'Second paragraph.' }], type: 'paragraph' });
    });

    it('parses an intro paragraph followed by a bullet list', () => {
        const blocks = parseBlocks(
            'Fix `<Button/>` states:\n\n- No longer forces `role`.\n- `disabled` only on a button.',
        );
        expect(blocks).toEqual([
            {
                type: 'paragraph',
                tokens: [
                    { type: 'text', value: 'Fix ' },
                    { type: 'code', value: '<Button/>' },
                    { type: 'text', value: ' states:' },
                ],
            },
            {
                type: 'list',
                items: [
                    [
                        { type: 'text', value: 'No longer forces ' },
                        { type: 'code', value: 'role' },
                        { type: 'text', value: '.' },
                    ],
                    [
                        { type: 'code', value: 'disabled' },
                        { type: 'text', value: ' only on a button.' },
                    ],
                ],
            },
        ]);
    });

    it('joins wrapped continuation lines of a list item', () => {
        const blocks = parseBlocks('- First item that wraps\n  onto a second line.\n- Second item.');
        expect(blocks).toEqual([
            {
                type: 'list',
                items: [
                    [{ type: 'text', value: 'First item that wraps onto a second line.' }],
                    [{ type: 'text', value: 'Second item.' }],
                ],
            },
        ]);
    });
});

const BUTTON_FIXTURE = `# @nordcom/nordstar-button

## 0.1.0

### Minor Changes

- [#1189](https://github.com/NordcomInc/nordstar/pull/1189) [\`5199c66\`](https://github.com/NordcomInc/nordstar/commit/5199c66) Thanks [@renovate](https://github.com/apps/renovate)! - Deps: Update dependency vite to v8.0.13.

- [\`845ea81\`](https://github.com/NordcomInc/nordstar/commit/845ea81) Thanks [@filiphsps](https://github.com/filiphsps)! - Fix \`<Button/>\` accessibility and interaction states:

  - No longer forces \`role="button"\` on every rendered element.
  - \`disabled\` is now only applied on a real \`<button>\`.

### Patch Changes

- Updated dependencies [[\`5199c66\`](https://github.com/NordcomInc/nordstar/commit/5199c66)]:
  - @nordcom/nordstar-system@0.1.0

## 0.0.75

### Patch Changes

- [\`0c3f4e1\`](https://github.com/NordcomInc/nordstar/commit/0c3f4e1) Thanks [@filiphsps](https://github.com/filiphsps)! - Upgrade turbo.
`;

describe('parseChangelog', () => {
    it('derives package identity from the markdown title', () => {
        const result = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button');
        expect(result.name).toBe('@nordcom/nordstar-button');
        expect(result.slug).toBe('nordstar-button');
        expect(result.displayName).toBe('Button');
    });

    it('parses releases newest-first by semver', () => {
        const result = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button');
        expect(result.releases.map((r) => r.version)).toEqual(['0.1.0', '0.0.75']);
    });

    it('groups entries by semver level', () => {
        const [release] = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button').releases;
        const [minor, patch] = release.groups;
        expect(release.groups.map((g) => g.level)).toEqual(['minor', 'patch']);
        expect(minor.entries).toHaveLength(2);
        expect(patch.entries).toHaveLength(1);
    });

    it('extracts PR, commit and thanks metadata', () => {
        const [release] = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button').releases;
        const [minor] = release.groups;
        const [renovate] = minor.entries;
        expect(renovate.reference.pull).toEqual({
            number: 1189,
            url: 'https://github.com/NordcomInc/nordstar/pull/1189',
        });
        expect(renovate.reference.commit).toEqual({
            hash: '5199c66',
            url: 'https://github.com/NordcomInc/nordstar/commit/5199c66',
        });
        expect(renovate.reference.thanks).toEqual({
            handle: 'renovate',
            url: 'https://github.com/apps/renovate',
        });
    });

    it('flags renovate "Deps:" entries as dependency updates', () => {
        const [release] = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button').releases;
        const [minor] = release.groups;
        const [renovate] = minor.entries;
        expect(renovate.dependency).toBe(true);
        expect(renovate.summary).toBe('Deps: Update dependency vite to v8.0.13.');
    });

    it('keeps human-authored entries un-flagged and parses their body', () => {
        const [release] = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button').releases;
        const [minor] = release.groups;
        const [, authored] = minor.entries;
        const [intro, list] = authored.body;
        expect(authored.dependency).toBe(false);
        expect(authored.reference.commit?.hash).toBe('845ea81');
        expect(authored.reference.thanks?.handle).toBe('filiphsps');
        expect(intro.type).toBe('paragraph');
        expect(list).toEqual({
            type: 'list',
            items: [
                [
                    { type: 'text', value: 'No longer forces ' },
                    { type: 'code', value: 'role="button"' },
                    { type: 'text', value: ' on every rendered element.' },
                ],
                [
                    { type: 'code', value: 'disabled' },
                    { type: 'text', value: ' is now only applied on a real ' },
                    { type: 'code', value: '<button>' },
                    { type: 'text', value: '.' },
                ],
            ],
        });
        expect(authored.summary).toBe('Fix <Button/> accessibility and interaction states:');
    });

    it('flags and summarises "Updated dependencies" entries', () => {
        const [release] = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button').releases;
        const [, patch] = release.groups;
        const [updated] = patch.entries;
        expect(updated.dependency).toBe(true);
        expect(updated.reference.pull).toBeNull();
        expect(updated.reference.thanks).toBeNull();
        expect(updated.summary).toBe('@nordcom/nordstar-system@0.1.0');
    });

    it('counts collapsed dependency updates per release', () => {
        const { releases } = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button');
        expect(releases[0]?.dependencyUpdates).toBe(2);
        expect(releases[1]?.dependencyUpdates).toBe(0);
    });

    it('returns no releases for empty input', () => {
        const result = parseChangelog('# @nordcom/nordstar-button\n', '@nordcom/nordstar-button');
        expect(result.releases).toEqual([]);
    });

    it('orders multi-digit versions numerically, not lexically', () => {
        const md = [
            '# @nordcom/nordstar',
            '',
            '## 0.1.2',
            '',
            '### Patch Changes',
            '',
            '- [`aaa`](https://x/commit/aaa) Thanks [@filiphsps](https://x)! - Older.',
            '',
            '## 0.1.10',
            '',
            '### Patch Changes',
            '',
            '- [`bbb`](https://x/commit/bbb) Thanks [@filiphsps](https://x)! - Newer.',
            '',
        ].join('\n');
        const result = parseChangelog(md, '@nordcom/nordstar');
        expect(result.releases.map((r) => r.version)).toEqual(['0.1.10', '0.1.2']);
    });
});

describe('latestVersion', () => {
    it('returns the newest release version', () => {
        const pkg = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button');
        expect(latestVersion(pkg)).toBe('0.1.0');
    });

    it('returns null when there are no releases', () => {
        const pkg = parseChangelog('# @nordcom/nordstar-button\n', '@nordcom/nordstar-button');
        expect(latestVersion(pkg)).toBeNull();
    });
});

describe('notableHighlight', () => {
    it('returns the most recent human-authored summary, skipping dependency bumps', () => {
        const pkg = parseChangelog(BUTTON_FIXTURE, '@nordcom/nordstar-button');
        expect(notableHighlight(pkg)).toBe('Fix <Button/> accessibility and interaction states:');
    });

    it('returns null when every entry is a dependency update', () => {
        const md = [
            '# @nordcom/nordstar-button',
            '',
            '## 0.1.1',
            '',
            '### Patch Changes',
            '',
            '- Updated dependencies []:',
            '  - @nordcom/nordstar-system@0.1.1',
            '',
        ].join('\n');
        const pkg = parseChangelog(md, '@nordcom/nordstar-button');
        expect(notableHighlight(pkg)).toBeNull();
    });
});
