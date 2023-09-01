import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";

// Cible ma div #root dans mon index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Celui affiche le composant <App>
// Le compasant <App> à son tour renvoie d'autre composant
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
