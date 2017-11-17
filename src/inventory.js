function* idGenerateur(initial) {
  for (let i = initial; ; i++) yield i
}

class Inventory {
  _animals = new Map()

  constructor() {
    this.id = [...this._animals.keys()].reduce((acc, id) => (id > acc ? id : acc), 0)

    this.generateur = idGenerateur(this.id + 1)
  }

  deleteAnimal(id) {
    this._animals.delete(id)
  }

  addAnimal(animal) {
    const newId = this.generateur.next().value
    this._animals.set(
      newId,
      new Animal(newId, animal.name, animal.specie, animal.race, animal.age, animal.photo),
    )
  }

  get animals() {
    return [...this._animals.values()]
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
