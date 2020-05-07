const URLAll = "https://pokeapi.co/api/v2/pokemon?limit=109";
// limit est ce qu'on nomme un paramètre get
// aussi appelé query string ...
// comme souvent c'est un système de clé valeur
// ici, la clé limit est associée à la valeur 1000

const list = document.getElementById("pokemons");

function start() {
  axios
    .get(URLAll)
    .then((res) => {
      // tricks important : @navigateur devtool > onglet network > xhr
      console.log(res.data);
      display(res.data.results);
    })
    .catch((err) => console.error(err));
}

function display(pokemons) {
  list.innerHTML = "";

  pokemons.forEach((pokemon) => {
    console.log(pokemon);
    list.innerHTML += `<li class="item">
        <span>${pokemon.name}</span><br>
        <button class="btn" data-url="${pokemon.url}">more</button>
    </li>`;
  });

  const btns = list.querySelectorAll(".btn");
  btns.forEach((btn) => (btn.onclick = displayMore));
}

function displayMore(evt) {
  const details = document.getElementById("details");
  const URLOne = evt.target.getAttribute("data-url");
  details.classList.remove("is-hidden");
  // Appel AJAX pour récupérer les détails du pokemon clické
  axios
    .get(URLOne)
    .then((res) => {
      const pokemon = res.data; // les infos du pokemon
      console.log(pokemon);
      details.innerHTML = `
        <h2 class="title">${pokemon.species.name}</h2>
        <p>
            Weight: ${pokemon.weight}
            Height: ${pokemon.height}
        </p>
        <img src="${pokemon.sprites.front_default}">
        `;
    })
    .catch((err) => console.error(err));
}

document.getElementById("start").onclick = start;
