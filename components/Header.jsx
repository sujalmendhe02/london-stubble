import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Home,
    Palette,
    User,
    ShoppingBag,
    Info,
    Menu,
    X,
} from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `flex items-center gap-2 font-medium transition ${isActive
            ? "text-gray-300"
            : "text-white hover:text-red-300"
        }`;

    return (
        <>
            {/* HEADER */}
            <header className="relative w-full bg-[linear-gradient(to_right,#012169_0%,#C8102E_40%,#ffffff_50%,#C8102E_60%,#012169_100%)] px-6 md:px-10 py-4 flex items-center justify-between">

                {/* LEFT NAV */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className={linkClass}>
                        <Home size={20} />
                    </NavLink>
                    <NavLink to="/brand" className={linkClass}>
                        <Palette size={20} />
                    </NavLink>
                </nav>

                {/* CENTER LOGO (ABSOLUTE CENTER) */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <NavLink to="/" className="flex items-center gap-3 group">

                        {/* LONDON */}
                        <span
                            className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-white"
                            style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                            LONDON
                        </span>

                        {/* LOGO IMAGE */}
                        <img
                            src="/img/logo.png"
                            alt="logo"
                            className="h-10 w-auto transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(200,16,46,0.6)]"
                        />

                        {/* STUBBLE */}
                        <span
                            className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-white"
                            style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                            STUBBLE
                        </span>
                    </NavLink>
                </div>

                {/* RIGHT NAV */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/products" className={linkClass}>
                        <ShoppingBag size={20} />
                    </NavLink>
                    <NavLink to="/about" className={linkClass}>
                        <Info size={20} />
                    </NavLink>
                    <NavLink to="/contacts" className={linkClass}>
                        <User size={20} />
                    </NavLink>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={26} />
                </button>
            </header>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#012169] text-white z-50 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex flex-col gap-6 px-6 text-lg">
                    <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
                        <Home /> Home
                    </NavLink>

                    <NavLink to="/brand" className={linkClass} onClick={() => setIsOpen(false)}>
                        <Palette /> Brand
                    </NavLink>

                    <NavLink to="/products" className={linkClass} onClick={() => setIsOpen(false)}>
                        <ShoppingBag /> Products
                    </NavLink>

                    <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
                        <Info /> About
                    </NavLink>

                    <NavLink to="/contacts" className={linkClass} onClick={() => setIsOpen(false)}>
                        <User /> Contacts
                    </NavLink>
                </nav>
            </div>
        </>
    );
};

export default Header;