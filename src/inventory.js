function Animal(id, name, specie, race, age, picture) {
  this.id = id;
  this.name = name;
  this.specie = specie;
  this.race = race;
  this.age = age;
  this.picture = picture;
}

window.inventory = (function() {
  var animals = [];
  var id = 0;

  function addAnimal(name, specie, race, age, picture) {
    var animal = new Animal(id, name, specie, race, age, picture);
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

  return {
    addAnimal: addAnimal,
    removeAnimal: removeAnimal,
    getAnimals: getAnimals
  };
})();

