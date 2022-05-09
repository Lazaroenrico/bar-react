import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/assets/styles/index.css';
import Home from "./views/Home/Home"
import App from "App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);