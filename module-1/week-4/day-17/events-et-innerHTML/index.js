const body = document.querySelector("body");

const markup = `<div class="block">
    <input type="text" class="input">
</div>`;

console.log(body.children);

while (body.children.length !== 5) {
  body.innerHTML += markup;
}

const block1 = body.children[3]; // le premier block
const block2 = body.children[4]; // le second block

const input1 = block1.querySelector("input");
const input2 = block2.querySelector("input");

input1.oninput = evt => console.log(evt);
input2.oninput = evt => console.log(evt);

// ATTENTION
// la modification du contenu avec innerHTML supprime les event-listeners qui ont déjà été accrochés aux enfant précédents
while (body.children.length !== 10) {
  body.innerHTML += markup;
}

//  moralité : si on doit écouter des évènement sur un contenu HTML dynamique, avec ajout/suppression d'éléments dans un parent
// - soit on pense à éattacher les écouteurs d'évèement
// - soit on perd les listeners et du coup on risque d'obtenir des comportements incohérents

