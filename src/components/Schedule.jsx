import ScheduleImg from '../assets/stats.webp'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const Schedule = () => {
    return (
        <section className='max-w-6xl mx-auto px-4 py-2 sm:py-4 md:py-8 lg:py-16'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-12 '>
                <motion.img
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    src={ScheduleImg} alt="Stats image" />
                <motion.div
                    variants={fadeIn('left', 0.2)}
                    initial="hidden"
                    whileInView="show"

                    className='flex flex-col gap-4 justify-start items-start'>
                    <p className='uppercase text-amber-600'>Schedule</p>
                    <h2 className='text-blue-500 font-bold text-2xl capitalize'>Pick a Time. Regret It Later.</h2>
                    <p className='text-gray-500'>Lorem ipsum your way through this, or just pick a time so we can finally “align.” Expect the usual ritual: awkward hellos, screen-sharing chaos, someone forgetting to unmute, and at least one person pretending they read the brief. We'll throw around words like “synergy,” “touch base,” and “next steps” — all while secretly wondering if this meeting could've been an email. But hey, it's on the calendar now, so let's make it look productive.</p>
                    <a href='#' className='flex justify-center items-center gap-2'>
                        <p className='uppercase text-amber-600 font-semibold'>Schedule btn</p>
                        <TbArrowBigRightLinesFilled className='text-amber-600' />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Schedule