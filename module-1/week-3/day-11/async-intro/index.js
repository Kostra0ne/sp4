console.log("coucou !");

// asynchronicité => JS => plus tard dans le temps....

// setTimeout => déclencher une action plus tard dans le temps

// 2 arguments
// 1 => le callback
// 2 => le délai (timeout) exprimé en millisecondes

const timeOut1 = setTimeout(function() {
  console.log("Yahooo: action 1 finished !!!");
  clearTimeout(timeOut1); // clearTimeout permet de supprimer le timeOut de la mémoire...
}, 3000); // le callback sera exécuté dans 1 seconde

const callback = () => {
  console.log("Yata: action 2 finished !!!");
  clearTimeout(timeOut2); // clearTimeout permet de supprimer le timeOut de la mémoire...
};

const timeOut2 = setTimeout(callback, 1000);

// ATTENTION : donc aux actions acynchrones car elle ne sont pas forcément exécutée dans l'ordre d'éxecution

// console.log(timeOut1, timeOut2);

// setInterval => répéter une action à un interval regulier

var count = 0;

const intervalID = setInterval(() => {
  count++;
  console.log("hey JS c'est fun (même si un peu dur)", count);

  if (count === 10) clearInterval(intervalID);
}, 1000); // le callback fournit en argument d'un setInterval sera exécuté à interval régulier
