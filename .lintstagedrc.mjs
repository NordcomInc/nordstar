import { ESLint } from 'eslint';
import { relative } from 'node:path';

const filterIgnoredFiles = async (files) => {
    const cwd = process.cwd();
    const eslint = new ESLint();
    const relativePaths = files.map((file) => relative(cwd, file));
    const isIgnored = await Promise.all(relativePaths.map((file) => eslint.isPathIgnored(file)));
    const filteredFiles = files.filter(
        (file, i) =>
            !isIgnored[i] &&
            !file.includes('.test.') &&
            !file.includes('vite.config') &&
            !file.includes('vitest.config') &&
            !file.endsWith('.js')
    );

    return filteredFiles.join(' ');
};

export default {
    'packages/**/*.{js,ts,jsx,tsx}': async (files) => {
        const filesToLint = await filterIgnoredFiles(files);

        return [`eslint --max-warnings=0 --fix ${filesToLint}`];
    },
    'packages/**/*.{css,scss}': async (files) => {
        const filesToLint = await filterIgnoredFiles(files);

        return [`prettier --ignore-path --write ${filesToLint}`];
    }
};
