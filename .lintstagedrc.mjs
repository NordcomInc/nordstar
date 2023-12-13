import { ESLint } from 'eslint';
import { glob } from 'glob';
import { relative } from 'node:path';
import process from 'node:process';

const ignoredFiles = [
    '**/node_modules/**',
    '**/dist/**',
    '**/.next/**',
    '**/storybook-static/**',
    '**/__tests__/**',
    '**/*.d.ts',
    'vitest.config.ts',
    '**/vite.config.ts',
]

const filterIgnoredFiles = async (requestedFiles) => {
    const cwd = process.cwd();
    const eslint = new ESLint({
        // Override ESLint's cwd to resolve to the project root, so that
        // relative paths work as intended. Otherwise, the paths resolve
        // to the directory where lint-staged is run.
        cwd
    });

    const files = requestedFiles.map((file) => relative(cwd, file));
    const eslintIgnores = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));

    const filesToLint = files
        .filter((_, index) => !eslintIgnores[index])
        .filter((file) => {
            // Filter using `ignoredFiles` and `glob`
            return !glob.hasMagic(file, { ignore: ignoredFiles });
        })
        .map((file) => `./${file}`);

    return filesToLint.join(' ');
};

const testAndLintAll = async (_) => {
    const cwd = process.cwd();
    const allFiles = (await glob(`${cwd}/**/*.{ts,tsx}`, {
        ignore: ignoredFiles,
    }));
    const allPrettierFiles = (await glob(`${cwd}/**/*.{mjs,ts,tsx,json,scss}`, {
        ignore: ignoredFiles,
    })).map((file) => relative(cwd, file)).map((file) => `./${file}`).join(' ');

    const filesToLint = await filterIgnoredFiles(allFiles);
    return [`prettier --ignore-path --write ${allPrettierFiles}`, `eslint --max-warnings=0 --fix ${filesToLint}`];
};

export default {
    '**/*.{js,ts,jsx,tsx}': async (files) => {
        const filesToLint = await filterIgnoredFiles(files);
        return [`prettier --ignore-path --write ${filesToLint}`, `eslint --max-warnings=0 --fix ${filesToLint}`];
    },
    '**/*.{css,scss}': async (files) => {
        const filesToLint = await filterIgnoredFiles(files);
        return [`prettier --ignore-path --write ${filesToLint}`];
    },

    // Lint and test all files since dependency updates could potentially break tests.
    '**/package.json': testAndLintAll
};
