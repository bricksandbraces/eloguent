# @bricksandbraces/ts-module<your-package>

Awesome <your-package> for the Bricks & Braces brand.

## How to use

At first, install the dependency:

```bash
yarn add @bricksandbraces/<your-package>
```

## Tech Stack

- Typescript
- React
- PostCSS

### Dev

- Storybook
- Prettier, ESlint, Stylelint
- Husky
- Jest, Enzyme

## Contribute

At first, install husky hooks using `yarn && yarn husky install`.

To start storybook and show all components, simply run:

### Other commands

```
yarn test
yarn format:check
yarn format:fix
yarn build:package
```

## Publishing and Dealing with yarn v2

> Disclaimer: Because we are using yarn v2 options from .yarnrc and .npmrc will be IGNORED. Please look into the [offical documentation](https://yarnpkg.com/configuration/yarnrc) for the new file structure.

1. Authenticate using a personal access token. You find it under Settings->Developer Settings->Personal access token and generate one with `repo, read:packages, write:packages, delete:packages`.
2. Go into your users home folder and create `.yarnrc.yml`. There you add

```
npmRegistries:
  "https://npm.pkg.github.com":
    npmAuthToken: "<your-personal-access-token>"
```

All packages starting with @bricksandbraces on your computers user will use this authentication to publish or consume packages.
Never commit this file 3. Finally using `yarn npm publish --tag latest` you will be able to publish a new version of the package!! 🎉🎉🎉

## License

Bricks & Braces Internal Property. No License given.
