import React from 'react'
import { Link } from 'react-scroll'

function Sectionlink({ product, onClick }) {

    return (
        <Link to={product.path}  smooth={true} duration={500} onClick={onClick} className="group flex flex-col gap-0.5 cursor-pointer text-white">
            {product.name}
            <div className="bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300" />
        </Link>
    )
}

export default Sectionlink