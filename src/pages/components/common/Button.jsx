import React from 'react'
import { Link } from 'react-scroll'

function Button({ text, link, customClass }) {
    return (
        <Link
            to={link}
            smooth={true}
            duration={500}
            style={{ boxShadow: '0 0 20px #1EE4E9' }}
            className={`px-4 py-1 text-sm text-[#081C29] font-semibold bg-[#1EE4E9] rounded-full cursor-pointer ${customClass}`}>
            {text}
        </Link>
    )
}

export default Button