const btn = document.getElementById("my-button");

function action(evt) {
  console.log(evt);
  //   alert("hello world of DOM !!!");
  const username = window.prompt("saisir votre nom !!!");
  console.log(username);
}

btn.onclick = action;
