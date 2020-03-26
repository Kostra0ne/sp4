function test1() {}

function test2() {
  return;
}

function test3() {
  return undefined;
}

function test4() {
  return "bar";
}

console.log("------- COMPRENDRE RETURN ------");

var a = test1(); // undefined
var b = test2(); // undefined
var c = test3(); // undefined
var d = test4(); // "bar"

var x = "Anne";
var users = ["Hakim", "Joe"];

function test5(a) {
  return typeof a;
}

var e = test5(); // undefined
var f = test5("null"); // string
var g = test5(23); // number
var h = test5(undefined); // undefined
var i = test5([]); // object
var i = test5(function() {}); // function

console.log(e, f, g, h, i);

console.log("------- COMPRENDRE PARAM DEFAULT ------");

function test6(a = "truc", b) {
  // les fonctions peuvent prendre des params par défaut
  return typeof a;
}

var j = test6(); // string
console.log(j);
var k = test6({}); // object
console.log(k);
var l = test6(undefined, "foo"); // string
console.log(l);

function inverserString(str) {
  // utiliser une boucle for pour retourner la chaîne inversée !
  // une string a toujours une longueur (length)
  var inverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverse += str[i];
  }

  return inverse;
}

function inverserStringShorter(str) {
  // prendre la string, l'éclater en tableau de lettres
  // inverser l'ordre du tableau
  // joindre chaque valeur du tableau en 1 string
  return str
    .split("")
    .reverse()
    .join("");
}

// KEEP IT DRY (don't repeat yourself)
// return true si str est un palindrome, sinon false
function estPalindrome(str) {
  // palindrome : une string qui se lit dans les deux sens
  if (inverserString(str) === str) return true;
  else return false;
}

function estPalindromeShort(str) {
  return inverserString(str) === str;
}

const estPalindromeSuperShort = str => inverserString(str) === str;

console.log("------- INVERSER STRING ------");

var m = inverserString("abcde"); // should return "edcba";
console.log(m);
var mm = inverserStringShorter("abcde"); // should return "edcba";
console.log(">>>", mm);
var n = inverserString("chose");
console.log(n);

console.log("------- EST PALINDROME ------");
var o = estPalindrome("bob");
console.log(o);
var p = estPalindrome("truc");
console.log(p);
var q = estPalindrome("truc");
console.log(q);

console.log("------- EST PALINDROME SHORT ------");
var r = estPalindromeShort("kayak");
console.log(r);

console.log("------- EST PALINDROME SHORTER ------");
var s = estPalindromeSuperShort("kayak");
console.log(s);
