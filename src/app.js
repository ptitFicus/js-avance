import PetStore from './inventory'
import './style.css'
import _ from 'lodash'

const store = new PetStore()

function repaintAll() {
  store.getAnimals()
    .then(animals => repaint(animals))
    .catch(err => console.error(err))
}


function fillInventory(animals) {
  const inventoryNode = document.getElementById('inventory')
  animals.forEach((animal) => {
    const deleteFunction = function () {
      store.deleteAnimal(animal.id)
        .then(repaintAll)
        .catch(e => console.error(e))
    }

    const entry = generateAnimalTag(animal, deleteFunction)
    inventoryNode.appendChild(entry)
  })
}

/**
 *
 * @param {Object} animal génère le markup HTML pour un animal donné
 * @param {Function} deleteCallback fonction qui sera appelé au clic sur le bouton de suppression de l'animal
 */
function generateAnimalTag(animal, deleteCallback) {
  const entry = document.createElement('div')
  entry.classList.add('animal')

  const name = document.createElement('div')
  name.classList.add('animal-name')
  name.textContent = animal.name

  const container = document.createElement('div')
  container.classList.add('container')

  const info = document.createElement('div')
  info.classList.add('animal-info')

  const specie = document.createElement('div')
  specie.textContent = `Espèce : ${animal.specie}`

  const race = document.createElement('div')
  race.textContent = `Race : ${animal.race}`

  const age = document.createElement('div')
  age.textContent = `Age : ${animal.age}`

  const picture = document.createElement('img')
  picture.classList.add('animal-image')
  picture.setAttribute('src', animal.photo)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'X'
  deleteButton.classList.add('delete-button')

  deleteButton.addEventListener('click', deleteCallback)

  info.appendChild(specie)
  info.appendChild(race)
  info.appendChild(age)

  container.appendChild(info)
  container.appendChild(picture)

  entry.appendChild(deleteButton)
  entry.appendChild(name)
  entry.appendChild(container)

  return entry
}


function registerAnimal(e) {
  e.preventDefault()
  const form = e.target

  const name = form['input-name'].value
  const specie = form['input-species'].value
  const race = form['input-race'].value
  const age = form['input-age'].value
  const photo = form['input-photo'].value

  store.addAnimal(name, specie, race, age, photo)
    .then(repaint)
    .catch(e => console.error(e))

  form.reset()
}

function repaint(animals) {
  clearInventory()
  fillInventory(animals)
}

function clearInventory() {
  const inventoryNode = document.getElementById('inventory')
  while (inventoryNode.hasChildNodes()) {
    inventoryNode.removeChild(inventoryNode.firstChild)
  }
}

function filterAnimals(e) {
  const input = e.target
  console.log(input.value)
  const search = input.value;

  (search ? store.findAnimalBySpecie(search) : store.getAnimals())
    .then(animals => {
      console.log(animals)
      repaint(animals)
    })
    .catch(err => console.error(err))
}



/**
 * Fonction d'initialisation : ajoute l'event listener sur le formulaire de saisie des animaux
 */
function init() {
  document.getElementById('creation-form').addEventListener('submit', registerAnimal)
  document.getElementById('search-input').addEventListener('input', _.debounce(filterAnimals, 500))
  repaintAll()
}
init()
