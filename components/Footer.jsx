import React from "react";
import { Home, Grid, ShoppingBag, Info, Mail, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass =
    "flex items-center gap-2 text-gray-600 hover:text-blue-500 transition";

  return (
    <footer className="bg-gray-100 mt-10 border-t">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <img src="/logo.png" alt="logo" className="h-10 mb-4" />
          <p className="text-gray-600 text-sm">
            Premium grooming products inspired by modern style and tradition.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <NavLink to="/" className={linkClass}><Home size={18}/> Home</NavLink>
            <NavLink to="/categories" className={linkClass}><Grid size={18}/> Categories</NavLink>
            <NavLink to="/products" className={linkClass}><ShoppingBag size={18}/> Products</NavLink>
            <NavLink to="/about" className={linkClass}><Info size={18}/> About</NavLink>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
          <div className="flex flex-col gap-3 text-gray-600">
            <p className="flex items-center gap-2">
              <Mail size={18}/> support@myapp.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18}/> +91 98765 43210
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm py-4 border-t">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
