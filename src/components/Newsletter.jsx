import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Newsletter = () => {
    return (
        <motion.section
            variants={fadeIn('top', 0.2)}
            initial="hidden"
            whileInView="show"

            className='py-4 px-4 sm:px-6 lg:px-8 container mx-auto'>
            <div className='bg-blue-500 overflow-hidden rounded-2xl'>
                <div className='relative md:px-28 py-16 px-6 md:py-24'>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView="show"

                        className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></motion.div>
                    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <motion.div
                            variants={fadeIn('right', 0.2)}
                            initial="hidden"
                            whileInView="show"

                            className='max-w-lg text-center md:text-left flex flex-col gap-4'>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-white'>Subscribe. But why?</h2>
                            <p className='text-blue-100 text-sm sm:text-lg'>What's the need to subscribe. It's unnecsessary.</p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView="show"

                            className='flex flex-row'>
                            <input
                                type="email"
                                placeholder="Enter Email.."
                                className="flex px-6 py-3 w-full bg-white rounded-l-xl focus:outline-none focus:ring-2 transition-all"
                            />
                            <button className="bg-amber-600 py-4 px-8 rounded-r-xl text-white cursor-pointer group hover:bg-blue-600 hover:shadow-lg transition-colors"> <BiRightArrowAlt className="text-lg group-hover:translate-x-1 transition-transform" /> </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>
                {
                    `.clip-path-slant{
                       clip-path: polygon(16% 0, 100% 0, 100% 50%, 100% 100%, 16% 100%, 0% 50%);
                    }`
                }
            </style>

        </motion.section>
    )
}

export default Newsletter