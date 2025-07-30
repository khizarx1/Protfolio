import React from 'react'

function Sectionname({ first, second, customClass }) {
    return (
        <h1 className={`text-4xl font-bold text-white ${customClass}`}>
            {first}
            <span className='pl-3 text-[#1EE4E9]'>{second}</span>
        </h1>
    )
}

export default Sectionname