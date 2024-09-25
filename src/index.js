import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Si tienes estilos globales
import App from './App';  // Importa el archivo App.js
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Conecta el App con el div de index.html
);

reportWebVitals();
