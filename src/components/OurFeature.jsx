import React from 'react'
import { BiSolidBulb, BiSolidLayer, BiSolidCoffee, BiSolidCog } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const OurFeature = () => {

    const ourfeatures = [
        {
            icon: <BiSolidLayer className="w-8 h-8 text-indigo-600" />,
            title: "Web Design",
            description: "One for all and all for one, Muskehounds are always ready.",
            link: "#learn-more"
        },
        {
            icon: <BiSolidBulb className="w-8 h-8 text-amber-400" />,
            title: "Ad-Creatives",
            description: "Alphabet Village and the subline of her own road.",
            link: "#learn-more"
        },
        {
            icon: <BiSolidCog className="w-8 h-8 text-red-400" />,
            title: "Automation",
            description: "Little Blind Text should turn around and return.",
            link: "#learn-more"
        },
        {
            icon: <BiSolidCoffee className="w-8 h-8 text-cyan-400" />,
            title: "Infographics",
            description: "Nothing the copy said could convince her.",
            link: "#learn-more"
        }
    ]

    const listitem = [
        {
            desc: "▪️ A thing you probably expect us to offer anyway"
        },
        {
            desc: "▪️ Another thing that sounds technical enough to impress your boss"
        },
        {
            desc: "▪️ Something vague but positive — just nod and keep scrolling"
        },
    ]

    return (
        <section id='features'>
            <div className='sm:max-w-7xl mx-auto py-6 sm:py-8 md:py-12'>
                <div className='flex flex-col md:flex-row justify-between items-start gap-4 px-4'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"

                        className='flex flex-col gap-4 px-2'>
                        <h3 className='font-bold text-2xl'>Cool Feature Stuff or Whatever.</h3>
                        <p className='text-lg'>Here’s the part where we act like these bullet points will change your life.</p>
                        <div className='flex flex-col gap-2'>
                            {
                                listitem.map((li, index) => (
                                    <p key={index} className='text-sm'>{li.desc}</p>
                                ))
                            }
                        </div>
                        <button className='flex bg-blue-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-amber-500 transition-all hover:shadow-lg hover:shadow-amber-100 cursor-pointer w-fit'>
                            Get Started
                        </button>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            ourfeatures.map((feat, index) => (
                                <motion.div
                                    variants={fadeIn('left', 0.2)}
                                    initial="hidden"
                                    whileInView="show"

                                    key={index} className=' flex flex-col gap-4 p-6 w-full sm:max-w-80 cursor-pointer bg-white border-1 border-gray-200 hover:border-gray-100 hover:scale-105 hover:shadow-xl rounded-xl transition-all duration-300'>
                                    <div>{feat.icon}</div>
                                    <h3 className='font-semibold text-xl'>{feat.title}</h3>
                                    <p>{feat.description}</p>
                                    <a href={feat.link} className='text-blue-500 font-medium uppercase'>learn more</a>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFeature