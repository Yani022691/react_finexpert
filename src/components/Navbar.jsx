import React, { useState, useEffect } from "react"; 
import { Menu, X, Calculator } from "lucide-react";
import { siteData } from "../data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 
  const { navbar } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); 
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-4" 
          : "bg-transparent py-6"    
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <Calculator size={24} />
          </div>
          <h1 className={`text-2xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-blue-900" : "text-white"
          }`}>
            {navbar.logoName}
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className={`hidden md:flex gap-8 items-center font-medium transition-colors ${
          scrolled ? "text-gray-600" : "text-white/90"
        }`}>
          {navbar.links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button className={`px-6 py-2 rounded-lg font-bold transition-all ${
              scrolled 
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md" 
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}>
              {navbar.buttonText}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className={`md:hidden transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${open ? "max-h-96 border-b" : "max-h-0"}`}>
        <ul className="p-6 space-y-4 text-gray-600 font-medium">
          {navbar.links.map((link, index) => (
            <li key={index}><a href={link.href} className="block hover:text-blue-600">{link.name}</a></li>
          ))}
          <li className="pt-2">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
              {navbar.buttonText}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;