const blocks = document.querySelectorAll(".block");
const products = document.querySelectorAll(".product");

// element.getAttribute(nomAttribut:string)
// ==> te permet d'accéder à la valeur de l'attribut passé en paramètre
// https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute

blocks.forEach(function(chaqueBloc, index) {
  console.log(`--------- tour n° ${index + 1} --------- `);
  console.log(chaqueBloc.getAttribute("class"));
  console.log(chaqueBloc.getAttribute("id"));
  console.log(chaqueBloc.getAttribute("lang"));
});

// element.setAttribute(nomAttribut:string, valeur:string)
//  ==> configure l'attribut passé en paramètre 1 avec la valeur passée en paramètre 2
// https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute

blocks.forEach(function(chaqueBloc, i) {
  chaqueBloc.setAttribute("class", "toto");
  chaqueBloc.setAttribute("id", `toto-${i + 1}`);
  chaqueBloc.setAttribute(
    "lang",
    chaqueBloc.getAttribute("lang").toUpperCase()
  );
});

// on peut définir des attribut personnalisés
// https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Utiliser_attributs_donnes

// ici les attributs ciblés ont bien été mis à jour
blocks.forEach(function(chaqueBloc, index) {
  console.log(`--------- tour n° ${index + 1} --------- `);
  console.log(chaqueBloc.getAttribute("class"));
  console.log(chaqueBloc.getAttribute("id"));
  console.log(chaqueBloc.getAttribute("lang"));
});

// comment accéder à la valeur de data-price ????
console.log(
  "valeur du prix de la div 1 >>>>",
  products[0].getAttribute("data-price")
);
console.log(
  "valeur de la marque de la div 2 >>>>",
  products[1].getAttribute("data-product-brand")
);
console.log(
  "valeur de l'id de la div 3 >>>>",
  products[2].getAttribute("data-product-id")
);

// il est possible d'utiliser setAttribute pour mettre à jour la valeur d'attributs personnalisés...
products[0].setAttribute("data-stock", 10);
console.log(
  "on peut accéder sous forme d'objet à toutes les clés/valeurs custom (définies sur la balise avec data-* ----->"
);
console.log(products[0].dataset); // dataset => en français => ensemble (set) de données
//  dataset, pour une balise HTML : correspond à l'ensemble des attribut (et leurs valeur) préfixés avec data-
// attention, tout ce que vous allez extraire d'un document HTML est de type String !!!!
console.log(products[0].dataset.price + 10);
console.log(Number(products[0].dataset.price) + 10); // donc si besoin, appliquez les conversions que l'on a vu durant le module 1
products[0].setAttribute("data-stock", Number(products[0].dataset.price) + 10);
