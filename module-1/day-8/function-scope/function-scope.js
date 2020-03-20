// en JS, la portée des var est fonctionelle : cad accessible dans tout le corps de la fonction
// dans laquelle la var a été déclarée !

var x = 100;

function foo() {
  var count = 0;
  console.log("-----1------");
  console.log("count dans foo", count);
  console.log("x dans foo", x);
}

function bar() {
  var count = 10; // ce count n'est pas le même que celui déclaré dans la function foo
  console.log("------2-----");
  console.log("count dans bar", count);
  console.log("x dans bar", x);
}


function baz() {
  var count = 1000; // ce count n'est pas le même que celui déclaré dans la function foo

  console.log("------3-----");
  console.log("count dans baz", count);
  console.log("x dans baz", x);

  function nil() {
    console.log("------4-----");
    console.log("count dans nil", count);
    console.log("x dans nil", x);

    function embrouille(params) {
      var count = -1000; // déclaration d'une nouvelle variable
      count = -10000; // déclaration d'une nouvelle variable
      // ligne ci-dessus on appelle ce procédé : shadowing !
      console.log("------5-----");
      console.log("juste pour vous embrouiller :D", count);
    }
    embrouille();
  }
  
  nil();
}

foo();
bar();
baz();

console.log("------6-----");
console.log("*** x en dehors de toute fonction : ", x);
// console.log("*** count en dehors de toute fonction : ", count);

