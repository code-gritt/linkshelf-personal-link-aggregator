import React, { useState } from "react"
// import { Link } from "react-dom"
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [activeLink, setactiveLink] = useState('#home')

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}

      className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex justify-between items-center px-6 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        {/* <Link to="/"> */}
        <div className="flex items-center gap-0 cursor-pointer">
          <div className="w-6 h-6 bg-amber-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity -ml-2 "></div>
        </div>
        {/* </Link> */}

        {/* Mobile Menu icon */}
        <button className="md:hidden p-2 transition-all" onClick={() => setisMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen ? <BiX className="size-6" /> : <BiMenuAltRight className="size-6" />
          }
        </button>


        {/* Nav Opt */}
        <div className="hidden md:flex gap-10">
          {
            navLinks.map((link, index) => (
              <a key={index} href={link.href} onClick={() => setactiveLink(link.href)} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all ${activeLink === link.href ? "font-extrabold text-amber-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>{link.label}</a>
            ))
          }
        </div>


        {/* CTA */}
        <button className="hidden md:flex bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#contact">Reach Out</a>
        </button>
      </div >

      {/* Mobile View */}
      {
        isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col items-center gap-4 py-3 px-4">
              {
                navLinks.map((link, index) => (
                  <a key={index} href={link.href} onClick={() => { setactiveLink(link.href); setisMenuOpen(false); }} className={`text-sm font-medium relative after:transition-all ${activeLink === link.href ? "font-extrabold text-amber-600 after:w-full" : "text-gray-600 hover:text-gray-900 transition-all"}`}>{link.label}</a>
                ))
              }

              <button onClick={() => setisMenuOpen(false)} className=" w-fit bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100">
                <a href="#contact">Reach Out</a>
              </button>
            </div>
          </div>
        )
      }
    </motion.nav >
  )
}

export default Navbar