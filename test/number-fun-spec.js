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
        let decNum = 3.25
        expect(() => reciprocal(num)).to.equal(0.5);
        expect(() => reciprocal(fracNum)).to.equal(0.667));
        expect(() => reciprocal(decNum)).to.equal(0.308);
    });
});
