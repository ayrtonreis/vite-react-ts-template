module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended', // must be the last
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    ignorePatterns: ['vite.config.ts'],
    rules: {
        'react/jsx-props-no-spreading': 0,
        '@typescript-eslint/no-shadow': 0,
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'import/prefer-default-export': 0,
    },
}
