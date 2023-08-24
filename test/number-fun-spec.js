// Your code here
const { expect } = require('chai');
const { returnsThree } = require('../problems/number-fun');
const { reciprocal } = require('../problems/number-fun');


describe('returnsThree function', function() {
    it('returns the number three', function() {
        expect(returnsThree()).to.equal(3);
    })
})
