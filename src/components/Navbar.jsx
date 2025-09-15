import React, { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const { user, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
    setIsMenuOpen(false);
  };

  const initials = user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full container mx-auto flex justify-between items-center px-6 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center gap-0 cursor-pointer">
            <div className="w-8 h-8 bg-amber-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full opacity-施0 transition-opacity -ml-2"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="32"
            viewBox="0 0 300 80"
            fill="none"
            className="h-6 md:h-8"
          >
            <text
              x="0"
              y="55"
              fontFamily="Segoe UI, Helvetica, Arial, sans-serif"
              fontWeight="700"
              fontSize="48"
              letterSpacing="2"
              fill="url(#gradient)"
            >
              LinkShelf
            </text>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <BiX className="size-6" />
          ) : (
            <BiMenuAltRight className="size-6" />
          )}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {user ? (
            <>
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {initials}
              </div>
              <Link
                to="/dashboard"
                className="bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-red-500 transition-all hover:shadow-lg hover:shadow-red-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all ${
                    activeLink === link.href
                      ? "font-extrabold text-amber-600 after:w-full"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/login"
                className="bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-amber-500 transition-all hover:shadow-lg hover:shadow-amber-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
          <div className="flex flex-col items-center gap-4 py-3 px-4">
            {user ? (
              <>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {initials}
                </div>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-red-500 transition-all hover:shadow-lg hover:shadow-red-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-medium relative after:transition-all ${
                      activeLink === link.href
                        ? "font-extrabold text-amber-600 after:w-full"
                        : "text-gray-600 hover:text-gray-900 transition-all"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-amber-500 transition-all hover:shadow-lg hover:shadow-amber-100"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
