console.log("Hello, world");
// configuration basique d'un serveur web avec express ...
const express = require("express"); // importer la dépendance express dasn ce module (fichier)
const server = express(); // express est une fonction qu'on exécute pour obtenir un objet serveur
const PORT = 8000; // un serveur web a besoin d'écouter les requêtes HTTP sur un port donné, ici : le port 8000

// configurer la route "racine" de notre serveur web
server.get("/", (requestHTTP, responseHTTP) => {
  // le premier argument est une string représentant la route (URL), 
  // le second est un callback (function) qui sera exécutée à chaque fois que la route est requêtée
  // le callback prend TOUJOURS deux arguments contenant 2 objets
  // le premier représente la requête HTTP entrante
  // le second représente la réponse HTTP que l'on va renvoyer au serveur
  // ici, quand un client (navigateur) "requête" cette URL avec le verbe GET...
  responseHTTP.send("It's all good friend ;)"); // on "répond" au client avec la chaîne "it's all good friend"
});

// on peut configurer autant de routes que nécessaire
server.get("/about", (requestHTTP, responseHTTP) => {
  responseHTTP.send("<h1>About</h1>"); // ici on retourne une chaîne HTML
});

server.get("/contact", (toto, titi) => {
  // les deux paramètres du callback peuvent être nommés toto et titi ...
  titi.send("<h1>Contact</h1><p>waaaah</p>"); // ici, on répond également avec du HTML
});

server.get("/user", function(req, res) {
  // req et res sont des noms de paramètres utilisés fréquement (documentation express, stackoverflow, etc)
  res.send('{"name": "toto", "age": 0}'); // ici, on répond en envoyant un objet JSON au client
});

// pour démarrer le serveur, on va "écouter" sur le port spécifié
server.listen(PORT, () => console.log(`server is ready to rock @ : http://localhost:${PORT}`));
