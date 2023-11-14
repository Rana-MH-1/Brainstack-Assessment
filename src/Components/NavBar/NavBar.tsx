import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './NavBar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const LinkStyle= {textDecoration: 'none', color: 'black'}

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
       <img alt='logoImg' src={'./logo.png'}/>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link style={LinkStyle} to="#">Register</Link>
        </li>
        <li>
          <Link style={LinkStyle} to="#">Login</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
