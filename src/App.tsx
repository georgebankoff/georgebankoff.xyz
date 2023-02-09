import * as React from "https://esm.sh/react@18.2.0";
import {
  Navigate,
  Route,
  Routes,
} from "https://esm.sh/react-router-dom@6.8.1?deps=react@18.2.0";
import { NavBar } from "./components/NavBar.tsx";
import { HomePage } from "./pages/HomePage.tsx";

export default function App(props) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}