import React from 'react'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Purpose = () => {

    //   purpose section
    const features = [
        {
            icon: "🟣",
            title: "Built for Impact (Allegedly)",
            description: "We handpicked a “diverse” team of designers, developers, and marketers — which basically means nobody agrees on anything, and somehow, it works. Most days."
        },
        {
            icon: "🔴",
            title: "In Sync (Like, Spiritually?)",
            description: "We pretend to adapt to your workflows so it feels like we’re part of the team — until we break something, disappear for two days, then come back with “a better way to do it.”"
        }
    ];

    return (
        <section id='about' className='w-full mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 py-16 flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 items-center sm:items-start md:items-start'>
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView="show"

                className='max-w-6xl mx-0 sm:mx-auto md:mx-auto lg:mx-auto flex flex-col gap-1 justify-start'>
                <p className='uppercase text-sm text-amber-600'>Achieve more</p>
                <div className='font-extrabold text-4xl w-fit sm:w-64'>
                    Purpose of this to learn and practice.
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView="show"

                className='flex flex-col lg:flex-row mx-0 sm:mx-auto md:mx-auto lg:mx-auto'>
                {
                    features.map((feature, index) => (
                        <motion.div key={index}
                            variants={fadeIn('top', 0.2)}
                            initial="hidden"
                            whileInView="show"

                            className='flex flex-col gap-2 sm:flex-row md:flex-row w-full lg:flex-row h-fit sm:w-100 justify-start'>
                            <div className='h-fit w-fit justify-start items-center flex rounded-lg'>
                                {feature.icon}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-semibold'>{feature.title}</h3>
                                <p className='text-gray-400'>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

        </section>
    )
}

export default Purpose