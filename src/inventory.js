function Animal(id, name, species, race, age, picture) {
  this.id = id;
  this.name = name;
  this.species = species;
  this.race = race;
  this.age = age;
  this.picture = picture;
}

var animals = [];

var id = 1000;

async function addAnimal(name, species, race, age, picture, callback) {
  id++;

  var animal = new Animal(id, name, species, race, age, picture);
  try {
    await fetch(`http://localhost:8090/animals/${id}`, {
      method: "PUT",
      body: JSON.stringify(animal)
    });

    callback();
  } catch (error) {
    console.error(error);
  }

  return id;
}

function removeAnimal(id, callback) {
  fetch(`http://localhost:8090/animals/${id}`, { method: "DELETE" })
    .then(callback)
    .catch(e => console.error(e));
}

function getAnimals(callback) {
  fetch("http://localhost:8090/animals")
    .then(res => res.json())
    .then(json => callback(json))
    .catch(e => console.error(e));
}

module.exports = {
  addAnimal: addAnimal,
  removeAnimal: removeAnimal,
  getAnimals: getAnimals
};
