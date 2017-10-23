function* idGenerator() {
  for (let i = 4; ; i += 1) {
    yield i
  }
}

function Animal(id, name, specie, race, age, photo) {
  this.id = id
  this.name = name
  this.specie = specie
  this.race = race
  this.age = age
  this.photo = photo || 'http://lorempixel.com/output/animals-q-c-640-480-8.jpg'
}

class PetStore {
  animals = new Map()
  constructor() {
    this.ids = idGenerator()
  }

  addAnimal(...rest) {

    const newId = this.ids.next().value
    return fetch(`http://localhost:8090/animals`, { method: 'POST', body: JSON.stringify(new Animal(newId, ...rest)) })
      .catch(e => console.error(e))
  }

  deleteAnimal(idToDelete) {
    return fetch(`http://localhost:8090/animals/${idToDelete}`, { method: 'DELETE' })
      .catch(e => console.error(e))
  }

  getAnimals() {
    return fetch('http://localhost:8090/animals')
      .then(res => res.json())
      .catch(err => console.error(err))
  }

  findAnimalBySpecie(specie) {
    return fetch(`http://localhost:8090/byspecie/${specie}`)
      .then(res => res.json())
      .catch(err => console.error(err))
  }
}

export default PetStore
