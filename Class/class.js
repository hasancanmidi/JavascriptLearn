class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`Merhaba, benim adım ${this.name} ve ben ${this.age} yaşındayım.`);
    }
  }
  
// Calling speak function

const person = new Person("hasan",24);
person.speak();