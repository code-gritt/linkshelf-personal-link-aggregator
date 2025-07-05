import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { BiLeftArrowAlt, BiRightArrowAlt, BiSolidStar } from "react-icons/bi";

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

//   testimonials section
const testimonials = [
    {
        id: 1,
        name: "Ravi S., Pretending-to-be-a-Manager",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        text: "I had no idea what I was doing, but somehow this made me look competent.",
    },
    {
        id: 2,
        name: "Ankita M., Probably Skimming This",
        image: "https://randomuser.me/api/portraits/women/90.jpg",
        text: "We still don't understand how it works, but it has charts, so we trust it.",
    },
    {
        id: 3,
        name: "Jay D., Reluctant Subscriber",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
        text: "Signed up out of FOMO. Stayed because cancelling felt like effort.",
    },
    {
        id: 4,
        name: "Sneha P., Middle Management Hero",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "I told my team to use it. They didn’t. But it’s the thought that counts.",
    },
    {
        id: 5,
        name: "Rohan T., Button Clicker-in-Chief",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "10/10 would confuse my colleagues with this again.",
    },
    {
        id: 6,
        name: "Neha K., Extremely Satisfied (Allegedly)",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "It solved a problem I didn’t know I had — and probably still don’t.”",
    },

];


const Testimonial = () => {

    return (
        <section id='testimonials' className='py-16 px-4 max-w-6xl mx-auto flex flex-col gap-8'>
            <motion.div
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView="show"

                className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='font-bold text-2xl uppercase text-center'>Why do we care what people say!</h2>
                <p className='text-md text-gray-500'>WTF are these people ranting on about?</p>
            </motion.div>

            <motion.div
                variants={fadeIn('top', 0.2)}
                initial="hidden"
                whileInView="show"

                className='relative'>
                <Swiper
                    navigation={
                        {
                            nextEl: '.swiper-btn-next-custom',
                            prevEl: '.swiper-btn-prev-custom',
                        }
                    }
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },

                    }}
                    modules={[Navigation]}
                    className="testimonial_swiper"
                >
                    {
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col items-center justify-center gap-4 p-4 h-full bg-white'>
                                    <div className='w-24 h-24 mx-auto'>
                                        <img src={testimonial.image} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>

                                    <div className='flex'>
                                        {
                                            [...Array(5)].map((_, starIndex) => (
                                                <span className='text-amber-500'><BiSolidStar /></span>
                                            ))
                                        }
                                    </div>

                                    <div className='text-lg font-bold text-blue-600 text-center'>{testimonial.name}</div>
                                    <div className='text-center text-gray-600'>{testimonial.text}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                {/* navigator */}

                <div className='flex justify-center gap-4 mt-8'>
                    <button className='swiper-btn-prev-custom w-12 h-12 rounded-full bg-amber-500 text-white sm:text-black sm:bg-white border-gray-200 flex items-center justify-center sm:hover:bg-amber-500 hover:text-white transition-all duration-200 cursor-pointer'>
                        <BiLeftArrowAlt className='size-6' />
                    </button>
                    <button className='swiper-btn-next-custom w-12 h-12 rounded-full bg-amber-500 text-white sm:text-black sm:bg-white border-gray-200 flex items-center justify-center sm:hover:bg-amber-500 hover:text-white transition-all duration-200 cursor-pointer'>
                        <BiRightArrowAlt className='size-6' />
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Testimonial