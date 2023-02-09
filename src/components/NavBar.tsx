
import { Link } from "https://esm.sh/react-router-dom@6.8.1?deps=react@18";
import * as React from "https://esm.sh/react@18.2.0";

export function NavBar() {
  return (
    <ul>
      <Link to="/">Home</Link> | <Link to="/getting-started">Getting Started</Link> |{" "}
      <Link to="/users/lambtron">Dynamic Routes</Link>
    </ul>
  );
}
