import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Palette,
  Grid,
  ShoppingBag,
  Info,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 transition ${
      isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-gray-100 shadow-sm px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}><Home size={20} /></NavLink>
          <NavLink to="/brand" className={linkClass}><Palette size={20} /></NavLink>
          <NavLink to="/categories" className={linkClass}><Grid size={20} /></NavLink>
          <NavLink to="/products" className={linkClass}><ShoppingBag size={20} /></NavLink>
          <NavLink to="/about" className={linkClass}><Info size={20} /></NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={26} />
        </button>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 px-6 text-lg">
          <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
            <Home /> Home
          </NavLink>

          <NavLink to="/brand" className={linkClass} onClick={() => setIsOpen(false)}>
            <Palette /> Brand Style
          </NavLink>

          <NavLink to="/categories" className={linkClass} onClick={() => setIsOpen(false)}>
            <Grid /> Categories
          </NavLink>

          <NavLink to="/products" className={linkClass} onClick={() => setIsOpen(false)}>
            <ShoppingBag /> Products
          </NavLink>

          <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
            <Info /> About
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;