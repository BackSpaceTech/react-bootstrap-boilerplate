# React-Bootstrap Webpack Boilerplate

![React-Bootstrap Boilerplate](https://avatars0.githubusercontent.com/u/6853419?v=3&s=400)

Webpack Boilerplate for [React-Bootstrap][cb3473c5]

  [cb3473c5]: https://react-bootstrap.github.io/ "React-Bootstrap"

Based on the excellent [SurviveJS book][a694205a].

## Getting Started

1. `npm i` - Install dependencies. This might take a while.
2. `npm start` - Run development build. If it doesn't start, make sure you aren't running anything else in the same port. In case you are on a Unix platform, you can try `PORT=3000 npm start`. It will pick up the port from the environment if it's set.
3. Surf to the port shown at terminal (e.g. http://localhost:8080).
4. Start modifying the code. The browser should pick up the changes.

## Advanced Commands

Beyond development, the boilerplate supports other tasks listed below:

* `npm run build` - Generates a production build below `build/`. See the [Building with Webpack](http://survivejs.com/webpack/building-with-webpack/) part for more.
* `npm run deploy` - Deploys the contents of the `build/` directory below the **gh-pages** branch.
* `npm run test` - Runs `tests/` through Karma/Phantom/Mocha once.
* `npm run test:tdd` - Runs `tests/` in a TDD mode (watches for changes and rebuilds).
* `npm run test:lint` - Runs code through ESLint to spot code quality issues.
* `npm run stats` - Generates Webpack build statistics. See the [Analyzing Build Statistics](http://survivejs.com/webpack/building-with-webpack/analyzing-build-statistics/) chapter.

.



[![BackSpace Academy](https://backspace.academy/assets/img/logo.svg)](https://backspace.academy)

  [a694205a]: https://leanpub.com/survivejs-webpack "SurviveJS"
