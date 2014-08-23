var _ = require('lodash');
_.mixin(require('congruence'));

/**
 * Map an input Object `x` to an output Object `y` via a bijective function `f`
 * i.e. `f: X -> Y`
 *
 * @private
 */
function image (object, mapping) {
  return _.mapValues(_.invert(mapping), function (y, x) {
    return object[y];
  });
}

/**
 * Create a new bijection between two domains
 */
function Bijection (bxn) {
  if (!_.congruent(Bijection.template, bxn)) {
    throw new TypeError('Bijection is not valid');
  }

  this.valid = true;
  this.bxn = bxn;
}

Bijection.template = {
  domain: _.isObject,
  codomain: _.isArray,
  mapping: _.isObject
};

/**
 * Map input object to each of the codomain subsets specified in the
 * bijection template.
 *
 * @public
 */
Bijection.prototype.map = function map (object) {
  return _.mapValues(this.bxn.mapping, function (mapping, name) {
    return image(object, mapping);
  });
};

module.exports = Bijection;
