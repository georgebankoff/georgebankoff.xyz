import React from 'react';
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <ul>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>{" "}
    </ul>
  );
}
