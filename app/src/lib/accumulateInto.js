import chai from 'chai';
import ReactChildren from './src/lib/ReactChildren';

chai.should();

describe('ReactChildren', function() {
  var ReactChildren;
  var React;
  var ReactFragment;

  beforeEach(function() {
    ReactChildren = require('ReactChildren');
    React = require('React');
    ReactFragment = require('ReactFragment');
  });

  it('should support identity for simple', function() {
    var callback = jasmine.createSpy().and.callFake(function(kid, index) {
      return kid;
    });

    var simpleKid = <span key="simple" />;

    // First pass children into a component to fully simulate what happens when
    // using structures that arrive from transforms.

    var instance = <div>{simpleKid}</div>;
    ReactChildren.forEach(instance.props.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0);
    callback.calls.reset();
    var mappedChildren = ReactChildren.map(instance.props.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0);
    expect(mappedChildren[0]).toEqual(<span key=".$simple" />);


    
  });

});













describe('Greeter', () => {

    it('should introduce itself to the world', () => {
        const greeter = new Greeter();
        greeter.sayHello().should.equal('hello world!');
    });

});
