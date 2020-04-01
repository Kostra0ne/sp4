// DECLARATION DES FONCTIONS DES ITERATIONS

function displayText(msg) {
  alert(msg);
}

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

// APPEL DES FONCTIONS DES ITERATIONS

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
