import React from 'react';
import './App.css';
import Likes from "./LikesSoluce.jsx"

function App() {
  return (
    <div className="App">
      <Likes score={0} />
      <Likes score={1} />
      <Likes score={2} />
      <Likes score={3} />
      <Likes score={4} />
      <Likes score={5} />
      <Likes score={6} />
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
    </div>
  );
}

export default App;
