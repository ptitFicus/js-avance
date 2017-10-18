class PetStore {
  constructor() {
    this.animals = new Map();

    this.ids = this.idGenerator()
  }

  addAnimal(...rest) {
    const newId = this.ids.next().value

    this.animals.set(newId, new Animal(newId, ...rest))

    return newId
  }

  deleteAnimal(idToDelete) {
    this.animals.delete(idToDelete)
  }

  getAnimals() {
    // ou Array.from(animals.values())
    return [...this.animals.values()]
  }

  *idGenerator() {
    for (let i = 0; ; i++) {
      yield i
    }
  }
}

function Animal(id, name, specie, race, age, photo) {
  this.id = id;
  this.name = name;
  this.specie = specie;
  this.race = race;
  this.age = age;
  this.photo = photo;
}