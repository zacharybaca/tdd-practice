// Your code here
const { expect } = require('chai');
const Person = require('../problems/person');

describe('Person class', function() {
    let person;
    let personTwo;
    beforeEach(() => {
        person = new Person('bob', 31);
        personTwo = new Person('bobby', 32);
    });
    // it('will throw an error if the name parameter is not a string', function() {
    //     const nameFunc = typeof person.name !== 'string';
    //     expect(nameFunc).to.throw(TypeError('Name needs to be a string'));
    // });
    it('will take in a name and age property', function() {
        expect(person).to.have.property('name');
        expect(person).to.have.property('age');
    });
    it('sayHello method should return a string of name and greeting message', function() {
        expect(person.sayHello()).to.equal(`Hello ${person.name}`);
    });
    it('should return a string of instance one visited instance two', function() {
        expect(person.visit(personTwo)).to.equal(`${person.name} visited ${personTwo.name}`);
    });
    it('should invoke visit method inside of switchVisit method', function() {
        expect(personTwo.switchVisit(person)).to.be.equal(person.visit(personTwo))
    })
});
