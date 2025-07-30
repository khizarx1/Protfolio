import React from 'react'

import { motion } from "framer-motion";
import { getSlideInVariants } from '../../../utils/slideanimation'
import { Link } from 'react-scroll';

function Navbar() {
    const navLinks = [
        { name: 'Home', path: 'home' },
        { name: 'About', path: 'about' },
        { name: 'Services', path: 'services' },
        { name: 'Skills', path: 'skills' },
        { name: 'Projects', path: 'projects' },
        { name: 'Contact', path: 'contact' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <nav className={`sticky top-0 bg-[#06112A] flex items-center justify-between px-4 md:px-10 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <div className='text-2xl text-white font-bold'>My Protfolio</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={i}
                        {...getSlideInVariants('bottom', 0.3 + i * 0.1, 0.6)}
                        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
                    >
                        <Link to={link.path} smooth={true} duration={500} className="cursor-pointer">
                            {link.name}
                        </Link>
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </motion.div>
                ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <button className={`px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden text-white">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#06112A] text-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <motion.div
                        key={i}
                        {...getSlideInVariants('bottom', 0.3 + i * 0.1, 0.6)}
                        className={`group flex flex-col gap-0.5`}
                    >
                        <Link to={link.path} smooth={true} duration={500} className='cursor-pointer' onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </motion.div>
                ))}
                <button className="bg-white text-[#06112A] px-8 py-2.5 rounded-full transition-all duration-500">
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar