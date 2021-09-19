# @openbricksandbraces/eloguent

Awesome logging package from Bricks & Braces.

## How to use

At first, install the dependency:

```bash
yarn add @openbricksandbraces/eloguent
```

### Contribution commands

```bash
yarn test
yarn format:fix
yarn format:check
```

## Publishing and dealing with yarn v2

> Disclaimer: Because we are using yarn v2 options from .yarnrc and .npmrc will be IGNORED. Please look into the [offical documentation](https://yarnpkg.com/configuration/yarnrc) for the new file structure.

1. Insert `yarn npm login --publish` and authenticate using the npm account of **openbricksandbraces**.
2. Make sure you've installed the dependencies and built the package `yarn && yarn build:package`.
3. Using `yarn npm publish --tag latest` you will be able to publish a new version of the package! 🎉

## License

Bricks & Braces 2021, MIT License
