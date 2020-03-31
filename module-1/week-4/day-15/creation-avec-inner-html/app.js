// un petit programme DOM pour modifier le contenu d'un élément sen fonction de l'action de l'user de l'application
const content = document.getElementById("content-main");
const btnAdd = document.getElementById("btn-add");
const btnReset = document.getElementById("btn-reset");
const input = document.getElementById("user-input");
const inputNbr = document.getElementById("user-number-input");

function ajouterContenuInputDansContent() {
  // toute fonction(callback) associée à un event-listener est nommée event-handler (gestionnaire d'évènement)
  // console.log(input);
  // on accède à l'objet input par son nom (de constante ou var ou let...)
  content.innerHTML += `<p>${input.value} : ${inputNbr.value}</p>`;
  // chaque objet de type est équipé d'une propriété <<value>>
}

function resetContenuDeContent() {
  content.innerHTML = "";
}

btnAdd.onclick = ajouterContenuInputDansContent;
btnReset.onclick = resetContenuDeContent;
// event-listener : à chaque click, le callback est exécuté
