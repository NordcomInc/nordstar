/**
 * Walks `packages/components/<name>/src/<name>.tsx`, finds the exported
 * `<Name>Props` type, and emits `props.generated.json`:
 *
 *   { "Button": { "displayName": "Button", "description": "...", "props": { ... } }, ... }
 *
 * Uses the TypeScript Compiler API directly — `react-docgen-typescript` doesn't
 * recognize Nordstar's custom `forwardRef` wrapper, so we read the props type
 * directly. Keying is by PascalCase from the directory name.
 *
 * Consumed by <PropsTable component="Button" />.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const COMPONENTS_DIR = path.join(ROOT, 'packages', 'components');
const TSCONFIG = path.join(ROOT, 'tsconfig.json');
const OUT = path.resolve(import.meta.dirname, '..', 'src', 'content', 'props.generated.json');

type PropEntry = {
    name: string;
    required: boolean;
    description: string;
    type: string;
    defaultValue: string | null;
};

type ManifestEntry = {
    displayName: string;
    description: string;
    props: Record<string, PropEntry>;
};

function pascalCase(input: string): string {
    return input
        .split(/[-_]/)
        .filter(Boolean)
        .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
        .join('');
}

async function listComponentEntries(): Promise<{ slug: string; name: string; file: string }[]> {
    const dirs = await fs.readdir(COMPONENTS_DIR, { withFileTypes: true });
    const out: { slug: string; name: string; file: string }[] = [];
    for (const d of dirs) {
        if (!d.isDirectory()) continue;
        const file = path.join(COMPONENTS_DIR, d.name, 'src', `${d.name}.tsx`);
        try {
            await fs.access(file);
            out.push({ name: pascalCase(d.name), slug: d.name, file });
        } catch {
            // skip — no top-level <name>.tsx
        }
    }
    return out;
}

function readTsConfig(): ts.CompilerOptions {
    const config = ts.readConfigFile(TSCONFIG, ts.sys.readFile);
    if (config.error) {
        throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, '\n'));
    }
    const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, path.dirname(TSCONFIG));
    return parsed.options;
}

function getJsDoc(symbol: ts.Symbol, checker: ts.TypeChecker): string {
    const parts = symbol.getDocumentationComment(checker);
    return ts.displayPartsToString(parts).trim();
}

function getDefaultTag(symbol: ts.Symbol): string | null {
    const tags = symbol.getJsDocTags();
    const tag = tags.find((t) => t.name === 'default' || t.name === 'defaultValue');
    if (!tag) return null;
    const text = tag.text
        ?.map((t) => t.text)
        .join('')
        .trim();
    return text || null;
}

function typeToString(type: ts.Type, checker: ts.TypeChecker): string {
    return checker
        .typeToString(type, undefined, ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.InTypeAlias)
        .replace(/\s+/g, ' ');
}

function extractProps(file: string, name: string, checker: ts.TypeChecker, program: ts.Program): ManifestEntry | null {
    const source = program.getSourceFile(file);
    if (!source) return null;

    const propsSymbolName = `${name}Props`;

    let typeAlias: ts.TypeAliasDeclaration | ts.InterfaceDeclaration | undefined;
    ts.forEachChild(source, (node) => {
        if (
            (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) &&
            node.name.text === propsSymbolName
        ) {
            typeAlias = node;
        }
    });

    if (!typeAlias) return null;

    const symbol = checker.getSymbolAtLocation(typeAlias.name);
    if (!symbol) return null;

    const description = getJsDoc(symbol, checker);
    const type = checker.getDeclaredTypeOfSymbol(symbol);
    const properties = checker.getPropertiesOfType(type);

    const props: Record<string, PropEntry> = {};
    for (const prop of properties) {
        const declaration = prop.declarations?.[0];
        if (!declaration) continue;

        const propType = checker.getTypeOfSymbolAtLocation(prop, declaration);
        const flags = prop.flags;
        const optional = (flags & ts.SymbolFlags.Optional) !== 0;

        props[prop.name] = {
            defaultValue: getDefaultTag(prop),
            description: getJsDoc(prop, checker),
            name: prop.name,
            required: !optional,
            type: typeToString(propType, checker),
        };
    }

    return {
        displayName: name,
        description,
        props,
    };
}

async function main() {
    const entries = await listComponentEntries();
    const options = readTsConfig();
    const program = ts.createProgram({
        options: { ...options, noEmit: true },
        rootNames: entries.map((e) => e.file),
    });
    const checker = program.getTypeChecker();

    const out: Record<string, ManifestEntry> = {};
    const missing: string[] = [];
    for (const { name, file } of entries) {
        const entry = extractProps(file, name, checker, program);
        if (!entry) {
            missing.push(name);
            continue;
        }
        out[name] = entry;
    }

    await fs.mkdir(path.dirname(OUT), { recursive: true });
    await fs.writeFile(OUT, `${JSON.stringify(out, null, 4)}\n`, 'utf8');
    console.info(`Wrote props for ${Object.keys(out).length} components to ${path.relative(process.cwd(), OUT)}`);
    if (missing.length > 0) {
        console.warn(`Missing <Name>Props type for: ${missing.join(', ')}`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
