import React from 'react'
import Sectionname from '../../components/common/Sectionname'
import Projectcard from '../ui/Projectcard'

function Projects() {

const projects = [
    {title: 'Portfolio Website', img:'src/assets/images/1.jpg' , info: 'A personal portfolio website showcasing my skills and projects.'},
    {title: 'E-commerce Platform', img: 'src/assets/images/2.jpg', info: 'A fully functional e-commerce platform with user authentication and product management.'},
    {title: 'Blog Application', img: 'src/assets/images/3.jpg', info: 'A blog application with features like post creation, editing, and commenting.'},
    {title: 'Weather App', img: 'src/assets/images/4.jpg', info: 'A weather application that fetches real-time weather data from an API.'},
]

    return (
        <section id='projects' className='lg:pb-20 pb-10 px-10 md:px-15 xl:px-30'>
            <Sectionname first={'Latest'} second={'Projects'} customClass={'text-center'} />
            <div className='lg:pt-20 pt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6'>
                {projects.map((item, index) => (
                    <Projectcard key={index} project={item} customClass={'lg:h-[200px] md:h-[170px] h-[150px]'} />
                ))}
            </div>
        </section>
    )
}

export default Projects