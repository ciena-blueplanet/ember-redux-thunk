# ember-redux-thunk-shim

[![Travis][ci-img]][ci-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## Deprecated

With the release of ember-redux v5.0 you should uninstall this

```bash
npm uninstall ember-redux-thunk-shim --save-dev
ember install ember-auto-import
npm install redux-thunk --save-dev
```


## Installation

```bash
ember install ember-redux-thunk-shim
```

## Usage

```js
// app/middleware/index.js

import thunk from 'redux-thunk';

var resolved = thunk.default ? thunk.default : thunk;

export default [resolved];
```

To learn more about `redux-thunk` and how to use it visit the [redux-thunk](https://github.com/gaearon/redux-thunk) Github page.

[ci-img]: https://img.shields.io/travis/ember-redux/ember-redux-thunk-shim.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ember-redux/ember-redux-thunk-shim
[ember-img]: https://img.shields.io/badge/ember-1.13.13+-green.svg "Ember 1.13.13+"
[npm-img]: https://img.shields.io/npm/v/ember-redux-thunk-shim.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-redux-thunk-shim
