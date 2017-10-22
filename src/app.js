var animals = [
  { id: 1, name: 'Lassie', specie: 'Chien', race: 'Colley', age: 5, photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg' },
  { id: 2, name: 'Milou', specie: 'Chien', race: 'Fox Terrier', age: 6, photo: 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg' },
  { id: 3, name: 'Garfield', specie: 'Chat', race: 'Chat de gouttière', age: 8, photo: 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png' }
];

// On détermine l'id de départ en cherchant l'id max parmis ceux qui existent déjà
var id = 0;
for (var i = 0; i < animals.length; i++) {
  var localId = animals[i].id
  if (localId > id) {
    id = localId
  }
}

/**
 * Supprime l'animal correspondant à l'identifiant donné de la liste en mémoire
 * Cette fonction n'a pas d'impact sur l'interface graphique (il faut utiliser repaint pour cela)
 * @param {Number} id identifiant de l'animal à supprimer de la liste
 */
function deleteAnimal(id) {
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    if (animal.id === id) {
      animals.splice(i, 1);
      break;
    }
  }
  repaint();
}

/**
 * Ajoute un animale à la liste des animaux
 * @param {Object} animal animal à ajouter à la liste
 */
function addAnimal(animal) {
  id += 1
  animal.id = id
  animals.push(animal)

  repaint();
}


/**
 * Rempli la section inventory de la liste des animaux avec
 * les animaux en mémoire
 */
function fillInventory() {
  var inventoryNode = document.getElementById("inventory");
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];

    var deleteFunction = function () {
      deleteAnimal(animal.id);
    }

    var entry = generateAnimalTag(animal, deleteFunction);
    inventoryNode.appendChild(entry);
  }
}




/********************************************************
 * LA SECTION CI-DESSOUS CONTIENT LES METHODES MANIPULANT
 * LE DOM. CES METHODES N'ONT PAS A ETRE MODIFIEE DANS LE
 * CADRE DE CET EXERCICE
 ********************************************************/
/**
 * 
 * @param {Object} animal génère le markup HTML pour un animal donné
 * @param {Function} deleteCallback fonction qui sera appelé au clic sur le bouton de suppression de l'animal
 */
function generateAnimalTag(animal, deleteCallback) {
  var entry = document.createElement("div");
  entry.classList.add("animal");

  var name = document.createElement("div");
  name.classList.add("animal-name");
  name.textContent = animal.name;

  var container = document.createElement("div");
  container.classList.add("container");

  var info = document.createElement("div");
  info.classList.add("animal-info");

  var specie = document.createElement("div");
  specie.textContent = "Espèce : " + animal.specie;

  var race = document.createElement("div");
  race.textContent = "Race : " + animal.race;

  var age = document.createElement("div");
  age.textContent = "Age : " + animal.age;

  var photo = document.createElement("img");
  photo.classList.add("animal-image");
  photo.setAttribute("src", animal.photo);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", deleteCallback);

  info.appendChild(specie);
  info.appendChild(race);
  info.appendChild(age);

  container.appendChild(info);
  container.appendChild(photo);

  entry.appendChild(deleteButton);
  entry.appendChild(name);
  entry.appendChild(container);

  return entry;
}

/**
 * Listener au submit du formulaire : récupère les données du formulaire,
 * ajoute le nouvel animale à la liste en mémoire et déclenche la mise à jour
 * de l'interface graphique
 * @param {Event} e l'évènement de submit du formulaire
 */
function registerAnimal(e) {
  e.preventDefault();
  var form = e.target;

  var name = form["input-name"].value;
  var specie = form["input-species"].value;
  var race = form["input-race"].value;
  var age = form["input-age"].value;
  var photo = form["input-photo"].value;

  e.target.reset();

  addAnimal({
    name: name,
    specie: specie,
    race: race,
    age: age,
    photo: photo
  })
}


/**
 * Repaint l'interface graphique en supprimant tous les éléments qui y sont affichés
 * puis réaffichant tous les éléments présents en mémoire.
 * Cette fonction permet d'appliquer les mises à jour de la liste animals graphiquement
 */
function repaint() {
  clearInventory();
  fillInventory();
}

/**
 * Vide la section inventory de l'interface graphique
 */
function clearInventory() {
  var inventoryNode = document.getElementById("inventory");
  while (inventoryNode.hasChildNodes()) {
    inventoryNode.removeChild(inventoryNode.firstChild);
  }
}

/**
 * Fonction d'initialisation : ajoute l'event listener sur le formulaire de saisie des animaux
 */
function init() {
  document
    .getElementById("creation-form")
    .addEventListener("submit", registerAnimal);
  repaint();
}
init();