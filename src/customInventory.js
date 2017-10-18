var store = function (store) {

  store.searchBySpecie = function (specie) {
    return store.getAnimals().filter(function (animal) {
      return animal.specie === specie
    })
  }

  return store;
}(store)