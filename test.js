global._ = require('lodash');
_.mixin(require('congruence'));
var assert = require('assert');
var Bijection = require('./');
var domain = {
  Account: {
    identity: 'account',
    attributes: {
      id: 'integer',
      number: 'string',
      name: 'string',
      active: 'boolean',
      type: 'string'
    }
  }
};
var codomain = {
  crmacct: {
    identity: 'crmacct',
    attributes: {
      crmacct_id: 'integer',
      crmacct_number: 'string',
      crmacct_name: 'string',
      crmacct_active: 'boolean',
      crmacct_type: 'string'
    }
  }
};
var xm = {
  bijections: { }
};

describe('bijection', function () {

  before(function () {
    xm.bijections.Account = new Bijection({
      domain: domain.Account,
      codomain: [ codomain.crmacct ],
      mapping: {
        crmacct: {
          id: 'crmacct_id',
          number: 'crmacct_number',
          name: 'crmacct_name',
          active: 'crmacct_active',
          type: 'crmacct_type'
        }
      }
    });
  });

  describe('#constructor', function () {
    it('should exist', function () {
      assert(_.isFunction(Bijection));
    });
    it('should validate example bijection', function () {
      assert(xm.bijections.Account.valid);
    });
    it('should store bijection object as .bxn property', function () {
      assert(_.isObject(xm.bijections.Account.bxn));
    });
    it('should expose .project() function', function () {
      assert(_.isFunction(xm.bijections.Account.project));
    });
  });

  describe('#project', function () {
    it('should return an image of the domain Y', function () {
      var image = xm.bijections.Account.project({
        id: 1,
        number: '1000',
        name: 'tjwebb',
        active: true,
        type: 'I'
      });
      assert(_.isObject(image));
      assert(_.congruent({
        crmacct_id: 1,
        crmacct_number: '1000',
        crmacct_name: 'tjwebb',
        crmacct_active: true,
        crmacct_type: 'I'
      }, image.crmacct));
    });

  });

});
