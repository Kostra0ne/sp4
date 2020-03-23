console.log("welcome @ JavaScript :)");
// on peut déclarer simplement un object litéral avec {}
var cat = {
  name: "Fugee",
  age: 0.6,
  isCute: true,
  isAPain: true
};
// on aussi peut utiliser le constructeur new Object... mais c'est plus long :)
var catUgly = new Object({
  name: "MalAimé",
  age: 25,
  isCute: false,
  isAPain: true
});

console.log(cat, catUgly);

var simplonienSympa1 = {
  firstname: "Kader",
  lastname: "Amrichat",
  age: 40,
  frameWorkJS: "Angular"
};

// camelCase,
// PascalCase,
// kebab-case
var simplonienSympaFirstname = "Kader";
console.log(simplonienSympaFirstname);
simplonienSympaFirstname = "Kader A";
console.log(simplonienSympaFirstname);

const monMotDePasseQuiNeChangeJamais = "1234";
const myNumber = 10;
// myNumber = 20; impossible de réassigner une nouvelle valeur à constante

const musicInstrument = {
  type: "Synthétiseur"
};

console.log(musicInstrument);

musicInstrument.price = 20000; // la notation "." est appelée l'accesseur...
musicInstrument.currency = "euros";
console.log(musicInstrument);

if (musicInstrument.price < 200) {
  console.log("wooh pas le cher le synthé");
} else if (musicInstrument.price < 2000) {
  console.log("bon c'est cher mais j'suis dev donc ça va");
} else {
  console.log("oh noooo, je vais devoir casser ma tirelire");
}

// moins bien ...
// if (musicInstrument.price < 200) {
//   console.log("wooh pas le cher le synthé");
// }
// if (musicInstrument.price < 2000) {
//   console.log("bon c'est cher mais j'suis dev donc ça va");
// }
// if (musicInstrument.price > 2000) {
//   console.log("oh noooo, je vais devoir casser ma tirelire");
// }

// const musicInstrument = {
//     type: "Djembé"
// };
