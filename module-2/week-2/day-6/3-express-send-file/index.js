const express = require("express");
const server = express();
const PORT = 8000;

// configurer le serveur pour autoriser les clients à télécharger des ressources
//  (js, css, images, audio, videos, etc)
server.use(express.static(__dirname + "/static"));

// configurer le serveur pour recevoir les information postée (synchrone);
server.use(express.urlencoded({ extended: false }));

// __dirname est constante mise à dispo par node
// qui permet de s'adapter à n'importe quelle route...
// si on change de machine (typiquement pendant une mise en ligne) ...
// __dirname sera encore vrai pour le nouveau chemin

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

server.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

server.post("/contact", (req, res) => {
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.subject);
  console.log(req.body.message);
  // les données envoyées en POST sont accessibles dans l'objet request, sous la clé body ....
  res.redirect("/contact");
});

server.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

server.post("/register", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

server.listen(PORT, () => {
  console.log(`server ready : http://localhost:${PORT}`);
});
