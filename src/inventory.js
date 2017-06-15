function Animal(id, name, species, race, age, picture) {
  this.id = id;
  this.name = name;
  this.species = species;
  this.race = race;
  this.age = age;
  this.picture = picture;
}


var animals = [];

var id = 0;

function addAnimal(name, species, race, age, picture) {
  var animal = new Animal(id, name, species, race, age, picture);
  id++;
  animals.push(animal);
  console.log(animals);

  return id;
}

function removeAnimal(id) {
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    if (animal.id === id) {
      animals.splice(i, 1);
      break;
    }
  }
  console.log(animals);
}

function getAnimals() {
  return animals
}


module.exports = {
  addAnimal,
  removeAnimal,
  getAnimals
}

