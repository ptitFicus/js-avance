class Inventory {
  constructor() {
    this.animals = new Map();
    this.animals.set(1, new Animal(1, { name: 'Lassie', specie: 'Chien', race: 'Colley', age: 5, photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg' }));
    this.animals.set(2, new Animal(2, { name: 'Milou', specie: 'Chien', race: 'Fox Terrier', age: 6, photo: 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg' }));
    this.animals.set(3, new Animal(3, { name: 'Garfield', specie: 'Chat', race: 'Chat de gouttière', age: 8, photo: 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png' }));

    this.id = [...this.animals.keys()]
      .reduce(function (acc, nextId) {
        if (nextId > acc) return nextId
        else return acc
      }, 0)
  }

  deleteAnimal(id) {
    this.animals.delete(id)
  }

  addAnimal(animal) {
    this.id += 1
    this.animals.set(this.id, new Animal(this.id, animal));
  }

  getAnimals() {
    return [...this.animals.values()]
  }
}

function Animal(id, { name, specie, race, age, photo }) {
  this.id = id;
  this.name = name;
  this.specie = specie;
  this.race = race;
  this.age = age;
  this.photo = photo;
}