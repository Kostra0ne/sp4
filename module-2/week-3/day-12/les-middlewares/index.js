const express = require("express");
const app = express();
const fs = require("fs"); // un module core de node qui permet d'intéragir avec le système de gestion de fichiers du serveur

// les middlewares sont des fonctions
function myFirstMiddleware(req, res, next) {
  console.log("foo");
  next();
}

function afficherDateNow(req, res, next) {
  console.log(Date.now());
  next();
}

function middlewareAvecParam(value) {
  // les middleware paramétrables nécessite une closure
  return function (req, res, next) {
    console.log(typeof value);
    next();
  };
}

function monMiddlewareQuiModifieLaRequest(req, res, next) {
    req.foo = "bar";
    next();
}

function logger(req, res, next) {
    const log = req.method + " " + req.path +  " " + Date.now() + '\n';
    fs.appendFileSync("log.txt", log);
    next();
}

app.get("/", myFirstMiddleware, logger, (req, res) => {
  console.log("dans la route /");
  res.send("hello from server");
});

app.get("/a", logger, myFirstMiddleware, afficherDateNow, (req, res) => {
  console.log("dans la route /a");
  res.send("hello from a");
});

app.get("/b", middlewareAvecParam(23), (req, res) => {
  console.log("dans la route /b");
  res.send("hello from b");
});

app.get("/c", monMiddlewareQuiModifieLaRequest, (req, res) => {
  console.log("dans la route /c");
  res.send("le serveur route c dit : " + req.foo + " !!!");
});


app.listen(8080, () => console.log("http://localhost:8080"));
