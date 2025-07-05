import React from 'react'
import { BiLogoFacebookCircle, BiLogoDiscordAlt, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoMastodon, BiCopyright } from "react-icons/bi";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <motion.footer
            variants={fadeIn('top', 0.2)}
            initial="hidden"
            whileInView="show"

            className='bg-amber-50 mt-8 py-8 md:py-12 flex flex-col gap-6 md:gap-12'>
            <motion.div
                variants={fadeIn('top', 0.2)}
                initial="hidden"
                whileInView="show"

                className='py-4 px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col gap-8 sm:flex-row justify-between'>
                <div className='flex flex-col gap-4 items-center sm:items-start'>
                    <div className="flex items-center gap-0 cursor-pointer">
                        <div className="w-8 h-8 bg-amber-500 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full opacity-75 hover:opacity-100 transition-opacity -ml-2 "></div>
                    </div>
                    <p>Write some Tagline for the company you idiot.</p>
                    <div className='flex gap-4 text-3xl text-gray-700 '>
                        <a href="" className='hover:text-blue-500'><BiLogoLinkedinSquare /></a>
                        <a href="" className='hover:text-blue-500'><BiLogoDiscordAlt /></a>
                        <a href="" className='hover:text-blue-500'><BiLogoMastodon /></a>
                        <a href="" className='hover:text-blue-500'><BiLogoFacebookCircle /></a>
                        <a href="" className='hover:text-blue-500'><BiLogoInstagramAlt /></a>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:items-start justify-around gap-8 md:gap-20'>
                    <div className='flex flex-col gap-4 items-center sm:items-start'>
                        <p className='font-semibold uppercase'>Company</p>
                        <div className='flex flex-col gap-2 items-center sm:items-start'>
                            <a href='#'>About</a>
                            <a href='#'>Terms of use</a>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>How it works</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-semibold uppercase'>Get Help</p>
                        <div className='flex flex-col gap-2 items-center sm:items-start'>
                            <a href='#'>Contact Us</a>
                            <a href='#'>Support</a>
                            <a href='#'>FAQs</a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn('top', 0.2)}
                initial="hidden"
                whileInView="show"

                className='text-amber-400 px-4 sm:px-20'>
                <hr />
            </motion.div>
            <motion.div
                variants={fadeIn('top', 0.2)}
                initial="hidden"
                whileInView="show"

                className='flex flex-row items-center justify-center gap-1'>
                Copyright <BiCopyright className='w-fit' /> Nirdhum {currentYear}.
            </motion.div>
        </motion.footer>
    )
}

export default Footer