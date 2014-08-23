bijection
=====================

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Node.js utility for mapping the properties of two Objects between each other

## Install
```sh
$ npm install bijection --save
```

## Usage
```js
var Bijection = require('bijection');
var LegacyAccount = {
  accnt_id: 'integer',
  accnt_name: 'string'
};
var Account = {
  id: 'integer',
  name: 'string',
};
var AccountMapping = new Bijection(Account, LegacyAccount, {
  id: 'accnt_id',
  name: 'accnt_name'
});
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/bijection.svg?style=flat
[npm-url]: https://npmjs.org/package/bijection
[travis-image]: https://img.shields.io/travis/tjwebb/bijection.svg?style=flat
[travis-url]: https://travis-ci.org/tjwebb/bijection
[daviddm-image]: http://img.shields.io/david/tjwebb/bijection.svg?style=flat
[daviddm-url]: https://david-dm.org/tjwebb/bijection
