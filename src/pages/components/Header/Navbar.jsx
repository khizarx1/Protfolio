import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext';
import { supabase } from '../../../config/supabaseClient';

import { motion } from "framer-motion";
import { getSlideInVariants } from '../../../utils/slideanimation'
import Sectionlink from '../common/Sectionlink';
import { toast } from 'react-toastify';

function Navbar() {
    const navLinks = [
        { name: 'Home', path: 'home' },
        { name: 'About', path: 'about' },
        { name: 'Services', path: 'services' },
        { name: 'Skills', path: 'skills' },
        { name: 'Projects', path: 'projects' },
        { name: 'Contact', path: 'contact' },
    ];

    const [isAdmin, setIsAdmin] = useState(false);

    const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;;

    useEffect(() => {
        const checkAdmin = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user && user.id === ADMIN_ID) {
                setIsAdmin(true);
            }
        };

        checkAdmin();
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isAuthenticated, dispatch } = useContext(AuthContext);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        dispatch({ type: 'LOGOUT' });
        toast.success('Logged out');
        setIsAdmin(false);
    }

    return (
        <nav className={`sticky top-0 bg-[#06112A] text-white flex items-center justify-between py-6 px-4 md:px-10 lg:px-24 xl:px-32 transition-all duration-500 z-50`}>
            {/* Logo */}
            <div className='text-2xl font-bold'>My Protfolio</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <motion.div
                        key={i}
                        {...getSlideInVariants('bottom', 0.3 + i * 0.1, 0.6)}

                    >
                        <Sectionlink product={link} />
                    </motion.div>
                ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4 font-semibold">
                {isAuthenticated
                    ? <button onClick={handleLogout} className={`bg-[#1EE4E9] px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-500`}>
                        Logout
                    </button>
                    : <Link to='/Authentication/Login' className={`bg-[#1EE4E9] px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-500`}>
                        Login
                    </Link>
                }
                {isAdmin &&
                    <Link to='/Dashboard' className="bg-[#1EE4E9] px-8 py-2.5 rounded-full transition-all duration-500">
                        Dashboard
                    </Link>
                }
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#06112A] text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <Sectionlink key={i} product={link} onClick={() => setIsMenuOpen(false)} />
                ))}
                {isAuthenticated
                    ? <button onClick={handleLogout} className="bg-[#1EE4E9] font-semibold px-8 py-2.5 rounded-full transition-all duration-500">
                        Logout
                    </button>
                    : <Link to='/Authentication/Login' className="bg-[#1EE4E9] font-semibold px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </Link>
                }
                {isAdmin &&
                    <Link to='/Dashboard' className="bg-[#1EE4E9] font-semibold px-8 py-2.5 rounded-full transition-all duration-500">
                        Dashboard
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Navbar