// @deno-types="npm:@types/react"
// @deno-types="npm:@types/react-router-dom"
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
      <NavBar className = 'navbar'/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}