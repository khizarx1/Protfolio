import React from 'react'

function Projectcard({ customClass, project }) {
    return (
        <div className={`group relative rounded-lg overflow-hidden shadow-lg ${customClass}`}>
            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.img})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 text-white w-full h-full bg-gradient-to-t from-[#1EE4E9]/80 to-transparent flex flex-col justify-end p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-600">
                <h3 className=" text-lg font-bold">{project.title}</h3>
                <p className="text-sm">{project.info}</p>
            </div>
        </div>

    )
}

export default Projectcard