class Foo {
  constructor(dossard) {
    this.whatMyName = "foo";
    this.dossard = dossard;
  }

  bar() {
    console.log(this, typeof this);
  }

  baz() {
    console.log(this);
    (function imbriquee() {
      console.log(">>>>>>>>>", this); // undefined
    })();
  }

  naviguerDansLeTemps() {
    console.log("------ 1 --------", this);
    const that = this; // on pourrait capturer this au moment opportun...
    // déclenchons action asynchrone... plus tard dans le temps
    setTimeout(function() {
      // les fonctions déclarées avec le mot-clé function, redefinissent à chaque fois leur propre valeur de this
      console.log("------ 3 --------", this);
      console.log(that);
    }, 3000); // ... dans 3 secondes (3000ms)
  }

  naviguerDansLeTemps2() {
    console.log("------ 2 --------", this);
    setTimeout(() => {
      // les fat-arrow functions utilisent la valeur de this du scope parent
      console.log("------ 4 --------", this); // this est bind au this du scope lexical...
    }, 4000); // ... dans 4 secondes (4000ms)
  }
}

const f = new Foo(13); // créons deux instances de Foo ...
const ff = new Foo(23); // on récupère 2 objets différents créés (instanciés) avec Foo

// f.naviguerDansLeTemps();
// f.naviguerDansLeTemps2();

f.baz();
// ff.bar();

// console.log(typeof ff);
// console.log(typeof ff.bar);

// function foo() {

// }

// const fff = new Foo();

// const Bar = () => {}
// const b = new Bar();

// console.log(fff);

var cat = {
  name: "Kitty",
  talk: () => "mewooooww !"
};


console.log(cat.talk())
