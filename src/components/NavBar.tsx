import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class Selected{
  constructor(height,width){
    this.height = height;
    this.width = width;
  }
}

export function NavBar() {
  return (
    <div className='centered'>
    <ul className = 'navbar'>
      <Link to="/">Home</Link><Link to="/blog">Blog</Link>
    </ul>
    </div>
  );
}
