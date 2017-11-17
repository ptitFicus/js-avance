class Inventory {
  _animals = new Map()

  deleteAnimal(id, callback) {
    var r = new XMLHttpRequest();
    r.open("DELETE", `http://localhost:8090/animals/${id}`, true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      callback && callback();
    };
    r.send();
  }

  addAnimal(animal, callback) {
    var r = new XMLHttpRequest();
    r.open("POST", `http://localhost:8090/animals`, true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      callback && callback();
    };
    r.send(JSON.stringify(animal));
  }

  getAnimals(callback) {
    var r = new XMLHttpRequest();
    r.open("GET", "http://localhost:8090/animals", true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      callback && callback(JSON.parse(r.responseText));
    };
    r.send();
  }
}

function Animal(id, name, specie, race, age, photo) {
  this.id = id
  this.name = name
  this.specie = specie
  this.race = race
  this.age = age
  this.photo = photo
}

export default Inventory
