import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiHome, FiUsers, FiMenu, FiX } from "react-icons/fi";
import { MdSmartToy } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";

export default function Nav() {
  const { dark, toggleDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <FiHome size={24} />, key: "/", to: "/" },
    { name: "About Us", icon: <FiUsers size={24} />, key: "/about", to: "/about" },
    {
      name: "Plant Disease Detector",
      icon: <MdSmartToy size={24} />,
      key: "/detector",
      to: "/detector",
    },
  ];

  return (
    <>
      {/* Top Nav */}
      <nav
        className={`flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-24 py-4 shadow-md z-20 ${
          dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">
          🌽 Abbaa Biyyo
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`relative text-base font-medium transition-colors cursor-pointer ${
                location.pathname === item.to
                  ? "text-emerald-500"
                  : dark
                  ? "text-gray-300 hover:text-emerald-400"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              {item.name}
              {location.pathname === item.to && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Theme + Menu Toggle (Mobile) */}
        <div className="flex md:hidden">
          <button
            className="p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
            onClick={toggleDark}
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:block">
          <button
            className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
            onClick={toggleDark}
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 py-2 shadow-md z-10 ${
            dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded-md text-base cursor-pointer ${
                location.pathname === item.to
                  ? "bg-emerald-500 text-white"
                  : dark
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Bottom navigation removed */}
    </>
  );
}