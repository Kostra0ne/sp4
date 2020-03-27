// déclarer une classe pour générer (instancier) des carrés

class Square {
  constructor(h, w) {
    // le construct sert à initialiser les propriétés des instances de Square
    this.height = h; // chaque carré construit aura une propriété hauteur (height)
    this.width = w; // chaque carré généré aura également une propriété largeur (width)
  }

  getArea() { // retourne l'aire du carré courant...
    // comment accéder à l'objet (square) courant ... cad celui qui exécute cette fonction getArea ?
    console.log(">>>>>>>>", this); // this (dans ce cas précis) représente l'instance du carré qui appelle la fonction
    // this dans une classe, représente CETTE (THIS) valeur instanciée
    console.log(this.height, this.width); // on accède aux propriétés/méthodes de l'objet courant via this
    return this.height * this.width;
  }
}

const square0 = new Square(200, 200);

const squares = [new Square(10, 10), new Square(30, 30), new Square(100, 100)];

const afficherCarre = carre =>
console.log(`h: ${carre.height} l: ${carre.width}`);

// squares.forEach(afficherCarre);

// console.log(squares[0]);
// console.log(squares[1]);
// console.log(squares[2]);

console.log(square0.getArea());

// afficher l'aire du seconde carré du tableau de carrés....
console.log(squares[1].getArea());

// utiliser reduce obtenir la somme de toutes les aires des carrés contenus dans squares :D

const sumAreas = squares.reduce((acc, square) => acc += square.getArea(), 0);

console.log("sumAreas", sumAreas);
