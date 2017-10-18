var store = function () {
  var animals = [
    { id: 1, name: 'Lassie', specie: 'Chien', race: 'Colley', age: 5, picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg' },
    { id: 2, name: 'Milou', specie: 'Chien', race: 'Fox Terrier', age: 6, picture: 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg' },
    { id: 3, name: 'Garfield', specie: 'Chat', race: 'Chat de gouttière', age: 8, picture: 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png' }
  ];

  var id = animals.reduce(function (acc, next) {
    return next.id > acc ? next.id : acc
  }, 0)

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

    animals.push({
      id: id,
      name: name,
      specie: specie,
      race: race,
      age: age,
      photo: photo
    })

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