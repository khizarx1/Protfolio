import React from 'react'
import Sectionname from '../../components/common/Sectionname'
import ServiceCard from '../ui/Servicecard'

function Services() {

const services = [
    {name: 'Web Development', text: 'Building responsive and user-friendly websites using modern technologies.', icon: 'fa-solid fa-code'},
    {name: 'UI/UX Design Integration', text: 'Creating intuitive and engaging user interfaces that enhance user experience.', icon: 'fa-solid fa-paintbrush'},
    {name: 'E-commerce Solutions', text: 'Developing robust e-commerce platforms with secure payment gateways and user-friendly interfaces.', icon: 'fa-solid fa-shopping-cart'},
    {name: 'Database Integration', text: 'Seamlessly integrating secure, scalable databases like Firebase and Supabase to store, manage, and sync your application data in real time..', icon: 'fa-solid fa-database'},
    {name: 'Maintenance & Support', text: 'I provide ongoing website care including regular updates, performance optimization, bug fixing, and technical support to keep everything running flawlessly.', icon: 'fa-solid fa-wrench'},
]

  return (
    <section id='services' className='lg:pb-20 px-10 md:px-15 xl:px-30 pb-10'>
        <Sectionname first={'My'} second={'Services'} customClass={'text-center'} />
        {/* cards */}
        <div className='pt-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6'>
            {services.map((item, index) => (
                <ServiceCard key={index} product={item} />
            ))}
        </div>
    </section>
  )
}

export default Services