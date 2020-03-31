const btn = document.getElementById("my-button");


function toggleBtnActive() {
  btn.classList.toggle("is-active");
}

function getUsername() {
  toggleBtnActive(); // j'active la class CSS is-active

  setTimeout(() => { // j'attends 10ms pour que JS ait le temps d'appliquer la classe CSS
    var username = ""; // initialisation d'username à chaine vide
    do { // do sera exécuté ...
      username = window.prompt("saisir votre nom !!!"); 
      // prompt retourne la string saisie par l'user
    } while (!isNaN(username) || username.length < 2);
    // ... tant que l'user n'a pas saisi un nom valide (non Nombre)

    toggleBtnActive();  // je désactive la class CSS is-active
    continueRegistration(username);
  }, 10);
}

function continueRegistration(username) {
  const res = document.getElementById("result"); // j'accède à la div#result
  res.textContent = `Vous avez choisi ${username} comme nom d'user !`;
  // et j'en modifie le contenu
}

// on écoute les event clicks sur ce boutton
btn.onclick = getUsername;
