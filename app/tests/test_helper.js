


import chai from 'chai';
import sinon from 'sinon';
var expect = chai.expect;


chai.should();

var React;
var ReactDOM;



describe('ReactElement', function() {
  var ComponentClass;
  var originalSymbol;

  beforeEach(function() {

    // Delete the native Symbol if we have one to ensure we test the
    // unpolyfilled environment.
    originalSymbol = global.Symbol;
    global.Symbol = undefined;

    React = require('../src/lib/React');

    // NOTE: We're explicitly not using JSX here. This is intended to test
    // classic JS without JSX.
    ComponentClass = React.createClass({
      render: function() {
        return React.createElement('div');
      },
    });
  });

  afterEach(function() {
    global.Symbol = originalSymbol;
  });

  it('uses the fallback value when in an environment without Symbol', function() {
    expect(<div />.$$typeof).to.equal(0xeac7);
  });



});