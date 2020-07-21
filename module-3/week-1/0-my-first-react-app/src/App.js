import React from "react";

import { FirstOne } from "./components/baby-steps/FirstOne";
import { UserCard } from "./components/practice/UserCard";
import MyButton from "./components/baby-steps/MyButton";
import MyNumber from "./components/baby-steps/MyNumber";
import DestructurerProps from "./components/baby-steps/DestructurerProps";

function App() {
  const pageTitle = "Welcome @ React";
  const users = [
    {
      firstName: "Jean",
      lastName: "Sanchez",
      email: "foo@bar.baz",
      gender: "f",
      age: 63,
      picture: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      firstName: "David",
      lastName: "Banner",
      email: "foo@bar.baz",
      gender: "m",
      age: 43,
      picture: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      firstName: "Donna",
      lastName: "Summers",
      email: "foo@bar.baz",
      gender: "f",
      age: 33,
      picture: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      firstName: "Bill",
      lastName: "Baroudeur",
      email: "foo@bar.baz",
      gender: "m",
      age: 23,
      picture: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  ];

  /**
   * IMPORTANT : la function suivante ne se comporte pas comme on pourrait le croire
   * Pour modifier l'état (state) d'un component react, il faudra utiliser d'autres stratégies ;)
   */
  const pushUser = () => {
    console.log("action 1 : push user");
    users.push({
      firstName: "Kim",
      lastName: "NewChallenger",
      email: "kim@playa.baz",
      gender: "?",
      age: 42,
    });
    console.log(">> updated users ??? ", users);
  };

  const action2 = () => console.log("action 2");
  const action3 = () => console.log("action 3");

  return (
    // retourne une expression JSX
    <div className="App">
      <h1>{pageTitle}</h1>

      <hr />
      {/* 
      loop sur chaque user et affiche un component UserCard par user 
      */}
      {users.map((u, i) => (
        <UserCard key={i} user={u} />
      ))}

      <hr />

      <FirstOne />
      <FirstOne />
      <FirstOne />

      <hr />

      <p>
        In React : <b>Props goes down</b>{" "}
      </p>
      <p>Créer un component MyNumber : qui affiche un nombre n passé en prop</p>

      <hr />

      <DestructurerProps
        bg="black"
        loveJS={true}
        user={{ name: "gui", age: 39.99 }}
      />
      <DestructurerProps
        bg="gray"
        loveJS={false}
        user={{ name: "bill", age: 29 }}
      />
      <DestructurerProps loveJS={false} user={{ name: "bill", age: 29 }} />
      <DestructurerProps
        bg="blue"
        loveJS={false}
        user={{ name: "bill", age: 29 }}
      />

      <hr />

      <MyNumber number="1" />

      <MyNumber number={1 + 1} min={0} max={100} />

      <MyNumber number={[2, 2, 2].reduce((a, v) => a + v, 0)} />

      <hr />

      <MyButton text="create user" callback={pushUser} />
      <MyButton text="signin" callback={action2} />
      <MyButton text="signup" callback={action3} />
    </div>
  );
}

export default App;
