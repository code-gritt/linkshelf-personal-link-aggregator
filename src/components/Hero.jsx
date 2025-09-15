import React from "react";
import { BiRightArrowAlt, BiSolidStar } from "react-icons/bi";
import Heroimg from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-28 sm:pt-48 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left side */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Star */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex items-center gap-2 bg-amber-100 w-fit px-5 py-2 rounded-full group hover:bg-blue-100 cursor-pointer"
        >
          <BiSolidStar className="text-amber-600 group-hover:scale-110 transition-transform group-hover:text-blue-500 animate-spin group-hover:animate-pulse" />
          <span className="font-normal text-sm"> Save. Organize. Share.</span>
        </motion.div>

        {/* heading */}
        <motion.h1
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight capitalize"
        >
          All your{" "}
          <span className="text-amber-500 hover:text-blue-500 cursor-pointer transition-colors">
            links in one place.
          </span>
        </motion.h1>

        {/* para */}
        <motion.p
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          className="text-gray-500 text-lg md:text-xl max-w-xl"
        >
          LinkShelf helps you collect, categorize, and share the content you
          care about. Use credits to publish public collections, highlight
          priority links, and make your saved content more valuable — without
          the clutter.
        </motion.p>

        <motion.div
          variants={fadeIn("top", 0.4)}
          initial="hidden"
          whileInView="show"
          className="flex items-center max-w-md gap-3"
        >
          <input
            type="email"
            placeholder="Enter Email.."
            className="flex-1 px-6 py-3 border w-full border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-amber-600 py-4 px-8 rounded-lg text-white cursor-pointer group hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-100 transition-colors">
            <BiRightArrowAlt className="text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* right side */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <img
          src={Heroimg}
          alt="hero-img"
          className="hover:scale-101 hover:-rotate-90 transition-transform duration-900"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
