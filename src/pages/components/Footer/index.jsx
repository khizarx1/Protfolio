import React from 'react'
import Sectionlink from '../common/Sectionlink';

function index() {


    const links = [
        {
            social: [
                { link: '', icon: 'fa-brands fa-facebook' },
                { link: '', icon: 'fa-brands fa-whatsapp' },
                { link: '', icon: 'fa-brands fa-instagram' },
                { link: '', icon: 'fa-brands fa-linkedin' },
                { link: '', icon: 'fa-brands fa-github' },
            ]
        },
        {
            pageLinks: [
                { name: 'Home', path: 'home' },
                { name: 'About', path: 'about' },
                { name: 'Services', path: 'services' },
                { name: 'Skills', path: 'skills' },
                { name: 'Projects', path: 'projects' },
                { name: 'Contact', path: 'contact' },
            ]
        }
    ];
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full bg-[#06112A] text-white">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <h1 className="text-2xl font-bold">Muhammad Khizar</h1>
                    <p className="mt-6 text-sm">
                        I’m a Frontend Developer passionate about building modern, responsive web apps that offer seamless user experiences. I believe in clean code, bold design, and creative problem-solving.
                    </p>
                    <div className='flex items-center gap-5 mt-4'>
                        {links[0].social.map((item, index) => (
                            <a className="text-white text-xl group flex flex-col gap-0.5"
                                href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <ul className="text-sm space-y-2">
                        <h2 className="font-semibold mb-5">Company</h2>
                        {links[1].pageLinks.map((link, index) => (
                            <li key={index}>
                                <Sectionlink product={link} />
                            </li>
                        ))}
                    </ul>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <p className='text-xs sm:text-sm md:text-base'>+923140616029</p>
                        <p className='text-xs sm:text-sm md:text-base'>mirzakhizar995@gamil.com</p>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © All Right Reserved.
            </p>
        </footer>
    )
}

export default index