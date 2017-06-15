function Animal(id, name, species, race, age, picture) {
  this.id = id;
  this.name = name;
  this.species = species;
  this.race = race;
  this.age = age;
  this.picture = picture;
}

class AnimalContainer {
  constructor() {
    this.animals = new Map()
    this.id = 0
  }

  addAnimal(name, species, race, age, picture) {
    this.id++;
    this.animals.set(this.id, new Animal(this.id, name, species, race, age, picture));
    return this.id;
  }

  removeAnimal(id) {
    this.animals.delete(id)
  }

  getAnimals() {
    return [...this.animals.values()]
  }
}

module.exports = AnimalContainer