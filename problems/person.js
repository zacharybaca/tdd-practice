class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this)
  }
}

const bob = new Person('bob', 32);
const bobby = new Person('bobby', 31);
bob.visit(bobby);
bob.switchVisit(bobby);

module.exports = Person;
