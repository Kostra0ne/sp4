function createDomNode() { // cette fonction, vous pouvez en inspirez plus tard ...
  // elle mélange les deux approches pour obtenir le meilleur des deux mondes
  const markup = `<div class="block">
        <input type="text" class="input">
    </div>`; // d'un côté je rédige le HTML comme une string ... c'est plus facile que dec ombiner plusieur createElement+appendChild
  // c'est surtout quand le markup devient complexe ... genre dans un panier ...
  const template = document.createElement("template"); // la magie c'est par ici : on utilse un template
  // c'est une balise html 5 qui sert de contenant inerte... cad jamais visible dans le document ....
  template.innerHTML = markup; // je lui ajoute le HTML avec innerHTML

  const node = template.content.firstChild; // et j'extrait son premier enfat (ici c'est la div.block)

  const input = node.querySelector("input"); // du coup j'ai récupéré un node, un element ===> un objet ! de type HMTL
  input.oninput = evt => console.log(evt); // du coup je peux écouter les input ou tout event dessus !

  return node; // et je retourne ce node, cet Object.length.toString. ce bloc
}

const body = document.querySelector("body");
const DOMNodes = []; // j'ai une liste vide (array)

while (DOMNodes.length !== 5) { // je boucle
  DOMNodes.push(createDomNode()); // et je pousse les objets qui représentent les blocs dans cet array
}

DOMNodes.forEach(element => { //je parcours tous les blocs
  body.appendChild(element); // et je les insère comme enfants de body avec appendChild
});

console.log("1", DOMNodes); // je fais un log


// et je refais exactement la même opération
// j'en recréé 5...
while (DOMNodes.length !== 10) {
  DOMNodes.push(createDomNode());
}
//... et je les ajoute à body
DOMNodes.forEach(element => {
  body.appendChild(element);
});

// et j'affiche la liste de blocs

console.log("2", DOMNodes);
