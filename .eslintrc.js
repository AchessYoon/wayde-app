module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "plugin:react/recommended",
      "standard-with-typescript",
      "airbnb",
      "plugin:react/jsx-runtime",
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:prettier/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "project": "tsconfig.json"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "import/no-unresolved": "error"
  },
  "root": true,
}
