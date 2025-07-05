import React from 'react'
import { useState } from 'react'

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Pricing = () => {

    const featureStarter = [
        {
            icon: "◾",
            description: " Basic stuff you'll pretend is enough — until it's not."

        },
        {
            icon: "◾",
            description: " Features you won't fully understand, but hey, they're there."
        },
        {
            icon: "◾",
            description: " Support that technically exists, but let's not get clingy."
        }
    ]

    const featureEnterpise = [
        {
            icon: "◾",
            description: " Fancy features no one on your team will use properly"

        },
        {
            icon: "◾",
            description: " Custom stuff that sounds impressive in meetings"
        },
        {
            icon: "◾",
            description: " Priority support — because you're very important"
        },
        {
            icon: "◾",
            description: " Extra dashboards to stare at without context"
        },
        {
            icon: "◾",
            description: " Integration options you'll never fully configure"
        }
    ]

    const [teamcount, setteamcount] = useState(1);

    const starterPrice = Math.round(4000 * (teamcount / 50))
    const enterprisePrice = Math.round(7500 * (teamcount / 50))

    return (
        <section id='pricing' className='px-4 py-20'>
            <div className='max-w-6xl mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16 '>
                <motion.h2
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='text-3xl md:text-4xl font-bold text-center'>Pricing</motion.h2>
                <motion.div
                    variants={fadeIn('top', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col md:flex-row justify-between gap-8'>
                    <div className='bg-white flex flex-col items-start justify-start p-8 rounded-lg shadow-md border-1 border-amber-600 w-full gap-4'>
                        <h3 className='text-xl text-gray-500 font-semibold'>Starter (Because you're cheap, but not that cheap.)</h3>
                        <p className='text-3xl text-amber-600 font-bold'>₹{starterPrice} <br /><span className='text-xl'>/user /month</span></p>
                        <div>
                            {featureStarter.map((feature, index) => (
                                <div key={index}>
                                    {feature.icon}
                                    {feature.description}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='bg-white flex flex-col items-start justify-start p-8 rounded-lg shadow-md w-full gap-4 border-1 border-blue-600'>
                        <h3 className='text-xl text-gray-500 font-semibold'>Enterprise (You’ve got money to burn — we’re here to help.)</h3>
                        <p className='text-3xl text-blue-600 font-bold'>₹{enterprisePrice} <br /><span className='text-xl'>/user /month</span></p>
                        <div>
                            {featureEnterpise.map((feature, index) => (
                                <div key={index}>
                                    {feature.icon}
                                    {feature.description}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('top', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col justify-center items-center gap-4'>
                    <p className='font-semibold text-2xl text-center'>Team count: {teamcount}</p>
                    <div className='flex items-center gap-2 w-full max-w-xl'>
                        <span className='text-xs sm:text-sm text-gray-600'>1</span>
                        <input type="range" name="count" id="count" min="1" max="50" value={teamcount} onChange={(e) => setteamcount(parseInt(e.target.value))} className='flex-1 h-2 bg-gray-200 rounded-lg cursor-pointer appearance-none' />
                        <span className='text-xs sm:text-sm text-gray-600'>50</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col items-center justify-center gap-4'>
                    <p className='font-semibold text-xl'>Ready to get started!</p>
                    <button className='flex bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer w-fit'>
                        Get Started
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing