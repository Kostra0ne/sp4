// DECLARATION DES FONCTIONS DES ITERATIONS

// itération 1

function displayText(msg) {
  alert(msg);
}

// itération 2

function multiplier(a, b) {
  let res = a * b;
  if (isNaN(res)) throw new TypeError("pas good");
  return res;
}

// il y'a plusieurs solution au problème donné, comme toujours
// function multiplier2(a, b) {
//   let res = a * b;
//   if (isNaN(res)) throw new TypeError("pas good");
//   const result = document.getElementById("res-iteration-2");
//   result.textContent = res;
// }

function afficherResultDansElement(idElement, res) {
  const target = document.getElementById(idElement);
  if (target) target.innerHTML = res;
}

// itération 3
const chanteurs = [
  {
    nom: "Beyoncé",
    email: "formation@diva.com",
    age: 40
  },
  {
    nom: "Booba",
    email: "easy@zer.com",
    age: 40
  },
  {
    nom: "Rohff",
    email: "shopping@zonz.fr",
    age: 40
  },
  {
    nom: "Kaaris",
    email: "loose@win.com",
    age: 40
  }
];

function parcourirChanteurs(list) {
  list.forEach(chanteur => {
    afficherChanteur(chanteur);
  });
}

function afficherChanteur(chanteur) {
  document.getElementById(
    "chanteurs"
  ).innerHTML += `<div class="chanteur">l'artiste ${chanteur.nom}, 
      âgé de ${chanteur.age} est joignable à l'adresse ${chanteur.email}
    </div>`;
}

function parcourirChanteurs2(list) {
  list.forEach(chanteur => {
    document.getElementById(
      "chanteurs"
    ).innerHTML += `<div class="chanteur">l'artiste ${chanteur.nom}, 
      âgé de ${chanteur.age} est joignable à l'adresse ${chanteur.email}
    </div>`;
  });
}

// itération 4/5

function parcourirBlock(blocks) {
  blocks.forEach(block => {
    // block.addEventListener("click", styliserBlock);
    // block.onclick = styliserBlock; // synonyme
    block.onclick = styliserBlockAvecCSS; // synonyme
    afficherIdBlock(block.id);
  });
}

function styliserBlockAvecCSS(evt) {
  evt.target.classList.toggle("is-active");
}

function styliserBlock(evt) {
  // console.log(evt.target); // correspond au block clické ...
  if (evt.target.style.background !== "dodgerblue") {
    evt.target.style.background = "dodgerblue";
    evt.target.style.color = "whitesmoke";
    evt.target.style.borderColor = "black";
  } else {
    evt.target.style.background = "none";
    evt.target.style.color = "black";
  }
}

function afficherIdBlock(id) {
  const resultat = document.getElementById("res-iteration-4");
  // resultat.textContent += `${id} \n` // @todo : trouver soluce
  resultat.innerHTML += `id du bock : ${id}<br />`;
}

// APPEL DES FONCTIONS DES ITERATIONS

const selectionBlocks = document.querySelectorAll("#iteration-4 .block");
parcourirBlock(selectionBlocks);

parcourirChanteurs2(chanteurs);

// displayText("hello, Acrrochez-vous !");

try {
  afficherResultDansElement(
    "res-iteration-2",
    "<p>le result est <b>" + multiplier(2, 3) + "</b></p>"
  );
  afficherResultDansElement(
    "res-iteration-2",
    "le result est " + multiplier(2, "foo")
  );
} catch (err) {
  console.error(err);
}

console.log("fin de programme");
