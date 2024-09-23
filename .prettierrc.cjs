const prettierConfig = require('@nordcom/prettier');

/** @type {import('prettier').Config} */
module.exports = {
    ...prettierConfig,
    $schema: 'http://json.schemastore.org/prettierrc',
    plugins: [...(prettierConfig.plugins || []), 'prettier-plugin-tailwindcss'],
    quoteProps: 'consistent'
};
