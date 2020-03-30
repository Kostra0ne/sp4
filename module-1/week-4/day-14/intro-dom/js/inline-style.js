const box = document.getElementById("move-on-up"); // récupère la div par son id

function moveTheBox(event) {
  // console.log(event);
  // il récupère le paramètre event : ce paramètre est implicite
  // cad que vous ne le fournissez pas à la fonction , JS le fait pour vous...
  // c'est le cas pour tous les events
  // https://developer.mozilla.org/fr/docs/Web/Events
  // c'est un objetqui contient des information utiles par rapport à l'évènement qui vient de survenir
  // ici c'est un mousemove et on accède notamment à la position x et y du curseur sur la page
  box.style.top = event.y + "px"; // box est en position absolute (géré depuis le css)
  box.style.left = event.x + "px"; // on règle donc so n top et son left avec les valeurs fournies par l'objet event !
} 

// pour une animation plus smooth = check requestAnimationFrame

// window.addEventListener("mousemove", moveTheBox);
window.onmousemove = moveTheBox; // même en plus court :D
// en français : hey window, à chaque fois que l'user bouge la souris, exécute le callback nommé moveTheBox ...
