// Your code here
const reverseString = require('../problems/reverse-string');
const { expect } = require('chai');


describe('reverseString Function', function() {
    it('When given an input of "fun", return "nuf"', function() {
        let passedString = "fun";
        let resultString = "nuf";
        let reversedString = reverseString(passedString);

        expect(reversedString).to.equal(resultString);
    })
})
