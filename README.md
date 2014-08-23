bijection
=====================

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Node.js utility for mapping the properties of an Object to another.

## Install
```sh
$ npm install bijection --save
```

## Usage
```js
var Bijection = require('bijection');
var LegacyAccount = {
  identity: 'crmacct',
  attributes: {
    crmacct_id: 'integer',
    crmacct_name: 'string'
  }
};
var Account = {
  identity: 'Account',
  attributes: {
    id: 'integer',
    sobriquet: 'string',
  }
};
var AccountBijection = new Bijection({
  domain: Account,
  codomain: [ LegacyAccount ],
  mapping: {
    id: 'crmacct_id',
    sobriquet: 'crmacct_name'
  }
});
var tjwebbLegacyAccount = AccountBijection.map({ id: 1, sobriquet: 'tjwebb' });
/**
 * tjwebbLegacyAccount = {
 *   crmacct_id: 1,
 *   crmacct_name: 'tjwebb'
 * };
 */
```

## API

#### `new Bijection(f)`

| @param | description
|:--|:--|
`f.domain` | The input domain
`f.codomain` | The output domain
`f.mapping` | Declarative object that indicates the mapping from `X -> Y`

#### `.map(x)`

Map an input Object `x` onto an output Object `x` via a bijection `f`, i.e. `f: X -> Y`

| @param | description
|:--|:--|
`x` | The input object to map onto codomain `Y`
**@return** | **description**
`y` | A particular image of codomain `Y` resulting from mapping an input `x` onto it

## License
MIT

[npm-image]: https://img.shields.io/npm/v/bijection.svg?style=flat
[npm-url]: https://npmjs.org/package/bijection
[travis-image]: https://img.shields.io/travis/tjwebb/bijection.svg?style=flat
[travis-url]: https://travis-ci.org/tjwebb/bijection
[daviddm-image]: http://img.shields.io/david/tjwebb/bijection.svg?style=flat
[daviddm-url]: https://david-dm.org/tjwebb/bijection
