import React from 'react'
import AnimatedCircularProgress from '../../../utils/animatedcircularprogress'
import SkillBar from '../../../utils/skillbar'
import Sectionname from '../../components/common/Sectionname'

function Skills() {

    const skils = [
        {
            skillBar: [
                { label: "HTML", value: 90, icon: 'text-[#743828] fa-brands fa-html5' },
                { label: "CSS", value: 80, icon: 'text-[#00436B] fa-brands fa-css' },
                { label: "Javascript", value: 80, icon: 'text-[#A3B627] fa-brands fa-java' },
                { label: "React js", value: 70, icon: 'text-[#264C50] fa-brands fa-react' },
                { label: "Next js", value: 70, icon: 'text-[#264C50] fa-brands fa-react' },
                { label: "Firebase", value: 70, icon: 'text-orange-600 fa-solid fa-database' },
                { label: "Supabase", value: 65, icon: 'text-purple-600 fa-solid fa-database' },
            ]
        },
        {
            circleBar: [
                { label: "Creativity", value: 80 },
                { label: "Communication", value: 65 },
                { label: "Problem Solving", value: 70 },
                { label: "Team Work", value: 60 },
            ]
        }
    ]

    return (
        <section id='skills' className='pb-10 lg:pb-20'>
            <Sectionname first={'My'} second={'Skills'} customClass={'text-center'} />
            <div className='1g:pt-20 pt-8  grid grid-cols-1 lg:grid-cols-2'>
                {/* Left */}
                <div>
                    <h1 className='w-fit mb-4 lg:my-8 mx-auto text-xl font-bold border-b-4 border-white text-white'>Technical Skills</h1>
                    <div className='md:px-20 px-10'>
                        {skils[0].skillBar.map((item, index) => (
                            <SkillBar key={index} product={item} />
                        ))}
                    </div>
                </div>

                {/* Right */}
                <div>
                    <h1 className='w-fit my-4 lg:my-8 mx-auto text-xl font-bold border-b-4 border-white text-white'>Professional Skills</h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 place-items-center lg:mt-0 mt-10'>
                        {skils[1].circleBar.map((item, index) => (
                            <AnimatedCircularProgress key={index} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills