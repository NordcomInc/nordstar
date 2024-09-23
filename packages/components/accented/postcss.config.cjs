/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path');
const process = require('node:process');

module.exports = {
    plugins: [
        require('tailwindcss')(path.resolve(path.join(process.cwd().split('/packages')[0], 'tailwind.config.cjs'))),
        require('autoprefixer')
    ]
};
