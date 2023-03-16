module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  overrides: [
    {
      files: ["*.+(js|jsx|ts|tsx)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
      },
      plugins: ["react"],
      extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "airbnb",
        "plugin:react/jsx-runtime",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react-redux/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "import/no-unresolved": "error",
      },
    },
    {
      files: "src/**/*Slice.ts",
      rules: { "no-param-reassign": ["error", { props: false }] },
    },
    {
      files: "*.html",
      parser: "@html-eslint/parser",
      plugins: ["@html-eslint"],
      extends: ["plugin:@html-eslint/recommended"],
    },
  ],
};
