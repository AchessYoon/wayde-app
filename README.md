# Wayde App

[![yarn version](https://img.shields.io/badge/yarn-v3.3.1-blue)](https://yarnpkg.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://www.conventionalcommits.org/en/v1.0.0/)\
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://reactjs.org/)
[![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Visual Studio Code](https://img.shields.io/badge/VS%20Code-0078d7?style=flat-square&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)\
[![eslint](https://img.shields.io/badge/eslint-3A33D1?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)
[![prettier](https://img.shields.io/badge/prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E)](https://prettier.io/)
[![styleint](https://img.shields.io/badge/stylelint-000?style=flat-square&logo=stylelint&logoColor=white)](https://stylelint.io/)

The Wayde App is a React application that aims to explore, test, and document the best practices on React. This project uses [TypeScript](https://www.typescriptlang.org/) to create safer programs and more informative source code. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

OS: Linux / WSL\
Node.js: v18.12.1\
Yarn: v3.3.1

## Setting Up and Running

### Cloning Repository

```bash
git clone https://github.com/AchessYoon/wayde-app.git
```

Or clone/download repository in your preferred way.

### Installing Dependencies

```bash
yarn install --immutable --immutable-cache
```

### Running in the Development Mode

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

## Contributing

Clone the repository and install dependencies by following the steps above.

### Linting

This project enforces a number of linting rules. Commits will be prevented unless all rules are satisfied. To check for linting errors throughout the entire project based on the set rules, run `yarn lint`. To automatically fix them, run `yarn lint:fix`.

In detail, each of the three packages handles the specified types of files.

- [eslint](https://eslint.org/): for js, jsx, ts, tsx, html files
- [prettier](https://prettier.io/): for json, yaml, md files
- [styleint](https://stylelint.io/): for css files

Some errors may require manual correction. A basic understanding of how to use each package is necessary for smooth operation. Disabling linting rules should be avoided.

### Committing Command

This project uses [Commitizen](http://commitizen.github.io/cz-cli/) and [Commitlint](https://commitlint.js.org/) to actively practice the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Use the command `git com` instead of `git commit -m '...'`. As the workspace environment is established by the yarn lifecycle event, an interactive CLI menu will prompt you with a dialog to enter any necessary information.
