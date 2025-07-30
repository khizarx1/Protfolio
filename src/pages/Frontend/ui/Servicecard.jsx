import React from 'react'

function Servicecard({ product }) {
    return (
        <div
            style={{ boxShadow: '0 0 7px 10px #062B70' }}
            className='p-3 lg:p-6 rounded-lg flex flex-col gap-2 lg:gap-4 hover:scale-105 transition-all duration-300'>
            <i className={`text-[#1EE4E9] text-xl ${product.icon}`}></i>
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text-sm'>{product.text}</p>
        </div>
    )
}

export default Servicecard