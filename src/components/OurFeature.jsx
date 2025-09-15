import React from "react";
import {
  BiSolidBulb,
  BiSolidLayer,
  BiSolidCoffee,
  BiSolidCog,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const OurFeature = () => {
  const ourfeatures = [
    {
      icon: <BiSolidLayer className="w-8 h-8 text-indigo-600" />,
      title: "Organized Shelves",
      description:
        "Save links into shelves and categories that actually make sense — no more endless bookmarks bar chaos.",
      link: "#learn-more",
    },
    {
      icon: <BiSolidBulb className="w-8 h-8 text-amber-400" />,
      title: "Highlight Priority Links",
      description:
        "Pin important resources to the top of your collection so your team knows what really matters.",
      link: "#learn-more",
    },
    {
      icon: <BiSolidCog className="w-8 h-8 text-red-400" />,
      title: "Smart Automation",
      description:
        "Auto-tag, auto-categorize, and auto-regret not having used this sooner. LinkShelf does the boring stuff for you.",
      link: "#learn-more",
    },
    {
      icon: <BiSolidCoffee className="w-8 h-8 text-cyan-400" />,
      title: "Collaborative Sharing",
      description:
        "Share shelves with your team, your class, or the whole internet. Collaboration without the email chains.",
      link: "#learn-more",
    },
  ];

  const listitem = [
    {
      desc: "▪️ Credits unlock public shelves & premium features",
    },
    {
      desc: "▪️ Highlight and reorder links for faster discovery",
    },
    {
      desc: "▪️ Share knowledge without drowning in Slack threads",
    },
  ];

  return (
    <section id="features">
      <div className="sm:max-w-7xl mx-auto py-6 sm:py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 px-4">
          {/* Left Side */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4 px-2"
          >
            <h3 className="font-bold text-2xl">
              Features That Make LinkShelf Useful
            </h3>
            <p className="text-lg">
              Forget “bookmark managers.” LinkShelf is built for actual humans
              who need quick access, structure, and sharing.
            </p>
            <div className="flex flex-col gap-2">
              {listitem.map((li, index) => (
                <p key={index} className="text-sm">
                  {li.desc}
                </p>
              ))}
            </div>
            <button className="flex bg-blue-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-amber-500 transition-all hover:shadow-lg hover:shadow-amber-100 cursor-pointer w-fit">
              Get Started
            </button>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourfeatures.map((feat, index) => (
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                key={index}
                className="flex flex-col gap-4 p-6 w-full sm:max-w-80 cursor-pointer bg-white border-1 border-gray-200 hover:border-gray-100 hover:scale-105 hover:shadow-xl rounded-xl transition-all duration-300"
              >
                <div>{feat.icon}</div>
                <h3 className="font-semibold text-xl">{feat.title}</h3>
                <p>{feat.description}</p>
                <a
                  href={feat.link}
                  className="text-blue-500 font-medium uppercase"
                >
                  learn more
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeature;
