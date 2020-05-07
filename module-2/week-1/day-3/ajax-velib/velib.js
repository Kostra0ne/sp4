const URL =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=4000&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes";

function getData() {
  axios // on utilise axios
    .get(URL) // pour récupérer (get) les données localisées à cette URL
    .then((res) => display(res.data.records)) // si succès requête : on affiche
    .catch((err) => console.error(err)); // sinon on log l'erreur dans la console
}

function display(stations) {
  // stations est un tableau d'objet...
  const list = document.getElementById("velibs"); // on récupère le ul dans lequel on veut réaliser l'affichage
  // utilisons document.createElement et element.appendChild pour modifier le HTML et afficher dans un li, pour chaque station :
  // - le nom, le nombre de vélos total et le pourcentage de vélos disponibles
  stations.forEach((station) => {
    // parcours de chaque station avec une boucle
    const li = document.createElement("li"); // creation d'une balise li
    const h2 = document.createElement("h2"); // ... d'un h2
    const p = document.createElement("p"); // ... d'un p
    const percentage = Math.round(
      (station.fields.numbikesavailable * 100) / station.fields.capacity
    ); // calcul du pourcentage de vélibs dispos avec un produit en croix

    li.className = "item"; // ajout d'une classe pour le style css
    h2.textContent = station.fields.name; // affichage du nom de la station
    li.appendChild(h2); // on insère le titre dans le li
    p.innerHTML = `
        <span>Nombre total vélo : ${station.fields.capacity} </span><br>
        <span>Disponibilité : ${percentage}%</span>
      `; // affichage des infos de disponibilité
    li.appendChild(p); // on insère le p dans le li
    li.onclick = handleClick; // avec createElement, on peut associer des listeners/handlers directement sur l'objet généré
    list.appendChild(li); // enfin, on insère le li constitué dans le ul
  });
}

function handleClick(evt) {
  // toggle une classe CSS is-active sur chaque li cliqué
  evt.target.classList.toggle("is-active");
}

getData(); // on lance le programme en allant chercher les données via l'API d'open-data paris
