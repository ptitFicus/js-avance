class Inventory {
  _animals = new Map()

  deleteAnimal(id) {
    return fetch(
      `http://localhost:8090/animals/${id}`,
      { method: 'DELETE' }
    )
    .catch(e => console.error(e))
  }

  addAnimal(animal) {
    return fetch(
      `http://localhost:8090/animals`,
      { method: 'POST', body: JSON.stringify(animal) }
    )
    .catch(e => console.error(e))
  }

  getAnimals() {
    return fetch("http://localhost:8090/animals")
      .then(resp => resp.json())
      .catch(err => console.error(err))
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
