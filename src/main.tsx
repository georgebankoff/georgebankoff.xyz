import * as React from "https://esm.sh/react@18.2.0";
import {
  BrowserRouter
} from "https://esm.sh/react-router-dom@6.8.1?deps=react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0"
import App from "./App.tsx";

// Bind react app to <div id="app" />
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
