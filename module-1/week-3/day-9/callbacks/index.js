// callbacks : un concept superrrr important en JS
// les callbacks sont des fonctions passée en paramètre d'une autre fonction
// aïe ...
// d'ailleurs php / java implémentent les callbacks das leur dernières versions...
// JS possèdent les fonction de premier ordre (higher order functions)
// d'autres langage utilisent les callbacks (HOF) : lisp, scheme, haskel, oCamel, camel ...
// en majorioté des langages orientés progeammtion fonctionnelle
// https://www.youtube.com/watch?v=RqvCNb7fKsg

console.log("----------1------------");

function foo() {
  return "je suis foo";
}

function bar() {
  return "je suis bar";
}

const funcs = [foo, bar];

console.log(funcs[0]());
console.log(funcs[1]());


console.log("----------2------------");

function a(callback) {
  return "je suis a " + callback();
}

function b() {
  return "je suis b";
}

var res = a(b);

console.log(res);



/*

const users = ["a", "b", "c"];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

users.forEach(function(user) {
 console.log(user);
})

users.forEach(user => console.log(user))

const btn = document.getElementById("my_button")

btn.onclick = function() {
   alert("woaaaaouh !!");
}
*/



// pour te triturer le cerveau :D

/*

console.log("----------3------------");

function a(callback) {
    return "je suis a " +  callback();
  }
  
  function b(clbk) {
    return clbk("je suis b");
  }
  
  function c(p) {
    return function() {
        return p + " je suis c"
    }
  }
  
  console.log(a(b(c)));

*/
