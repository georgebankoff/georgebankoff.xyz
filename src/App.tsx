import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import './App.css'


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