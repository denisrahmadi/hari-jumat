import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="pb-20">
          <Link to="/" className="px-5 text-center bg-red-500">Home</Link>
          <Link to="/about" className="px-5 text-center bg-green-500">About</Link>
          <Link to="/contact" className="px-5 text-center bg-yellow-500">Contact</Link>
    </nav>
  );
};
export default Navbar;