# stored-yo-defaults

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/stored-yo-defaults.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Get stored yeoman defaults from array of questions

## Install

    npm install --save stored-yo-defaults

## Usage

```js
import storedYoDefaults from 'stored-yo-defaults';

const questions = [{
  name: 'moduleVersion',
  message: '☯ preferred version to start:',
  store: true,
  default: '0.0.0',
}, {
  name: 'moduleLicense',
  message: '☯ preferred license:',
  store: true,
  default: 'MIT',
}, {
  name: 'moduleTest',
  message: '☯ preferred test framework:',
  type: 'list',
  choices: ['mocha', 'tape', 'ava'],
  store: true,
  default: 1,
}, {
  name: 'username', // this one is not stored
  default: 'asd',   // so it will be skipped
}, {
  name: 'website',
  message: '☯ your website:', // this one has no default value
  store: true,                // will be skipped as well
}];

storedYoDefaults(questions); /* {
  moduleVersion: '0.0.0',
  moduleLicense: 'MIT',
  moduleTest: 'tape' } */
```

## API

### storedYoDefaults(questions)

```js
// storedYoDefaults :: [Object] -> Object
```

#### questions

*Required*  
Type: `Array` of `Object`

Yeoman questions

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/stored-yo-defaults
[npm-image]: https://img.shields.io/npm/v/stored-yo-defaults.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/stored-yo-defaults
[travis-image]: https://img.shields.io/travis/iamstarkov/stored-yo-defaults.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/stored-yo-defaults
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/stored-yo-defaults.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/stored-yo-defaults
[depstat-image]: https://david-dm.org/iamstarkov/stored-yo-defaults.svg?style=flat-square
