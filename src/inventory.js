function* idGenerateur(initial) {
  for(var i = initial; ; i++) yield i;
}

class Inventory {
  constructor() {
    this._animals = new Map(
      [
      [1, new Animal(1, 'Lassie', 'Chien', 'Colley', 5, 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg')],
      [2, new Animal(2, 'Milou', 'Chien', 'Fox Terrier', 6, 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg')],
      [3, new Animal(3, 'Garfield', 'Chat', 'Chat de gouttière', 8, 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png')]
    ]);

    this.id = [...this._animals.keys()]
      .reduce((acc, id) => id > acc ? id : acc, 0)
    
    this.generateur = idGenerateur(this.id + 1)
  }

  deleteAnimal(id) {
    this._animals.delete(id)
  }

  addAnimal(animal) {
    const newId = this.generateur.next().value
    this._animals.set(newId, new Animal(newId, animal.name, animal.specie, animal.race, animal.age, animal.photo))
  }

  get animals() {
    return [...this._animals.values()]
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


