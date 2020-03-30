console.log("------- Module Loaded ------");

// dans les modules, les éléments du DOM seront chargés quoiqu'il en soit, pas besoin d'attendre le load/DOMContentLoaded
// dans ce cours, je favoriserai cette technique !

const mySpan = document.getElementById("my-dom-span");
const nullPourLeMoment = document.getElementById("foo");

console.log(mySpan);
console.log(typeof mySpan);
console.log(mySpan.id); // id est acccessible en lecture/écriture
// mySpan.id = "foo-bar-baz"; // on peut donc le modifier mais ce n'est pas vraiment une bonne idée : les id sont censés être attribués explicitement à un élément donc, il faut vraiment avoir une bonne raison de le faire...

console.log("nullPourLeMoment >>>", nullPourLeMoment);

console.log("----------- className --------------------");

console.log(mySpan.className);

mySpan.className += " important-text";

console.log(mySpan.className);

console.log("----------- textContent --------------------");

const myParag = document.getElementById("my-parag");
console.log(myParag);
const memory = myParag.textContent;
console.log(myParag.textContent === memory);

myParag.textContent = "";

setTimeout(() => {
  myParag.textContent = memory + " foo bar bar 42 !!!!!";
  myParag.textContent += "<br>JS+HTML+CSS === HTML5 === CA ROX DES PONEYS"; // pas top pour ajouter des tags HTML
  // textContent est focalisé sur les node-text
}, 2000);

console.log("----------- innerHTML --------------------");
// si l'on souhaite modifier la structure HMTL enfant d'un élément, on utilisera la propriété innerHTML

setTimeout(() => {
  // on a inséré physiquement dans le document dans le navigateur (pas dans ton fichier hein ^^')
  // on a ajouté des noeuds (nodes) parent/enfants qui au final sont du markup HTML tout à fait classique ; )
  myParag.textContent = "";
  myParag.innerHTML = `
        <ul class="list">
            <li class="item">JS(ES5...6...7...8)+HTML(5)+CSS(3)</li>
            <li class="item">cad => HTML5</li>
            <li class="item">CA ROX DES PONEYS</li>
        </ul>
    `;
}, 2000);

console.log("----------- byClassName --------------------");
const titles = document.getElementsByClassName("title"); // des méthods un peu datées
console.log(titles);

console.log("----------- byTagName --------------------"); // utilise parfois (les HTMLCollections sont dites "live")
const parags = document.getElementsByTagName("p");
console.log(parags);

console.log(
  "-------- parcourir des HTML collections avec la boucle for ... ---------"
);

for (let i = 0; i < titles.length; i += 1) {
  console.log(titles[i]);
}

// avec console.log : si le paragraphe courant a un id, l'afficher, sinon afficher un message indiquant son absence
for (let i = 0; i < parags.length; i++) {
  //   console.log(parags[i]);
  //   console.log(parags[i].id);
  //   console.log(parags[i].id.length);

  // soluce longue
  //   if (parags[i].id.length > 0) console.log(parags[i].id);
  //   else console.log("ce paragraphe n'a pas d'id...");

  console.log(parags[i].id ? parags[i].id : "ce paragraphe n'a pas d'id...");
}

console.log("fin boucle...");

console.log(
  "---------  utilisation de forEach pour les HTMLCollections (conversion en Array) ---------------"
);
// le prototype des HTMLCollections (retournées par getElementsByClassName et getElementsByTagName ) n'implémente pas forEach ni les autres HOF du proto d'Array. Il y a quand même une technique pour contourner ceci...

// 1 => Array.from (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from)
// array from fonctionne sur n'importe quel objet itérable (que l'on peut parcourir (soit à avec ces indices, soit avec ses clés))
Array.from(titles).forEach(t => console.log(t)); // hey JS stp : fabrique moi un tableau à partir de l'HTMLCollection et parcoure le avec forEach

// ci-dessous, la même chose sans la fat-arrow ;)

// Array.from(titles).forEach(function(title) {
//     console.log(title)
// });

console.log("----------------------------------");

// 2 => opérateur spread
// synonyme de la version codée plus haut avec Array.from()
[...parags].forEach(p => console.log(p)); // éclate le contenu de la HTMLCollection dans un array et parcoure le avec forEach

console.log("--------------- Sélection avec querySelector.querySelectorAll");
// la philosophie des ces fonctions est d'utiliser les sélecteurs CSS pour atteindre un ou plusieurs Elements dans le document
// Tous les sélecteurs CSS valides fonctionnent avec ces deux méthodes

const myParag2 = document.querySelector("#my-parag");
console.log("myParag2 >>>", myParag2);

const monPremierTitle = document.querySelector(".title");
console.log("monPremierTitle >>>", monPremierTitle);

const nonExistant = document.querySelector(".choubidou");
console.log("nonExistant >>>", nonExistant); // null pour le moment

// tout ceux ayant pour classe css title ET main
const allTitles = document.querySelectorAll(".title"); // une nodeList est retournée
console.log("allTitles >>>", allTitles);

const titlesMain = document.querySelectorAll(".title.main");
console.log("titlesMain >>>", titlesMain);
// sélecteur CSS pour obtenir les title qui sont aussi main ".title.main"

const titlesMainVides = document.querySelectorAll(".title.main.truc");
console.log("titlesMainVides >>>", titlesMainVides); // une nodeList vide

console.log("----- parcourir une nodeList avec forEach ------");

allTitles.forEach(function(title) {
  // callback : ici une fonction anonyme (non nommée)
  // modifier le titre pour le mettre en majuscule (uppercase...)
  // leur affecter une classe CSS
  console.log(title, typeof title);
  title.textContent = title.textContent.toUpperCase(); // on met chaque titre en majuscule
  title.className += " important-text"; // on applique la classe CSS important-text à chaque titre
});
