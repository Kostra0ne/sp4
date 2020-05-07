/** version courte */

const display = (states) => {
    const list = document.getElementById("list");
    list.innerHTML = ""; // reset le ul
    states.forEach(state => list.innerHTML += `<li>${state}</li>`); // ajoute un li par état
};

const filter = (states, search) => states.filter(state => state.toLowerCase().match(search.toLowerCase())); // trouve les états correspondant

const start = (res) => { // res est la réponse de l'appel AJAX
    const all = Object.values(res.data); // crée un array avec les valeurs de l'objet reçu
    display(all); // affiche liste complète
    document.getElementById("input").oninput = evt => display(filter(all, evt.target.value)); // affiche liste filtrée
};

axios // chaque les méthode d'axios retourne une promesse
    .get("https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json") // récupére data
    .then(start) // démarre si la promesse est tenue
    .catch(err => console.error(err)); // sinon affiche erreur dans la console


/** version (plus) longue */

/*
function display2(states) {
  const list = document.getElementById("list");
  list.innerHTML = ""; // reset le ul
  states.forEach((state) => (list.innerHTML += `<li>${state}</li>`)); // ajoute un li par état
}

function filter2(states, search) {
  return states.filter(function (state) {
    return state.toLowerCase().match(search.toLowerCase());
  });
}

function start2(res) {
  // res est la réponse de l'appel AJAX
  const all = Object.values(res.data); // crée un array avec les valeurs de l'objet reçu
  display2(all); // affiche liste complète
  document.getElementById("input").oninput = function (evt) {
    const filteredStates = filter2(all, evt.target.value);
    display2(filteredStates); // affiche liste filtrée
  };
}

axios // chaque les méthode d'axios retourne une promesse
  .get(
    "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
  ) // récupére data
  .then(res => start2(res)) // démarre si la promesse est tenue
  .catch((err) => console.error(err)); // sinon affiche erreur dans la console
*/