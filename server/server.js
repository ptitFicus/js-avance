var Datastore = require("nedb");
var uuidv1 = require('uuid/v1');

var db = new Datastore({ filename: "./animals.db", autoload: true });

var restify = require("restify");
var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.bodyParser());

server.get("/animals/:id", function (req, res, next) {
  db.find({ _id: req.params.id }, function (err, docs) {
    if (err) {
      return res.next(err);
    }
    if (docs.length === 0) {
      res.send(404, new Error("Not found"));
      return res.next();
    }
    var animal = {
      id: docs[0]._id,
      name: docs[0].name,
      specie: docs[0].specie,
      race: docs[0].race,
      age: docs[0].age,
      photo: docs[0].photo
    };
    res.send(animal);
    res.next();
  });
});

server.get("/animals", function (req, res, next) {
  db.find({ _id: { $exists: true } }, function (err, docs) {
    if (err) {
      return res.next(err);
    }
    res.send(
      docs.map(doc => Object.assign(doc, { id: doc._id, _id: undefined }))
    );
    res.next();
  });
});

server.get("/byspecie/:specie", function (req, res, next) {
  db.find({ specie: req.params.specie }, function (err, docs) {
    if (err) {
      return res.next(err);
    }
    var result = [];
    for (var i = 0; i < docs.length; i++) {
      result.push({
        id: docs[i]._id,
        name: docs[i].name,
        specie: docs[i].specie,
        race: docs[i].race,
        age: docs[i].age,
        photo: docs[i].photo
      });
    }
    res.send(result);
    res.next();
  });
});

server.post("/animals", function (req, res, next) {
  console.log("PUT /animal/" + req.params.id + " " + req.params);
  const body = JSON.parse(req.body)

  var animal = {
    _id: uuidv1(),
    name: body.name,
    specie: body.specie,
    race: body.race,
    age: body.age,
    photo: body.photo
  };
  console.log("Adding animal:", animal);
  db.insert(animal, function (err, newDoc) {
    if (err) {
      return res.next(err);
    }
    res.send(200);
    res.next();
  });
  res.send(200);
  res.next();
});

server.del("/animals/:id", function (req, res, next) {
  db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
    if (numRemoved !== 1) {
      res.send(404, new Error("Not found"));
      return res.next();
    } else {
      res.send(200);
      res.next();
    }
  });
});

server.listen(8090, function () {
  console.log("%s listening at %s", server.name, server.url);
});
