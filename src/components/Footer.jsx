import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoDiscordAlt,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoMastodon,
  BiCopyright,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeIn("top", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-amber-50 mt-8 py-8 md:py-12 flex flex-col gap-6 md:gap-12"
    >
      {/* Top Section */}
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        className="py-4 px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col gap-8 sm:flex-row justify-between"
      >
        {/* Branding & Socials */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <a href="#home" className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center gap-0 cursor-pointer">
              <div className="w-8 h-8 bg-amber-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity -ml-2 "></div>
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
                  <stop offset="0%" stopColor="#f59e0b" /> {/* amber-500 */}
                  <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                </linearGradient>
              </defs>
            </svg>
          </a>

          <p className="text-gray-600">
            Curate, Organize & Share — all in one LinkShelf.
          </p>
          <div className="flex gap-4 text-3xl text-gray-700">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <BiLogoLinkedinSquare />
            </a>
            <a
              href="https://discord.com"
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <BiLogoDiscordAlt />
            </a>
            <a
              href="https://mastodon.social"
              aria-label="Mastodon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <BiLogoMastodon />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <BiLogoInstagramAlt />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around gap-8 md:gap-20">
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <p className="font-semibold uppercase">Company</p>
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <a href="#">About</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">How It Works</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <p className="font-semibold uppercase">Get Help</p>
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <a href="#">Contact Us</a>
              <a href="#">Support</a>
              <a href="#">FAQs</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-amber-400 px-4 sm:px-20"
      >
        <hr />
      </motion.div>

      {/* Copyright */}
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView="show"
        className="flex items-center justify-center text-gray-500 text-sm"
      >
        <BiCopyright className="inline-block" /> {currentYear} LinkShelf. All
        rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
