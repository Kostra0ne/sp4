
// IIFE : Immediatly Invoked Function Expression
// Un mot compliqué pour dire : fonction autoexécutée
// d'habitude il y'a deux temps dans la creation/execution d'une fonction

// temps 1 : déclaration
function chose() {

}

// temps 2 : exécution
chose();

// il y'a des cas dans lesquels on veut exécuter la fonction tout de suite...
// c'est le cas pratique des IIFE
// c'est vraiment uniquement dans le cas où cette fonction DOIT impérativement tourner !!!!
// (en terme de design pattern: on appelle un singleton : une fonction executable une seule et unique fois (à chaque fois que le fichier est lu)
// pour simplifier : ce genre de function est définie + exécutée au même endrooit (ligne) d'un programme
(function() {
    var a, c, d;
    a = "salut le scope de la IIFE";
    // tous le contenu de cette IIFE/function est privé : cad non accessible depuis l'extérieur.
    // pas besoin de l'appeler/exécuter => elle sera automatiquement lue
    console.log(a);
}()); // elle est exec ici ... 

