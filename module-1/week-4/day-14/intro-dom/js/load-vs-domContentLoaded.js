console.log("hello world");

// la ligne ci-dessous, sans la configuration adéquate retournera toujours null...
const myFirstDOMElement = document.getElementById("dom-intro");
console.log("---- myFirstDOMElement ----");
console.log(myFirstDOMElement);

// pour contourner ce soucis, plusieurs options

/*
// pour contourner ce soucis, plusieurs options
window.addEventListener("load", function() {
  // 1 - l'event load : est unique à toute ton application
  // cad qu'il n'y a qu'un seule évènement load, même pour différents fichiers...
  const myFirstDOMElement = document.getElementById("dom-intro");
  console.log("---- Document is Loaded ----");
  console.log(myFirstDOMElement);
});
*/

function start() {
  // 1 - l'event load : est unique à toute ton application
  // cad qu'il n'y a qu'un seule évènement load, même pour différents fichiers...
  const myFirstDOMElement = document.getElementById("dom-intro");
  console.log("---- Document is Loaded ----");
  console.log(myFirstDOMElement);
}

function startDOMContentLoaded() {
  // 1 - l'event DOMContentLoaded : on peut l'utilisr autant de fois que nécessaires, dans plusieurs scripts en même temps.
  const myFirstDOMElement = document.getElementById("dom-intro");
  console.log("---- DOM Content is Loaded ----");
  console.log(myFirstDOMElement);
}


window.onload = start;
// window.addEventListener("load", start); // la même chose mais plus long...

window.addEventListener("DOMContentLoaded", startDOMContentLoaded);
