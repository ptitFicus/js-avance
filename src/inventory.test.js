
import AnimalContainer from './inventory'

describe('my inventory should', () => {

test('add animals', () => {
  const inventory = new AnimalContainer();
  inventory.addAnimal("Ramses", "Chat", "Sphynx", 8, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sphinx2_July_2006.jpg/100px-Sphinx2_July_2006.jpg")

  const animals = inventory.getAnimals();
  expect(animals.length).toBe(1)

  const item = animals[0];
  expect(item.id).toBe(0)
  expect(item.name).toBe("Ramses")
  expect(item.species).toBe("Chat")
  expect(item.race).toBe("Sphynx")
  expect(item.age).toBe(8)
  expect(item.picture).toBe("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sphinx2_July_2006.jpg/100px-Sphinx2_July_2006.jpg")
});

test('remove animals', () => {
  const inventory = new AnimalContainer();
  inventory.addAnimal("Ramses", "Chat", "Sphynx", 8, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sphinx2_July_2006.jpg/100px-Sphinx2_July_2006.jpg")

  const animals = inventory.getAnimals();
  expect(animals.length).toBe(1)
  expect(animals[0].id).toBe(0)

  inventory.removeAnimal(0)
  expect(animals.length).toBe(1)
});
});
