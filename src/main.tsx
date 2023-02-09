import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import {ReactDOM} from 'react-dom'
import App from "./App.tsx";

// Bind react app to <div id="app" />
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
