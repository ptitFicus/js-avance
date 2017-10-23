var inventory = (function () {

  var animals = new Map();
  animals.set(1, new Animal(1, { name: 'Lassie', specie: 'Chien', race: 'Colley', age: 5, photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg' }));
  animals.set(2, new Animal(2, { name: 'Milou', specie: 'Chien', race: 'Fox Terrier', age: 6, photo: 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg' }));
  animals.set(3, new Animal(3, { name: 'Garfield', specie: 'Chat', race: 'Chat de gouttière', age: 8, photo: 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png' }));

  var id = [...animals.keys()]
    .reduce(function (acc, nextId) {
      if (nextId > acc) return nextId
      else return acc
    }, 0)

  function deleteAnimal(id) {
    animals.delete(id)
  }

  function addAnimal(animal) {
    id += 1
    animals.set(id, new Animal(id, animal));
  }

  return {
    deleteAnimal: deleteAnimal,
    addAnimal: addAnimal,
    getAnimals: function () {
      return [...animals.values()]
    }
  }
}())

function Animal(id, { name, specie, race, age, photo }) {
  this.id = id;
  this.name = name;
  this.specie = specie;
  this.race = race;
  this.age = age;
  this.photo = photo;
}