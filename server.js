var Datastore = require("nedb");
var db = new Datastore({ filename: "./animals.db", autoload: true });

var restify = require("restify");
var server = restify.createServer();
server.use(restify.bodyParser());

var bunyan = require("bunyan");
server.on(
  "after",
  restify.auditLogger({
    log: bunyan.createLogger({ name: "audit", stream: process.stdout })
  })
);

server.get("/animals/:id", function(req, res, next) {
  db.find({ _id: req.params.id }, function(err, docs) {
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
      species: docs[0].species,
      race: docs[0].race,
      age: docs[0].age,
      picture: docs[0].picture
    };
    res.send(animal);
    res.next();
  });
});

server.get("/animals", function(req, res, next) {
  db.find({ _id: { $exists: true } }, function(err, docs) {
    if (err) {
      return res.next(err);
    }
    res.send(
      docs.map(function(doc) {
        return doc._id;
      })
    );
    res.next();
  });
});

server.get("/byspecies/:species", function(req, res, next) {
  db.find({ species: req.params.species }, function(err, docs) {
    if (err) {
      return res.next(err);
    }
    var result = [];
    for (var i = 0; i < docs.length; i++) {
      result.push({
        id: docs[i]._id,
        name: docs[i].name,
        species: docs[i].species,
        race: docs[i].race,
        age: docs[i].age,
        picture: docs[i].picture
      });
    }
    res.send(result);
    res.next();
  });
});

server.put("/animals/:id", function(req, res, next) {
  console.log("PUT /animal/" + req.params.id + " " + req.params);
  db.find({ _id: req.params.id }, function(err, docs) {
    if (err) {
      return res.next(err);
    }
    if (docs.length !== 0) {
      res.send(400, "Already exists");
      return res.next();
    } else {
      var animal = {
        _id: req.params.id,
        name: req.params.name,
        species: req.params.species,
        race: req.params.race,
        age: req.params.age,
        picture: req.params.picture
      };
      console.log("Adding animal:", animal);
      db.insert(animal, function(err, newDoc) {
        if (err) {
          return res.next(err);
        }
        res.send(200);
        res.next();
      });
    }
  });
  res.send(200);
  res.next();
});

server.del("/animals/:id", function(req, res, next) {
  db.remove({ _id: req.params.id }, {}, function(err, numRemoved) {
    if (numRemoved !== 1) {
      res.send(404, new Error("Not found"));
      return res.next();
    } else {
      res.send(200);
      res.next();
    }
  });
});

server.listen(8090, function() {
  console.log("%s listening at %s", server.name, server.url);
});
