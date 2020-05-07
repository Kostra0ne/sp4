const input = document.getElementById("input");
const list = document.getElementById("list");
const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

  function foo(res) {} 
  
axios
  .get(URL)
  .then((res) => display(res.data))
  .then(function(res) {})
  .then(foo)
  .catch((error) => {
    console.log(error);
  });

function display(statesObject) {
  // convertir les valeurs de l'objet en tableau
  const statesArray = Object.values(statesObject);
  console.log("1/");
  console.log(statesObject);
  console.log("2/");
  console.log(statesArray);

  // utiliser une méthode de manipulation du document pour créer les li et y afficher les états
  statesArray.forEach((state) => {
    list.innerHTML += `<li>${state}</li>`;
  });

  // on peu utiliser filter pour créer un nouvel array comprenant tout ou partie d'un array
  const stateStartingWithA = statesArray.filter((state) => {
    return state.startsWith("a");
  });

  console.log("3/");
  console.log(stateStartingWithA);

  // l'event-listener input.oninput executera le callback (event-handler) à chaqque saisie de l'utilisateur
  input.oninput = (evt) => {
    console.log(evt.target); // ????
    console.log(evt.target === input);
    console.log(evt.target.value);
    console.log(input.value === evt.target.value);
  };

  // il ne reste plus qu'à combiner tout ça !
}
