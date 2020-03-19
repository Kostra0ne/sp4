const monTableauDeStrings = [
  "hello",
  "ça va toujours ?",
  "gardez la motive",
  "bientôt on liera HTML/CSS/JS",
  "pour du coding fun"
]; // l(5)
//                  0           1                       2                         3                            4

console.log(monTableauDeStrings.length);

console.log(monTableauDeStrings[0]);
console.log(monTableauDeStrings[2]);
console.log(monTableauDeStrings[3]);

var questionA10Balles = monTableauDeStrings.length - 1;

console.log(questionA10Balles);

console.log(monTableauDeStrings[monTableauDeStrings.length - 1]);

console.log(monTableauDeStrings[4]);

console.log("----parcouri mon tableau de strings------");

for (let i = 0; i < monTableauDeStrings.length; i += 1) {
  console.log(i, monTableauDeStrings[i]);
}

console.log("----------");

const artistes = [
  "prince", // 0
  "rolling stones", // 1
  "queen", // 2
  "booba", // 3
  "rohff", // 4
  "barry white", // 5,
  "young fathers", // 6
  "U2" // 7
]; // l(8)

console.log("-----parcourir artistes-----");

for (let i = 0; i < artistes.length; i++) {
  console.log(i, artistes[i]);
}

console.log("-----parcourir  artistes du dernier au premier-----");

for (let i = artistes.length - 1; i >= 0; i--) {
  console.log(i, artistes[i]);
}

console.log("---- remplacer un artiste------");
// artistes.splice(2, 1, "Toto");
// console.log(artistes);

console.log("---- supprimer un artiste------");
// artistes.splice(7, 1);
// console.log(artistes);

console.log("----------");

console.log(
  "---- avec for..loop conserver uniquement les artistes dont la longueur est supérieure à 5 ------"
);
// gardons les résultats corrects dans un nouveau tableau ...

const artistesRetenus = [];

for (let i = 0; i < artistes.length; i++) {
  if (artistes[i].length > 5) {
    artistesRetenus.push(artistes[i]);
  }
}

console.log(artistes);
console.log("artistesRetenus >>> ");
console.log(artistesRetenus);

console.log("fin de boucle !");
