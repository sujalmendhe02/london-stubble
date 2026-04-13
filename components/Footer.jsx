import React from "react";
import { Home, ShoppingBag, Info, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass =
    "flex items-center gap-2 text-gray-200 hover:text-red-400 transition";

  return (
    <footer className="bg-black mt-10 border-t border-red-600 text-white">
      
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo */}
        <div>
          <p className="text-gray-300 text-sm">
            Premium grooming inspired by British heritage 
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <NavLink to="/" className={linkClass}><Home size={18}/> Home</NavLink>
            <NavLink to="/products" className={linkClass}><ShoppingBag size={18}/> Products</NavLink>
            <NavLink to="/about" className={linkClass}><Info size={18}/> About</NavLink>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="flex flex-col gap-3 text-gray-300">
            <p className="flex items-center gap-2">
              <Mail size={18}/> support@myapp.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18}/> +91 98765 43210
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm py-4 ">
        © {new Date().getFullYear()} MyApp 🇬🇧 | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;