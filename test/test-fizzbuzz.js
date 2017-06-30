const fizzbuzzFunction = require('../fizzbuzzer');
const should = require('chai').should();

describe('fizzbuzz', function() {
  it('should be a type of number', function() {
    //fizzbuzzFunction(number).should.typeOf(number);
    (function() {
        fizzBuzzer('string')
    }).should.throw(Error);

  });
  it('if number is % 15 === 0, returns fizzbuzz', function() {
    fizzbuzzFunction(30).should.equal('fizz-buzz');
  });
  it('if number is % 5 === 0, returns buzz', function() {
    fizzbuzzFunction(10).should.equal('buzz');
  });
  it('if number is % 3 === 0, returns fizz', function() {
    fizzbuzzFunction(9).should.equal('fizz');
  });
  it('if the number is prime', function() {
    fizzbuzzFunction(7).should.equal(7);
  });
});

