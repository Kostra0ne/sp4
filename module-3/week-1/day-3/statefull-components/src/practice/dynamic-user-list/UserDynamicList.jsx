import React, { Component } from "react";
import User from "./User";
import UserAddWidget from "./UserAddWidget";

// display a list of users
// provide an input:text + button to add new users
// provide a button per user to remove any user from the list

export default class DynamicUserList extends Component {
  state = {
    users: [
      {
        firstname: "Jenny",
        lastname: "Bar",
      },
      {
        firstname: "Jimmy",
        lastname: "Foo",
      },
      {
        firstname: "Sabrina",
        lastname: "Baz",
      },
    ], // un array de strings représentant le nom des users
  };

  handleAdd = (newUser) => {
    // ajouter state.newUser à state.users
    const clone = [...this.state.users];
    clone.push(newUser);
    this.setState({ users: clone });
  };

  handleDelete = (index) => {
    // supprimer  de state.users l'objet possèdant l'index fourni en argument
    console.log(index);
    this.setState({ users: this.state.users.filter((user, i) => i !== index) });
  };

  render() {
    return (
      <>
        <div style={{ background: "red" }}>
          <h1 className="title">Dynamic User List</h1>

          <UserAddWidget callback={this.handleAdd} />

          {this.state.users.length ? (
            <ul className="list user">
              {this.state.users.map((user, i) => (
                <User
                  key={i}
                  index={i}
                  infos={user}
                  callback={this.handleDelete}
                />
              ))}
            </ul>
          ) : (
            <p>No users yet !!!</p>
          )}
        </div>

        <p style={{ textAlign: "left" }}>
          Les 3 components à coder :<br /> <br />
          rouge: <b>UsersDynamicList</b>
          <br />
          vert: <b>User</b>
          <br />
          jaune: <b>UserAddWidget</b>
          <br /> <br />
          <b>Infos</b>: <br />
          <br />
          - le state @ component rouge contient la liste d'users
          <br />
          <br />
          - le component jaune remonte son state au rouge, avec un callback, (le
          callback modifie la liste d'users avec push)
          <br />
          <br />- le component vert remonte l'action de suppression au rouge,
          avec un callback, (le callback supprime le bon users avec filter ou
          splice)
        </p>
      </>
    );
  }
}
