import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores([
        '**/node_modules/',
        '**/build/',
        '**/coverage/',
        '**/dist',
        '**/.next/',
        '**/.now/',
        '**/storybook-static/',
        '**/public/',
        '**/*.json',
        '**/*.lock',
        '**/*.env',
        '**/*.log',
        '**/vite.config.ts',
        '**/vitest.config.ts',
        '**/postcss.config.cjs',
        '**/postcss.config.js',
        '**/tailwind.config.cjs',
        '.prettierrc.cjs',
        '.lintstagedrc.mjs'
    ]),
    {
        extends: fixupConfigRules(
            compat.extends(
                'plugin:react/recommended',
                'plugin:prettier/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended'
            )
        ),

        plugins: {
            'react': fixupPluginRules(react),
            'react-hooks': fixupPluginRules(reactHooks),
            'unused-imports': unusedImports,
            'import': fixupPluginRules(_import),
            '@typescript-eslint': typescriptEslint,
            jsdoc,
            'jsx-a11y': fixupPluginRules(jsxA11Y),
            'prettier': fixupPluginRules(prettier)
        },

        languageOptions: {
            globals: {
                ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
                ...globals.node
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',

            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },

                project: [
                    './tsconfig.json',
                    './tsconfig.node.json',
                    './tsconfig.test.json',
                    './packages/**/tsconfig.json',
                    './packages/**/tsconfig.node.json',
                    './packages/**/tsconfig.test.json',
                    './docs/**/tsconfig.json',
                    './docs/**/tsconfig.node.json'
                ]
            }
        },

        settings: {
            react: {
                version: 'detect'
            }
        },

        rules: {
            '@typescript-eslint/consistent-type-exports': [
                'error',
                {
                    fixMixedExportsWithInlineTypeSpecifier: false
                }
            ],

            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    fixStyle: 'separate-type-imports',
                    prefer: 'type-imports'
                }
            ],

            '@typescript-eslint/no-require-imports': [
                'error',
                {
                    allow: ['tailwindcss', 'autoprefixer']
                }
            ],

            '@typescript-eslint/no-unnecessary-condition': 'warn',

            'brace-style': [
                'error',
                '1tbs',
                {
                    allowSingleLine: true
                }
            ],

            'consistent-return': 'error',
            'import/first': 'off',
            'indent': 'off',
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-indentation': 'off',
            'jsdoc/check-line-alignment': 'error',
            'jsdoc/check-param-names': 'error',
            'jsdoc/check-property-names': 'error',
            'jsdoc/check-syntax': 'error',
            'jsdoc/check-types': 'error',
            'jsdoc/require-hyphen-before-param-description': 'error',
            'jsx-a11y/alt-text': 'off',
            'jsx-a11y/anchor-is-valid': 'off',

            'no-console': [
                'error',
                {
                    allow: ['warn', 'error']
                }
            ],

            'no-mixed-operators': 'off',
            'no-unused-vars': 'off',
            'no-useless-constructor': 'off',
            'prettier/prettier': 'error',
            'react-hooks/exhaustive-deps': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react/no-children-prop': 'off',
            'react/no-find-dom-node': 'off',
            'react/no-string-refs': 'off',
            'react/prop-types': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'semi': ['error', 'always'],
            'standard/computed-property-even-spacing': 'off',
            'unused-imports/no-unused-imports': 'error',

            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    }
]);
