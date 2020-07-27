import React from 'react';
import './App.css';
// import Likes from "./LikesSoluce.jsx";
// import HappyOrNot from "./HappyOrNotSoluce.jsx";
import Likes from "./LikesSoluce.jsx";
import HappyOrNot from "./HappyOrNotSoluce.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="title">Happy or Not ?</h1>
      <pre>
        {
`<HappyOrNot />`
}
      </pre>
      <hr />
      <HappyOrNot />
      <hr />
      <h1 className="title">Likes Widget</h1>
      <pre>
        {
`<Likes score={0} />
<Likes score={1} />
<Likes score={2} />
<Likes score={3} />
<Likes score={4} />
<Likes score={5} />
<Likes score={6} />`}
      </pre>
      <hr />
      <Likes score={0} />
      <Likes score={1} />
      <Likes score={2} />
      <Likes score={3} />
      <Likes score={4} />
      <Likes score={5} />
      <Likes score={6} />
      <hr />
    </div>
  );
}

export default App;
