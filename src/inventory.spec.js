import Inventory from './inventory'

describe('Inventory', () => {
  test('should be empty at init', () => {
    const inventory = new Inventory()

    expect(inventory.animals.length).toBe(0)
  })
})

describe('addAnimal', () => {
  test('should add the given animal to the modue', () => {
    const inventory = new Inventory()
    const name = 'testAnimal'
    inventory.addAnimal({ name })

    expect(inventory.animals.length).toBe(1)
    expect(inventory.animals.find(animal => animal.name === name)).toBeTruthy()
  })
})

describe('deleteAnimal', () => {
  test('should delete given animal from the module', () => {
    const inventory = new Inventory()
    const name = 'testAnimal'
    inventory.addAnimal({ name })
    const { id } = inventory.animals[0]

    inventory.deleteAnimal(id)

    expect(inventory.animals.length).toBe(0)
  })
})
