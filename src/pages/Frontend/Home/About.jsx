import React from 'react'
import Profilepic from '../../components/common/profilepic'
import Button from '../../components/common/Button'
import Sectionname from '../../components/common/Sectionname'

function About() {
    return (
        <section id='about' className='grid grid-cols-1 lg:grid-cols-2 lg:py-20 py-10'>
            {/* left */}
            <div className='hidden lg:flex lg:items-center lg:justify-center'>
                <Profilepic customClass={'w-[220px] h-[220px]'} />
            </div>
            {/* right */}
            <div className='px-4 lg:px-10 space-y-2 lg:space-y-4 text-center lg:text-start'>
                <Sectionname first={'About'} second={'Me'} />
                <p className='text-xl font-semibold'>Full Stack Developer!</p>
                <p className='text-justify text-lg'>I’m a passionate and creative Frontend Developer with over 2 years of experience in industry building responsive, user-friendly web interfaces. I’m well-versed in JavaScript, and I’ve worked extensively with modern frameworks and tools like React.js, Firebase, Supabase, Tailwind, Bootstrap and many to bring elegant and performant solutions to life. I love transforming complex problems into clean, intuitive designs that elevate user experience.</p>
                <div className='mt-4 lg:mt-0'><Button link={'services'} text={'More About Me'} /></div>
            </div>
        </section>
    )
}

export default About