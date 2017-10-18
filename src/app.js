/**
 * Rempli la section inventory de la liste des animaux avec
 * les animaux en mémoire
 */
function fillInventory() {
  var inventoryNode = document.getElementById("inventory");

  animals.forEach(function (animal) {
    var deleteFunction = function () {
      deleteAnimal(animal.id);
      repaint();
    }

    var entry = generateAnimalTag(animal, deleteFunction);
    inventoryNode.appendChild(entry);
  })
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

  var picture = document.createElement("img");
  picture.classList.add("animal-image");
  picture.setAttribute("src", animal.picture);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", deleteCallback);

  info.appendChild(specie);
  info.appendChild(race);
  info.appendChild(age);

  container.appendChild(info);
  container.appendChild(picture);

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

  addAnimal(name, specie, race, age, photo)

  repaint();
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