import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="https://sennet.in/wp-content/uploads/2019/04/logo.png" 
            alt="SENNET Logo" 
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Our Services</Link>
          <Link to="/new-connection" className="text-gray-700 hover:text-blue-600">New Connection</Link>
          <a 
            href="https://myaccount.sennet.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Pay Online
          </a>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}