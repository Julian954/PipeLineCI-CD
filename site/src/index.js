import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar createRoot desde ReactDOM
import App from './App';
import './index.css';

// Actualiza ReactDOM.render a createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
