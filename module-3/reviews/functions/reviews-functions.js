function a(x) {
  return "je suis a " + x;
}

function tellMeWhat() {

}

const x = function (c) {
  return c(); // c est un callback, une function qui est passée en paramètre, vue d'une utilisation future
};

var z = x(function () {
  return 42;
});

console.log(z);

function hello() {
  return "hello, world";
}

console.log(x(hello));

setInterval(() => {
  console.log("hey");
}, 1000);

console.log("finito...");

const oussama = tellMeWhat();
console.log(oussama);