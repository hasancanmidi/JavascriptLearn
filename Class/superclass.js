class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    makeSound() {
      console.log(`${this.name} is making a sound!`);
    }
  
    showInfo() {
      console.log(`This is a ${this.species} named ${this.name}.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, "dog");
      this.breed = breed;
    }
  
    makeSound() {
      console.log(`${this.name} is barking!`);
    }
  }
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  myDog.showInfo(); // "This is a dog named Buddy."
  myDog.makeSound(); // "Buddy is barking!"
  