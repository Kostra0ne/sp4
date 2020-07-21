import React from "react";

import { FirstOne } from "./components/baby-steps/FirstOne";
import MyButton from "./components/baby-steps/MyButton";
import MyNumber from "./components/baby-steps/MyNumber";
import DestructurerProps from "./components/baby-steps/DestructurerProps";

function App() {
  const action1 = () => console.log("action 1");
  const action2 = () => console.log("action 2");
  const action3 = () => console.log("action 3");

  return (
    // expression JSX
    <div className="App">
      <h1>home</h1>
      <FirstOne />
      <FirstOne />
      <FirstOne />

      <p>
        In React : <b>Props goes down</b>{" "}
      </p>
      <p>Créer un component MyNumber : qui affiche un nombre n passé en prop</p>

      <hr />

      <DestructurerProps bg="black" loveJS={true} user={{name: "gui", age: 39.99}} />
      <DestructurerProps bg="gray" loveJS={false} user={{name: "bill", age: 29}} />
      <DestructurerProps loveJS={false} user={{name: "bill", age: 29}} />
      <DestructurerProps bg="blue" loveJS={false} user={{name: "bill", age: 29}} />

      <hr />
      
      <MyNumber number="1" />

      <MyNumber number={1 + 1} min={0} max={100} />

      <MyNumber number={[2, 2, 2].reduce((a, v) => a + v, 0)} />

      <hr />

      <MyButton text="create user" callback={action1} />
      <MyButton text="signin" callback={action2} />
      <MyButton text="signup" callback={action3} />
    </div>
  );
}

export default App;
