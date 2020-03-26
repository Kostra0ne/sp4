console.log("-------- D.I.Y !!! ---------");

const simploniens = [
  { name: "Gaelle", favColor: "blue" },
  { name: "Kenwele", favColor: "green" },
  { name: "Adlane", favColor: "blue" },
  { name: "Hamidou", favColor: "purple" }
];

// 1 - utiliser forEach pour parcourir tous les simploniens
// 2 - utiliser filter pour ne garder que les simploniens préférant le bleu
// 3 - utiliser map pour passer les noms de simploniens en MAJUSCULES
// 4 - Utiliser sort pour trier les simploniens par nom ASC
// 5 - utiliser reduce pour connaitre la comme les lettres contenues dans chaque nom

// 1
const parcourirValeur = (val, i) => {
  console.log(i, val);
};

const resultForEach = simploniens.forEach(parcourirValeur);

console.log("------------------------");
console.log("1 - result >>>", resultForEach);
// forEach retourne tjs undefined, donc pas besoin de l'affecter à une constante ...

const simploniensPreferantLeBleu = simploniens.filter(function(val) {
  return val.favColor === "blue";
});

console.log("------------------------");
console.log("2 - préfèrent le bleu >>>", simploniensPreferantLeBleu);

function capitalize(simplonien) {
  return simplonien.name.toUpperCase();
}

const nomEnMaj = simploniens.map(capitalize);

console.log("------------------------");
console.log("3 - resultat capitalize name >>>", nomEnMaj);

function sortNameAsc(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

simploniens.sort(sortNameAsc);

console.log("------------------------");
console.log("4 - prénoms simploniens triés en ordre Asc >>>", simploniens);

// 5 - utiliser reduce pour connaitre la somme les lettres contenues dans chaque nom

const sumLettres = simploniens.reduce(
  (acc, simplonien) => (acc += simplonien.name.length),
  0
);

console.log("------------------------");
console.log("5 - somme lettres prénoms simploniens", sumLettres);
