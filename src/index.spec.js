import PetStore from './inventory'

test('PetStore should be empty at first', () => {
  const store = new PetStore()
  expect(store.getAnimals()).toHaveLength(0)
});