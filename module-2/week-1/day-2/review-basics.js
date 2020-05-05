// Types de données en JS (et pas en JAVA :/)

/*
    Number
    String
    Boolean
    Object
    null
    undefined
    (Symbol : trop spécifique pour le moment)
*/

/*
OPERATEURS 

opérateurs de comparaison
--------------------------

== égalité souple (on compare les valeurs)
=== égalité stricte (on compare les valeurs ET le type)
!= non égalité souple (on compare la non égalité des valeurs)
!== non égalité des valeurs ET des types
< inférieur
> supérieur
<= inférieur ou égal
>= suérieur ou égal

opérateurs mathématiques
+
-
/
*
%

opérateur ternaire
-------------------
condition à tester ? val1 : val2

opérateur logique
-------------------
!  Not
&& AND
|| OR

*/

/*

Valeurs falsy

0
null
NaN
undefined
false
""

TOUTES les autres valeurs sont truthy (fiables)

en utilisant une instruction if (condition)
si condition est truthy, on passe dans le bloc if

*/

/*

TABLES DE VERITES

AND
true  && true   => true
true  && false  => false
false && true   => false
false && false  => false

OR
true  || true   => true
true  || false  => true
false || true   => true
false || false  => false

*/

/*

OBJECTS 
------------------

const slider = {
    images: ["yo.png", "foo.jpg", "bar.gif"],
    index: 0,
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
    hasIcon: false
};

slider.index  (indexation directe)
slider["index"] (indexation indirecte)
slider["images"] (indexation indirecte aussi...)

var key = "hasIcon"
slider[key]
key = "index"
slider[key] 


const virus = {
    nom: "COVID19",
    alias: "Coronavirus",
    deadly: true,
    contagious: true,
    relou: true
};

virus.deadly
virus["deadly"]


if (virus.deadly && !virus.contagious) {

} else {
    ... dans le else ici ...
}

*/

/*

ARRAYS (tableaux JS) 
------------------

const numbers = [1, 23, 44, 123.34];
const strings = ["bouh", "bal", "bim"];
                    0      1      2

accéder à la première case de numbers

numbers[0];
strings[1];

afficher la longueur de strings (le nbre de cases)

strings.length (tous les arrays ont une propriété length)

strings[strings.length - 1]
              3 - 1
                2

strings[2]

strings.push("chose"); // la length de strings est maintenant égale à 4

( strings vaut maintenant ["bouh", "bal", "bim", "chose"];
                              0      1      2      3

strings[strings.length - 1]
          4 - 1
            3
*/


/*

// les deux temps des fonctions 

// 1 déclaration

function test() {
    // fonction nommée
}

const x = function() {
    cette fonction ici est anonyme, et on l'assigne a x
}

// 2 Exécution

var mystere = test(); 

que vaut mystère ??? undefined !!!

// test ne retourne rien ... enfin si !!!! elle retourne undefined
// undefined c'est la valeur de retour par défaut de toutes les fonctions en JS
// si il n'y a pas de mot-clé return, ou si la fonction ne fait que return

ex 2: 

function foo() {
    return;
}

var mystere2 = foo(); // mystere2 vaut undefined


function bar() {
    return undefined;
}


var mystere3 = bar(); // mystere3 vaut également undefined


Donc il faut faire attention aux valeurs de retour de nos fonctions
car undefined fait partie des valeurs FALSY !


if (foo()) { // comme si tu disais if (undefined)

} else {

}


function compteNombreBalisesDansDocumentHTML() {
    const tags = document.querySelectorAll("*");
    // retourne une nodeList, une sorte de tableau
    // les nodeList ont une propriété length
    return tags.length;
}

const getNbrTags = () => document.querySelectorAll("*").length;


 
 */