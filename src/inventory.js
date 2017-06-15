function Animal(id, name, species, race, age, picture) {
  this.id = id;
  this.name = name;
  this.species = species;
  this.race = race;
  this.age = age;
  this.picture = picture;
}


var animals = new Map();

var id = 0;

function addAnimal(name, species, race, age, picture) {
  id++;
  animals.set(id, new Animal(id, name, species, race, age, picture));
  return id;
}

function removeAnimal(id) {
  animals.delete(id)
}

function getAnimals() {
  return [...animals.values()]
}


module.exports = {
  addAnimal,
  removeAnimal,
  getAnimals
}

