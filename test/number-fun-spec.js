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
        expect(() => reciprocal(num)).to.equal(1/num);
    });
});
