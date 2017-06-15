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

function addAnimal(name, species, race, age, picture, callback) {
  id++;
  
  var animal = new Animal(id, name, species, race, age, picture);
  var r = new XMLHttpRequest();
  r.open("PUT", `http://localhost:8090/animals/${id}`, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    callback && callback();
  };
  r.send(JSON.stringify(animal));
  
  
  return id;
}

function removeAnimal(id, callback) {
  var r = new XMLHttpRequest();
  r.open("DELETE", `http://localhost:8090/animals/${id}`, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    callback && callback();
  };
  r.send();
}

function getAnimals(callback) {
  var r = new XMLHttpRequest();
  r.open("GET", "http://localhost:8090/animals", true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    callback && callback(JSON.parse(r.responseText));
  };
  r.send();
}


module.exports = {
  addAnimal: addAnimal,
  removeAnimal: removeAnimal,
  getAnimals: getAnimals
}

