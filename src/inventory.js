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
    this.ids = this.idGenerator()
  }

  addAnimal(name, species, race, age, picture) {
    const newId = this.ids.next()
    this.animals.set(newId, new Animal(newId, name, species, race, age, picture));
    return newId;
  }

  removeAnimal(id) {
    this.animals.delete(id)
  }

  getAnimals() {
    return [...this.animals.values()]
  }

  *idGenerator() {
    for(let i = 0; ; i++) {
      yield i
    }
  }
}

export default AnimalContainer