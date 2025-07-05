import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'


const Partner = () => {

    //   features section

    const features = [
        {
            icon: "🔍",
            title: "Figure out your mess.",
            description: "We’ll send you a fancy PDF and pretend to know what we're doing. Then we'll argue over small details like fonts, colors, and scope creep."
        },
        {
            icon: "⚙️",
            title: "Work out the details",
            description: "We discuss how we’ll talk, when we’ll talk, and how many meetings we can all pretend to be busy for."
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Once we sort out the holy trifecta: how we talk, how you pay, and who to blame when scope explodes."
        }
    ]

    return (
        <section className='flex flex-col items-center justify-center gap-8 py-16 px-4 mx-auto'>
            <motion.div
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView="show"

                className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-bold text-3xl text-amber-600'>How can we help?</h3>
                <p className='text-center'>Idiot! Write something to show you can actually help</p>
            </motion.div>
            <div className='flex flex-col justify-evenly items-center lg:flex-row gap-4'>
                {
                    features.map((feature, index) => (
                        <motion.div
                            variants={fadeIn('top', 0.2)}
                            initial="hidden"
                            whileInView="show"

                            key={index} className='flex flex-col gap-2 items-center justify-center w-full sm:w-80'>
                            <div className='text-xl text-center rounded-full px-3 py-3' style={{ backgroundColor: index === 0 ? "#f1eff0" : index === 1 ? "#fee7e7" : "#fff3e4" }}>{feature.icon}</div>
                            <h3 className='text-center font-bold text-xl'>{feature.title}</h3>
                            <p className='text-center'>{feature.description}</p>
                        </motion.div>
                    ))
                }
            </div>
            <motion.button
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView="show"

                className='flex bg-amber-500 px-6 py-2.5 font-bold text-white rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-100 cursor-pointer'>
                Become a Partner
            </motion.button>
        </section>
    )
}

export default Partner