import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App'; // composant racine de l'app react

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // utilise le DOM + virtual DOM de react
  // pour accrocher le composant app à l'élément DOM #root
);

// es7-react-js-snippets