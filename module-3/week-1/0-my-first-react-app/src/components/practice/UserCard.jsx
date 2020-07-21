import React from "react";
import "./../../styles/UserCard.css";

export const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        className="img"
        src={user.picture}
        alt={user.firstName + " " + user.lastName + "'s avatar"}
      />
      <div className="infos">
        <h2 className="title name">
          {user.gender === "f" ? "Mrs " : "Mr "}
          {user.firstName} - {user.lastName}
        </h2>
        <p className={`email ` + (!user.email && "error") }>
          {user.email || "missing email"}
        </p>
      </div>
    </div>
  );
};
