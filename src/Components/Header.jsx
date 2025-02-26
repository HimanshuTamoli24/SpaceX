import React from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "./Routes.js";
import { BiFilter } from "react-icons/bi";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent min-h-24 flex justify-between sm:justify-evenly items-center text-[0.8rem] font-bold uppercase px-10">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
                <h1 className="text-[2rem] font-mono">SPACE</h1>
                <img className="ml-2" src="/favicon.ico" alt="Spacex logo" />
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex lg:gap-x-6">
                <ul className="flex justify-evenly items-center space-x-6">
                    {navRoutes.map((route, index) => (
                        <li key={index} className="hover:text-gray-400 transition-all">
                            <Link to={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-x-4 cursor-pointer">
                <h1 className="hidden lg:block hover:text-gray-400 transition-all">Shop</h1>
                <BiFilter className="text-xl mx-2 hover:scale-110 transition-transform" />
            </div>
        </header>
    );
}

export default Header;
