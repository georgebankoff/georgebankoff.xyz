import React from 'react';
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <ul>
      <Link to="/">Home</Link> | <Link to="/getting-started">Getting Started</Link> |{" "}
      <Link to="/users/lambtron">Dynamic Routes</Link>
    </ul>
  );
}
