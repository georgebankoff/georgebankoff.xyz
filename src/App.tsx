import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import './App.css'
import { BlogPage } from "./pages/Blog.tsx";


export default function App(props) {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blog" element={<BlogPage/>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}