import React from 'react'

function Sectionlink({ product }) {

    return (
        <a href={product.path} className="group flex flex-col gap-0.5 text-white">
            {product.name}
            <div className="bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300" />
        </a>
    )
}

export default Sectionlink