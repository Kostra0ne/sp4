// VARIABLES ENVIRONNEMENT
require("dotenv").config();
// la ligne ci-dessus va lire les clé/valeurs du fichier de configuration .env et les mettre à dispo dans tous les fichers de notre app back => // process.env.NOMCLE

// BASE VARS

const express = require("express");
const hbs = require("hbs");
const server = express();
const PORT = process.env.PORT;

// CONFIG STATIC
server.use(express.static(__dirname + "/static"));
// CONFIG POST DATA
server.use(express.urlencoded({ extended: false }));
// CONFIG TEMPLATING
server.set("views", __dirname + "/views");
server.set("view engine", "hbs");

// ROUTING
server.get(["/", "/home"], (req, res) => {
  const data = {
    title: "Bienvenue",
    numbers: [100, 2000, 3, 44],
    strings: ["yo", "bien", "tout", "???"],
    isOpen: true,
    cat: {
      name: "Fugee",
      age: 0.9,
      colors: ["white", "grey"],
      eyeColor: "blue",
      isCute: true,
      isEvil: true
    }
  };
  res.render("home", data); // data doit être un object
});

server.get("/about", (req, res) => {
  const data = {
    title: "A propos de mon Shop",
    team: [
      {name: "Elise", role: "Community Manager"},
      {name: "Bill", role: "Service après-vente"},
      {name: "Cheng", role: "Président"},
      {name: "Anna", role: "Service Technique"},
    ]
  };
  res.render("about", data);
});

server.get("/contact", (req, res) => {
  const data = {
    title: "Nous contacter",
    subjects: [
      {
        value: "information",
        text: "Information générales"
      },
      {
        value: "recrutement",
        text: "Postuler"
      },
      {
        value: "jeux-concours",
        text: "Jeux concours"
      },
      {
        value: "SAV",
        text: "Service après-vente"
      },
    ]
  };
  res.render("contact", data);
});

server.get("/login", (req, res) => {
  res.render("login", {
    title: "Connectez-vous",
  });
});

server.get("/signin", (req, res) => {
  res.render("signin", {
    title: "Inscrivez-vous",
  });
});

// KICKSTART
server.listen(PORT, () => {
  console.log(`server running @ http://localhost:${PORT}`);
});
