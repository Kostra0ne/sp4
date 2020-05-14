require("dotenv").config();
const express = require("express");
const server = express();
const hbs = require("hbs");

// config
server.use(express.static(__dirname + "/static"));
server.use(express.urlencoded({ extended: false }));
server.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials"); // on indique à HBS où chercher les vues-partielles
server.set("view engine", "hbs");

const users = require("./data/users");

server.get("/", (req, res) => {
  res.render("home", {
    unBoutDeHTML: "<p>je suis du HTML</p>",
    messageJour: "foo bar baz"
  });
});

server.get("/about", (req, res) => {
  res.render("about", {
    team: [
      { name: "Elise", role: "Community Manager" },
      { name: "Bill", role: "Service après-vente" },
      { name: "Cheng", role: "Président" },
      { name: "Anna", role: "Service Technique" },
    ],
  });
});

server.get("/contact", (req, res) => {
  res.render("contact");
});

server.get("/products", (req, res) => {
  const products = require("./data/products");
  res.render("products", { products });
});

server.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

server.get("/login", (req, res) => {
  res.render("login", {
    needFontawesome: true,
    js: ["toggle-password-icon.js"],
  });
});

server.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/dashboard");
});

server.get("/signin", (req, res) => {
  res.render("signin");
});

server.post("/signin", (req, res) => {
  users.push(req.body); // req.body contient les données postées
  res.redirect("/temp-users");
});

server.get("/temp-users", (req, res) => {
  res.render("temp-users", {users});
});



server.listen(process.env.PORT, () => {
  console.log(`ready @ http://localhost:${process.env.PORT}`);
});
