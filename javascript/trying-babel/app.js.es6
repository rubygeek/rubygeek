class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello I am ${this.name}`;
  }
}

let person = new Person("Bob");
console.log( person.greet() );