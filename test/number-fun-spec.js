// Your code here
const { expect } = require('chai');
const { returnsThree } = require('../problems/number-fun');
const { reciprocal } = require('../problems/number-fun');


describe('returnsThree function', function() {
    it('returns the number three', function() {
        expect(returnsThree()).to.equal(3);
    });
});

describe('reciprocal function', function() {
    it('takes in a number, and returns the reciprocal of that number', function() {
        let num = 2;
        let fracNum = 3/2;
        let decNum = 3.25;
        expect(reciprocal(num)).to.equal(0.5);
        expect(reciprocal(fracNum)).to.be.closeTo(0.667, 0.001);
        expect(reciprocal(decNum)).to.be.closeTo(0.308, 0.001);
    });
    it('throws a TypeError if a non-number is passed in as an argument', function() {
        let nonNum = 'hello';
        expect(() => reciprocal(nonNum)).to.throw(TypeError);
    });
});
