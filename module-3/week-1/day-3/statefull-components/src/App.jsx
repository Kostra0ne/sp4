import React from "react";
import "./App.css";
// REVIEW
import SimpleMap from "./reviews/SimpleMap";
import CallbackParent from "./reviews/CallbackParent";
// CODE ALONG
import IncrementCounter from "./code-along/IncrementCounter";
import FullCounter from "./code-along/FullCounter";
import ToggleDisplay from "./code-along/ToggleDisplay";
import ViewTextInput from "./code-along/ViewTextInput";
// D.I.Y
import EvenOrOddSoluce from "./practice/EvenOrOddSoluce";
import SquareOfNumbersSoluce from "./practice/SquareOfNumbersSoluce";
import UserDynamicList from "./practice/dynamic-user-list/UserDynamicList";
// REVIEW MAP + STATE
import ProductList from "./practice/ProductList";

function App() {
  return (
    <div className="App">
      <h3 className="title">Dynamic User List</h3>
      <hr />

      <UserDynamicList />

      <hr />
      {/*
      <ProductList />

      <hr />

      <h1 className="title">Reviews</h1>
      <h2 className="title">simple map</h2>
      <SimpleMap />
      <hr />
      <h2 className="title">Callback child => parent</h2>
      <CallbackParent />
      <hr />
      <h1 className="title">Statefull Components (with classes)</h1>
      <hr />
      <IncrementCounter />
      <hr />
      <FullCounter />
      <hr />
      <ToggleDisplay />
      <hr />
      <ViewTextInput />

      <hr />
      <h1 className="title">Always remember</h1>
      <ul>
        <li>
          State is defined in the component while props are sent to the
          component.
        </li>
        <li>
          State can be changed by the component while props are read-only.
        </li>
        <li>
          State can be used only in class components while props can be used in
          class and functional components. (<b>before React v16.8</b>)
        </li>
      </ul>
      <hr />

      <h2 className="title">D.I.Y</h2>
      <hr />
      <h3 className="title">Even Or Odd ?</h3>
      <hr />
      <pre>
        {`
        <EvenOrOddSoluce nb={3} />
        <EvenOrOddSoluce nb={10} />
        <EvenOrOddSoluce nb={1} />`}
      </pre>
      <EvenOrOddSoluce nb={3} />
      <EvenOrOddSoluce nb={10} />
      <EvenOrOddSoluce nb={1} />

      <h3 className="title">Grid of Numbers</h3>
      <hr />
      <pre>
        {`
     <SquareOfNumbersSoluce max={1} nth={1} />
     <SquareOfNumbersSoluce max={4} nth={1} />
     <SquareOfNumbersSoluce max={8} nth={2} />
     <SquareOfNumbersSoluce max={100} nth={45} />
        `}
      </pre>
      <hr />
      <SquareOfNumbersSoluce max={1} nth={1} />
      <SquareOfNumbersSoluce max={4} nth={1} />
      <SquareOfNumbersSoluce max={8} nth={2} />
      <SquareOfNumbersSoluce max={100} nth={45} />
      <hr />

      */}
    </div>
  );
}

export default App;
