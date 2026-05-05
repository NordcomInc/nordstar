import { mkdir } from 'node:fs';
import path from 'node:path';
import { moveCursor } from 'node:readline';
import chalk from 'chalk';
import InputPrompt from 'inquirer/lib/prompts/input.js';
import DirectoryPrompt from 'inquirer-directory';
import stripAnsi from 'strip-ansi';

const themeColor = chalk.reset.hex('#ed1e79').bold;

class NamingPrompt extends InputPrompt {
    #prevRaw;

    _run(cb) {
        this.#prevRaw = process.stdin.isRaw;
        if (this.opt.transformer) {
            process.stdin.setRawMode(true);
        }

        super._run(cb);
    }

    render(error) {
        error = error ? chalk.red(error) : '';

        const transformer = this.opt.transformer;
        const question = this.getQuestion();

        const final = !error && ['answered', 'done'].includes(this.status);

        if (!transformer) {
            this.screen.render(`${question}${this.rl.line}`, error);
            return;
        }

        const transformed = stripAnsi(transformer(this.rl.line, this.answers, { isFinal: final }));
        const suffix = transformed.replaceAll(this.rl.line, '').trim();
        const content = transformed.slice(0, -suffix.length);

        let body = `${!final ? content : this.answer}${chalk.dim(suffix)}`;
        if (final) body = chalk.cyan(stripAnsi(body));
        this.screen.render(`${question}${body}`, error);

        if (!final) {
            moveCursor(process.stdout, -suffix.length, 0);
            return;
        }
    }

    onEnd(state) {
        this.answer = state.value;
        this.status = 'answered';

        // Re-render prompt
        this.render();

        this.screen.done();
        this.done(state.value);

        // Restore raw mode.
        if (this.opt.transformer) {
            process.stdin.setRawMode(this.#prevRaw);
        }
    }

    onError(state) {
        this.render(state.isValid);
    }
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a string to camelCase.
 *
 * @param {string} str - The string to convert to camelCase.
 * @returns {string} The camelCased string.
 */
const camelCase = (str) => {
    return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

/**
 * Escapes a string to be used in a JSON string.
 *
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 */
const escapeJsonString = (str) => {
    return str.replace(/"/g, '\\"').split('\n').at(0);
};

/**
 * @param {import("plop").NodePlopAPI} plop
 */
export default function main(plop) {
    plop.setWelcomeMessage(`${chalk.reset(themeColor('What are we generating today?'))}`);

    plop.setHelper('capitalize', (text) => {
        return capitalize(camelCase(text));
    });
    plop.setHelper('camelCase', (text) => {
        return camelCase(text);
    });
    plop.setHelper('lowerCase', (text) => {
        return text.toLowerCase();
    });
    plop.setHelper('escapeJsonString', (text) => {
        return escapeJsonString(text);
    });

    plop.setPrompt('directory', DirectoryPrompt);
    plop.setPrompt('naming', NamingPrompt);

    ['component'].forEach((gen) => {
        plop.setGenerator(gen, {
            description: `Generate a new ${gen}.`,
            actions(answers) {
                const actions = [];

                if (!answers) return actions;

                const { description, outDir } = answers;
                const generatorName = answers[`${gen}Name`] ?? '';

                const data = {
                    [`${gen}Name`]: generatorName,
                    description,
                    outDir,
                };

                actions.push({
                    base: `${gen}`,
                    destination: `../packages/{{outDir}}/{{dashCase ${gen}Name}}`,
                    templateFiles: `${gen}/**`,
                    type: 'addMany',
                    data,
                    abortOnFail: true,
                });

                return actions;
            },
            prompts: [
                {
                    message: `Enter ${gen} name:`,
                    name: `${gen}Name`,
                    type: 'input',

                    validate: (value) => {
                        if (!value) {
                            return `${gen} name is required.`;
                        }

                        // check is case is correct
                        if (value !== value.toLowerCase()) {
                            return `${gen} name must be in lowercase.`;
                        }

                        // cannot have spaces
                        if (value.includes(' ')) {
                            return `${gen} name cannot have spaces.`;
                        }

                        return true;
                    },
                },
                {
                    message: `The description of this ${gen}:`,
                    name: 'description',
                    type: 'input',

                    validate: (value) => {
                        if (!value) {
                            return `${gen} description is required.`;
                        }

                        if (!value.endsWith('.')) {
                            return `${gen} description must end with a period.`;
                        }

                        return true;
                    },
                },
                {
                    basePath: './packages',
                    default: './packages/components',
                    message: `Where should this ${gen} live?`,
                    name: 'outDir',
                    type: 'directory',

                    validate: (value) => {
                        if (!value) {
                            return `outDir is required`;
                        }

                        return true;
                    },
                },
            ],
        });
    });

    plop.setGenerator('page', {
        description: `(TODO) Create a page for the docs app.`,

        actions(answers) {
            if (!ansers) return [];

            const { name, path } = answers;
            return [
                {
                    abortOnFail: true,
                    base: `page`,
                    destination: `../docs/src/app/{{path}}`,
                    templateFiles: `page/**`,
                    type: 'addMany',
                    data: {
                        name,
                        path,
                    },
                },
            ];
        },
        prompts: async ({ prompt }) => {
            return prompt([
                {
                    message: `Enter the page name:`,
                    name: `name`,
                    type: 'naming',

                    transformer(value) {
                        if (value.length <= 0) return value;

                        return `${value}Page`;
                    },

                    validate(value) {
                        if (!value) {
                            return `The name of the page is required.`;
                        }

                        if (value.endsWith('Page')) {
                            return `The name should not end with "Page".`;
                        }

                        // check is case is correct
                        if (value.at(0) !== value.at(0).toUpperCase()) {
                            return `The name of the page must be capitalized.`;
                        }

                        // cannot have spaces
                        if (value.includes(' ')) {
                            return `The name of the page cannot have spaces.`;
                        }

                        return true;
                    },
                },
                {
                    choices: ['Use existing', 'Create new'],
                    default: 'Use existing',
                    message: `Create a new subdirectory?`,
                    name: 'create_dir',
                    type: 'list',

                    validate(value) {
                        if (!value) {
                            return `create_dir is required`;
                        }

                        return true;
                    },
                },
                {
                    basePath: './docs/src/app',
                    message: `Where should we create the subdirectory?`,
                    name: 'create_dir_root',
                    type: 'directory',
                    async when(answers) {
                        return answers.create_dir === 'Create new';
                    },
                },
                {
                    message: `Enter the name of the subdirectory:`,
                    name: `create_dir_name`,
                    type: 'input',

                    filter(value) {
                        return new Promise((resolve, reject) => {
                            try {
                                mkdir(path.join('./docs/src/app/', value), { recursive: true }, () => resolve(value));
                            } catch (error) {
                                reject(error);
                            }
                        });
                    },

                    transformer(value) {
                        return value;
                    },

                    validate(value) {
                        if (!value) {
                            return `The name of the page is required.`;
                        }

                        return true;
                    },
                    async when(answers) {
                        return answers.create_dir === 'Create new';
                    },
                },
                {
                    basePath: './docs/src/app',
                    message: `Where should we create the page`,
                    name: 'path',
                    type: 'directory',

                    validate: (value) => {
                        if (!value) {
                            return `path is required`;
                        }

                        return true;
                    },
                },
            ]);
        },
    });
}
