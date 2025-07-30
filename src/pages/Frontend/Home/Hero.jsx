import React from 'react'
import { motion } from "framer-motion";
import { getSlideInVariants } from '../../../utils/slideanimation'
import TypingText from '../../../utils/typinganimation';
import Button from '../../components/common/Button'
import Profilepic from '../../components/common/profilepic'


function Hero() {

    const socialLinks = [
        { link: '', icon: 'fa-brands fa-facebook' },
        { link: '', icon: 'fa-brands fa-whatsapp' },
        { link: '', icon: 'fa-brands fa-instagram' },
        { link: '', icon: 'fa-brands fa-linkedin' },
        { link: '', icon: 'fa-brands fa-github' },
    ]

    return (
        <section id='home' className='grid lg:grid-cols-2 grid-cols-1 lg:py-20 py-8 border-b border-[#1EE4E9]'>

            {/* left */}
            <div className='lg:px-20 px-4 flex flex-col items-start justify-center gap-2 lg:gap-4'>
                <motion.h1 className='text-xl font-semibold'
                    {...getSlideInVariants('top', 0.3, 0.6)}
                >
                    Hi, I’m
                </motion.h1>
                <motion.h1 className='text-4xl font-bold'
                    {...getSlideInVariants('left', 0.3, 0.6)}
                >
                    Muhammad Khizar
                </motion.h1>
                <motion.h1 className='text-xl font-semibold'
                    {...getSlideInVariants('bottom', 0.3, 0.6)}
                >
                    and I'm a
                    <TypingText
                        className='text-[#1EE4E9] pl-2'
                        sequence={['Frontend developer']}
                        speed={3}
                        repeat={0}
                    />
                </motion.h1>
                <motion.p className='text-sm text-justify'
                    {...getSlideInVariants('right', 0.3, 0.6)}
                >
                    I’m a passionate Frontend Developer dedicated to crafting clean, responsive, and user-friendly web experiences. With a strong focus on modern design principles and performance optimization, I bring ideas to life through code. I thrive on turning complex problems into simple, elegant solutions that elevate user interaction and visual storytelling.
                </motion.p>
                <div className='flex gap-4 lg:self-start self-center my-4 lg:m-0'>
                    {socialLinks.map((item, index) => (
                        <motion.a className="text-[#1EE4E9] text-xl group flex flex-col gap-0.5"
                            href={item.link} target="_blank" rel="noopener noreferrer" key={index}
                            {...getSlideInVariants('right', 0.3 + index * 0.3, 0.6)}>
                            <i className={item.icon}></i>
                        </motion.a>
                    ))}
                </div>
                <Button link={'about'} text={'More about me'} customClass={'lg:mt-6 lg:self-start self-center'} />
            </div>

            {/* right */}
            <div className='flex items-center justify-center py-10 lg:py-0'>
                <Profilepic customClass={'sm:w-[300px] w-[250px] sm:h-[300px] h-[250px]'} />
            </div>
        </section>
    )
}

export default Hero