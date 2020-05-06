const URL =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

// on va utiliser la librairie axios pour récupérer les données dispo à cette URL avec la méthode A.J.A.X

console.log(axios);

// axios contient 6 fonctions utiles !

// on en utilisera fréquement 5 :

// - get : récupérer des données hébergées sur un serveur
// - post : envoyer des données vers un serveur
// - patch : mettre à jour des données hébergées sur un serveur
// - put : remplacer totalement une ressource hébergée sur un serveur
// - delete : supprimer une donnée hébergée sur un serveur

// en fait on est reoute vers un chapitre important de la formation : le C.R.U.D
// CREATE READ UPDATE DELETE

axios // l'action est asynchrone
  .get(URL) // axios retourne une promesse
  .then((response) => {
    // une fois que le serveur répond (si tout s'est passé)
    // la promesse a été tenue ... j'ai donc mes données à disposition
    // par défaut, axios expose les données retournée par le serveur intérrogé
    // sous la clé "data", les données sont donc accessibles comme ceci
    console.log(response);
    afficherResultat(response.data.records);
  })
  .catch((error) => {
    // sinon, si une erreur survient, la promesse a été rejetée
    // ex d'erreur : le serveur requêté est down (ne fonctionne pas...)
    console.error(error); // donc j'attrappe (catch) cette erreur pour
    // empêcher le programme de planter
  });

function afficherResultat(arbres) {
  // console.log("arbres > ", arbres); // arbres est un tableau d'objets
  // chaque objet représente un arbre
  // il contient un ensemble d'information
  // TODO => Dans une liste HTML, on voudrait afficher dans le document :
  // le nom latin, le nom français, l'adresse complète de chaque arbres
  const ul = document.getElementById("arbres");

  arbres.forEach((arbre) => {
    const infos = arbre.fields;
    ul.innerHTML += `<li>
        <h2 class="title">${infos.libellefrancais}</h2>
        <p>
            Espèce : ${infos.espece} ${infos.genre} <br>
            ${infos.adresse} (${infos.arrondissement})<br>
        </p>
    </li>`;
  });
}
