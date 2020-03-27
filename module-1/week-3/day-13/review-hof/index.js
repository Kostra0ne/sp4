// Array.
// forEach || filter || reduce ||  sum, sort || map
// toutes ces fonction prennent un callback en argument

// forEach => parcourir chaque élément
// return : undefined (donc elle sert uniquement à lire les valeurs du tableau)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach

// filter => parcourir un tableau et créer un nouveau tableau contenant uniquement les valeurs souhaitées
// return : un nouveau tableau contenant les valeurs filtrées et retournées par le callback
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter

// map => appliquer une modification sur tout ou partie des éléments du tableau parcouru
// return : un nouveau tableau contenant les valeurs modifiées et retournée par le callback
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map

// reduce => permet de réduire le tableau parcouru à une valeur unique (de n'importe quel type)
// return: l'accumulateur, cad la valeur accumulée au fur et à mesure des itérations
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce

// sort => comparer les éléments pour les trier à l'intérieur du tableau
// return: le même tableau (celui parcouru) trié
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

const numbers = [123, 333, 44.4, 50, -12, 340, -10000];

const musicInstruments = [
  { name: "guitar", price: 1000, brand: "fender" },
  { name: "synthetiser", price: 800, brand: "roland" },
  { name: "drum machine", price: 499, brand: "electron" },
  { name: "saxophone", price: 900, brand: "foo" },
  { name: "violin", price: 2000, brand: "yamaha" }
];



// D.I.Y
// Prenons 30 minutes pour expérimenter ces différentes HOF avec les tableaux fournis

// parcourir les deux tableaux avec forEach

console.log("-------- Latifa : implementation forEach --------");

const afficherVals = (val) => console.log(val);

console.log("----------------------");
numbers.forEach(afficherVals);
console.log("----------------------");
musicInstruments.forEach(afficherVals);

console.log("-------- Karima : implementation filter --------");

// afficher les instruments avec des prix <= 1000

const filterMusic = musicInstruments.filter(mu =>  mu.price <= 1000);
console.log("----------------------");
console.log(filterMusic);

console.log("-------- Tessia : implementation filter --------");

// filtrer
function goldPrice(musicInstrument) {
  return musicInstrument.price >= 500;
}

const result = musicInstruments.filter(goldPrice);
console.log("----------------------");
console.log(result);


console.log("-------- Kenwele : implementation map --------");
// soustraire 10 à chaque nombre du tableau
const soustraire10 = v => v - 10;

const vModifiees = numbers.map(soustraire10);

console.log("----------------------");
console.log(vModifiees);


console.log("-------- Gui : combinaison filter et forEach --------");
// le filter return un tableau filtré et on peut afficher tous les instruments avec forEach
musicInstruments.filter(goldPrice).forEach(goldInstrument => console.log(goldInstrument));


console.log("-------- Maxime : implementation reduce --------");
// concaténer tous les noms d'instruments
const instrumentsNameConcat = musicInstruments.reduce((acc, instrument) => instrument.name + ' ' + acc, "");

const instrumentsNameConcat2 = musicInstruments.reduce(function(acc, instrument) {
  return instrument.name + ' ' + acc
}, "");

console.log("----------------------");
console.log(instrumentsNameConcat);


console.log("-------- Vincent : implementation sort --------");
// classer les nombres du plus petit au plus grand
const sortedNumbersASC = numbers.sort((a, b) => a - b);


console.log("----------------------");
console.log(sortedNumbersASC);