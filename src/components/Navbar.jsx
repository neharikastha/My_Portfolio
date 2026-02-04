// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">My Portfolio</h1>
        <ul className="flex gap-6 text-black">
          <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-300">About</Link></li>
          <li><Link to="/projects" className="hover:text-orange-300">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-orange-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
