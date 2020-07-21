import React from "react";
import movies from "./movies";
import DisplayMovies from "./DisplayMovies";
import LoopIt from "./LoopIt";
import MapIt from "./MapIt";

export default function App() {
  function displayName(name) {
    console.log(name);
  }

  return (
    <div>
      {/* <LoopIt limit={10} /> */}
      <hr />
      <MapIt callback={displayName} users={["Emma", "Maria", "Gaëlle"]} />
      <hr />
      {/* <DisplayMovies movies={movies} /> */}

      <h2 className="title">D.I.Y : Carte blanche liste + callbacks</h2>
      <p>
        1 - coder un component <b style={{color: "red"}}>A</b> qui prend en props un array d'objects
        <br />
        <br />
        2 - <b style={{color: "red"}}>A</b> importe un component <b style={{color: "forestgreen"}}>B</b><br />
        <b style={{color: "forestgreen"}}>B</b> affiche les détails de chaque objets,
        prop de <b style={{color: "red"}}>A</b> avec array.map
        <br />
        <br />
        3 - <b style={{color: "forestgreen"}}>B</b>  écoute les clicks sur tout ou partie du <b style={{color: "forestgreen"}}>component</b><br></br> onClick : <b style={{color: "forestgreen"}}>B</b> remonte les infos sur <b style={{color: "red"}}>A</b> , via un callback reçu en props
        <br />
        <br />4 - Depuis <b style={{color: "red"}}>A</b>  afficher la valeur provenant de <b style={{color: "forestgreen"}}>B</b>  dans la console !
      </p>
      <hr/>
      <p>
          <i><b>conseil: remplacer A et B par de vrai exemples (Users, Products, Articles, etc)</b></i>
      </p>
    </div>
  );
}
