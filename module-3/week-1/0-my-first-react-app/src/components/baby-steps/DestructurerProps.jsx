import React from "react";

// ci-dessous, on "destructure" l'objet props
// ainsi on accède directement à ses clés/valeurs (ici, loveJS ET user)
export default function DestructurerProps({ loveJS, user, bg }) {
  return (
    <div
      style={{
        backgroundColor: bg || "purple",
        color: "whitesmoke",
        padding: "20px",
        marginBottom: "10px"
      }}
    >
      <p>{loveJS}</p>
      <p>
        {user.name} - {user.age}
      </p>
    </div>
  );
}

// DIY : rendre backgroundColor variable (avec une prop)
// BONUS : on veut fournir une valeur par défaut pour backgroundColor