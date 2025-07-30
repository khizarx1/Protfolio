import React, { useState } from 'react'
import { supabase } from '../../../config/supabaseClient'

import Sectionname from '../../components/common/Sectionname'
import { toast } from 'react-toastify'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

function Contact() {

    const links = [
        { icon: 'fa-brands rounded-full fa-facebook', link: '' },
        { icon: 'fa-brands rounded-full fa-whatsapp', link: '' },
        { icon: 'fa-brands rounded-full fa-instagram', link: '' },
        { icon: 'fa-brands rounded-full fa-linkedin-in', link: '' },
    ]

    const whiteSpinner = (
        <LoadingOutlined
            style={{
                fontSize: 20,
                color: 'white',
            }}
            spin
        />
    );

    // State to manage form data
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        setIsProcessing(true);
        try {
            const { error } = await supabase
                .from('contacts')
                .insert([state])
            if (error) {
                console.error('Error inserting data:', error);
                toast.error('Failed to send message. Please try again later.');
            } else {
                toast.success('Message sent successfully!');
                setState(initialState); // Reset form
            }
        } catch (error) {
            console.error('Error inserting data:', error);
            toast.error('An error occurred while sending your message.');
        } finally {
            setIsProcessing(false); // Reset processing state
        }




    }
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    return (
        <section id='projects' className='lg:pb-20 pb-10 px-10 md:px-15 gap-4 grid grid-cols-1 lg:grid-cols-2'>
            {/* left */}
            <div className='space-y-4 text-center lg:text-start text-white'>
                <Sectionname first={'Contact'} second={'Me'} customClass={'text-xl text-center'} />
                <p className='font-semibold'>Let's Work Together</p>
                <p className='text-sm'>I'm always open to discussing new opportunities, collaborations, or just having a chat. Whether you have a question or just want to say hi, feel free to drop me a message—I’ll try to get back to you as soon as possible!</p>
                <div className='text-white text-sm space-y-2'>
                    <p>
                        <i className='fa-solid fa-envelope pr-2 text-base text-[#1EE4E9]'></i>
                        mirzakhizar@gmail.com</p>
                    <p>
                        <i className='fa-solid fa-phone pr-2 text-base text-[#1EE4E9]'></i>
                        03140616029</p>
                </div>
                <div className='space-x-4'>
                    {links.map((item, index) => (
                        <a className="text-[#1EE4E9] text-sm px-1.5 py-1 rounded-full border-2 border-[#1EE4E9] hover:bg-[#1EE4E9] hover:text-white transition duration-300"
                            href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                            <i className={item.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
            {/* right */}
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-2 text-sm'>
                <input onChange={handleChange} name='name' className='bg-[#545456] p-2 rounded-lg' type="text" placeholder='Enter Your Name' />
                <input onChange={handleChange} name='email' className='bg-[#545456] p-2 rounded-lg' type="email" placeholder='Enter Your Email' />
                <input onChange={handleChange} name='subject' className='bg-[#545456] p-2 rounded-lg' type="text" placeholder='Enter Your Subject' />
                <textarea onChange={handleChange} name="message" className='bg-[#545456] p-2 rounded-lg' rows={5} placeholder='Enter Your Massege'></textarea>
                <button style={{ boxShadow: '0 0 20px #1EE4E9' }} className='py-1 text-sm text-[#081C29] font-semibold bg-[#1EE4E9] rounded-lg cursor-pointer'>{isProcessing ? <Spin /> : 'Submit'}</button>
            </form>
        </section>

    )
}

export default Contact