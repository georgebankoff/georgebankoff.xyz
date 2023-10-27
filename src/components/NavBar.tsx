import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
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
      <Link to='/'>Home</Link>
      <Link to='/blog' className = {window.location.pathname==='/blog' ? 'focused' : 'sho'}>Blog</Link>
    </ul>
    </div>
  );
}
