'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(idGenerateur);

function idGenerateur(initial) {
  var i;
  return regeneratorRuntime.wrap(function idGenerateur$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = initial;

        case 1:
          _context.next = 3;
          return i;

        case 3:
          i++;
          _context.next = 1;
          break;

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var Inventory = function () {
  function Inventory() {
    _classCallCheck(this, Inventory);

    this._animals = new Map([[1, new Animal(1, 'Lassie', 'Chien', 'Colley', 5, 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Lassie.jpg')], [2, new Animal(2, 'Milou', 'Chien', 'Fox Terrier', 6, 'http://www.tintin.com/tintin/persos/milou/milou_seul.jpg')], [3, new Animal(3, 'Garfield', 'Chat', 'Chat de gouttière', 8, 'http://www.imagespourtoi.com/lesimages/garfield/image-garfield-3.png')]]);

    this.id = [].concat(_toConsumableArray(this._animals.keys())).reduce(function (acc, id) {
      return id > acc ? id : acc;
    }, 0);

    this.generateur = idGenerateur(this.id + 1);
  }

  _createClass(Inventory, [{
    key: 'deleteAnimal',
    value: function deleteAnimal(id) {
      this._animals.delete(id);
    }
  }, {
    key: 'addAnimal',
    value: function addAnimal(animal) {
      var newId = this.generateur.next().value;
      this._animals.set(newId, new Animal(newId, animal.name, animal.specie, animal.race, animal.age, animal.photo));
    }
  }, {
    key: 'animals',
    get: function get() {
      return [].concat(_toConsumableArray(this._animals.values()));
    }
  }]);

  return Inventory;
}();

function Animal(id, name, specie, race, age, photo) {
  this.id = id;
  this.name = name;
  this.specie = specie;
  this.race = race;
  this.age = age;
  this.photo = photo;
}