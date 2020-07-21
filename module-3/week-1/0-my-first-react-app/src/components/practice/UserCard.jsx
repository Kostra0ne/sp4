import React from "react";
import "./../../styles/UserCard.css";

export const UserCard = (props) => {
  return (
    <div className="user-card">
      <img
        className="img"
        src={props.user.picture}
        alt={`${props.firstName + " " + props.user.lastName}'s avatar`}
      />
      <div className="infos">
        <h2 className="title name">
          {props.user.gender === "f" ? "Mrs " : "Mr "}
          {props.user.firstName} - {props.user.lastName}
        </h2>
        <p className="email">{props.user.email}</p>
        <p className="gender"></p>
      </div>
    </div>
  );
};
