let store = function () {
  const animals = new Map();
  animals.set(1, new Animal(1, 'Lassie', 'Chien', 'Colley', 5, 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg'))
  animals.set(2, new Animal(2, 'Milou', 'Chien', 'Fox Terrier', 6, 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg'))
  animals.set(3, new Animal(3, 'Garfield', 'Chat', 'Chat de gouttière', 8, 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png'))

  let id = Math.max(...animals.keys());

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
  function addAnimal(...rest) {
    id += 1

    animals.set(id, new Animal(id, ...rest))

    return id
  }

  /**
   * Supprime l'animal correspondant à l'identifiant donné de la liste en mémoire
   * Cette fonction n'a pas d'impact sur l'interface graphique (il faut utiliser repaint pour cela)
   * @param {Number} id identifiant de l'animal à supprimer de la liste
   */
  function deleteAnimal(idToDelete) {
    animals.delete(idToDelete)
  }

  function getAnimals() {
    // ou Array.from(animals.values())
    return [...animals.values()]
  }

  return {
    addAnimal,
    deleteAnimal,
    getAnimals
  }
}()