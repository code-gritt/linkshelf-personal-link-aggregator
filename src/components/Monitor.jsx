import MonitorImg from '../assets/monitor-card.webp'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Monitor = () => {
    return (
        <section className='max-w-6xl mx-auto px-4 py-8 sm:py-4 md:py-8 lg:py-16'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-12 '>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col gap-4 justify-start items-start'>
                    <p className='uppercase text-blue-600'>Monitor</p>
                    <h2 className='text-amber-500 font-bold text-2xl capitalize'>Because Micromanaging Is a Feature Now</h2>
                    <p className='text-gray-500'>Lorem ipsum your way into peace of mind — or paranoia, depending on how you handle constant visibility. We track everything: clicks, keystrokes, coffee breaks, and probably your soul. Expect pretty charts, real-time alerts, and passive-aggressive reports that quietly scream “do better.” It’s all in the name of productivity… allegedly.</p>
                    <a href='#' className='flex justify-center items-center gap-2'>
                        <p className='uppercase text-blue-600 font-semibold'>Learn more about monitoring</p>
                        <TbArrowBigRightLinesFilled className='text-blue-600' />
                    </a>
                </motion.div>
                <motion.img
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    src={MonitorImg} alt="Monitor image" />
            </div>
        </section>
    )
}

export default Monitor