var store = function () {
  var animals = [
    new Animal(1, 'Lassie', 'Chien', 'Colley', 5, 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg'),
    new Animal(2, 'Milou', 'Chien', 'Fox Terrier', 6, 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg'),
    new Animal(3, 'Garfield', 'Chat', 'Chat de gouttière', 8, 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png')
  ];

  var id = animals.reduce(function (acc, next) {
    return next.id > acc ? next.id : acc
  }, 0)


  function Animal(id, name, specie, race, age, photo) {
    this.id = id;
    this.name = name;
    this.specie = specie;
    this.race = race;
    this.age = age;
    this.photo = photo;
  }

  /**
   * 
   * @param {String} name nom du nouvel animal
   * @param {String} specie espèce du nouvel animal
   * @param {String} race race du nouvel animal
   * @param {Number} age âge du nouvel animal
   * @param {String} photo  url de la photo du nouvel animal
   */
  function addAnimal(name, specie, race, age, photo) {
    id += 1

    animals.push(new Animal(id, name, specie, race, age, photo))

    return id
  }

  /**
   * Supprime l'animal correspondant à l'identifiant donné de la liste en mémoire
   * Cette fonction n'a pas d'impact sur l'interface graphique (il faut utiliser repaint pour cela)
   * @param {Number} id identifiant de l'animal à supprimer de la liste
   */
  function deleteAnimal(id) {
    animals = animals.filter(function (animal) {
      return animal.id !== id
    })
  }

  function getAnimals() {
    return animals.slice()
  }

  return {
    addAnimal: addAnimal,
    deleteAnimal: deleteAnimal,
    getAnimals: getAnimals
  }
}()