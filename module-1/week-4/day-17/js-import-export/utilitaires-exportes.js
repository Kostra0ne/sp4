export function genererNombreAleatoireEntreDeuxEntiers(min, max) {
  // retourne un nombre compris dans l'interval min et max
  return Math.floor(Math.random() * (max - min) + min);
}

export function log(val) {
  console.log(val);
}

export const monnaieDuShop = "euros";

export const PI = Math.PI;

export class Toto {

}

// dans un fichier, on peut avoir un SEUL export par defaut

// export default [
//   "riri",
//   "fifi",
//   "loulou"
// ];

// export default 42;


export default () => "hello world";