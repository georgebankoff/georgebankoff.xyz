import React from 'react';
import {
  BrowserRouter
} from "https://esm.sh/react-router-dom@6.8.1?deps=react@18.2.0";
import {ReactDOM} from 'react-dom'
import App from "./App.tsx";

// Bind react app to <div id="app" />
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
