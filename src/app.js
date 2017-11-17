import Vue from 'vue'
import PetStore from './inventory'
import _ from 'lodash'
import './style.css'

const store = new PetStore()

new Vue({
  el: '#app',
  data() {
    return {
      formData: {
        name: '',
        specie: '',
        race: '',
        age: '',
        photo: '',
      },
      animals: [],
      specie: '',
    }
  },
  mounted() {
    this.refreshAnimals()
  },
  methods: {
    registerAnimal(e) {
      store.addAnimal(this.formData)
      this.refreshAnimals()
    },
    refreshAnimals() {
      store
        .getAnimals()
        .then(animals => (this.animals = animals))
        .catch(err => console.error(err))
    },
    deleteAnimal(id) {
      store
        .deleteAnimal(id)
        .then(this.refreshAnimals)
        .catch(err => console.error(err))
    },
    filterAnimal: _.debounce(function () {
      (this.specie ? store.findAnimalBySpecie(this.specie) : store.getAnimals())
        .then(animals => (this.animals = animals))
        .catch(err => console.error(err))
    }, 500),
  },
})
