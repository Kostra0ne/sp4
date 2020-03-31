const inputRange = document.getElementById("input-range");
const inputNbr = document.getElementById("input-number");
const btnRemove = document.getElementById("btn-remove-block");
const content = document.getElementById("content-main");
const body = document.querySelector("body");

// ajouter dans content autant de block que spécifié par la valeur de l'input
function ajouterBlocksDansContent(evt) {
  // # 0 - on vide le content précédent
  content.innerHTML = "";

  // evt est un param implicite (objet)
  // evt est fourni par défaut en premier argument du tout event-handler
  // evt représente l'évènement qui vient de survenir
  // la target d'un event est l'élément qui a déclenché l'évènement
  // console.log(evt.target); // on y accède par event.target
  // console.log(this === evt.target);
  // dans ces cas, cad une fonction répondant à un event, this représente la source de l'évènement (l'élément HTML qui a déclenché l'action)
  // console.log(evt.target.value);

  // # 1 - boucler autant de fois que nécessaire...
  for (let i = 0; i < evt.target.value; i += 1) {
    // # 2 -  à chaque tour de boucle : créer un block (une div)
    const block = document.createElement("div");
    // création d'un objet de type div

    // # 3 on configure le block selon nos besoins
    block.className = "block";
    block.textContent = i + 1;

    // # 4 - on attache le block courant au parent désiré
    content.appendChild(block); // c'est la phase d'insertion
  }
}

function removeBlock(index) {
  const allBlocks = document.querySelectorAll(".block");
  const target = allBlocks[index];
  if (target) target.remove();
  // tous les objets HTML connaissent cette fonction
  // elle supprime l'élément ciblé du document ...
}

btnRemove.onclick = function() {
  // si on doit fournir des paramètre à l'event-handler, alors il faut l'encapsuler dans une fonction d'enrobage, pour éviter son exécution immédiate ...
  removeBlock(Number(inputNbr.value) - 1);
};

inputRange.addEventListener("input", ajouterBlocksDansContent);
// synonyme de ===>
// event-listener         event-handler
// inputNbr.oninput = ajouterBlockDansContent;
