import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../../config/supabaseClient';

import { Spin } from 'antd';
import { whiteSpinner } from '../../../utils/whitespinner';
import { toast } from 'react-toastify'

const initialState = {
    email: '',
    password: ''
}
function Login() {

    const inputs = [
        { type: 'email', label: 'Email', placeholder: 'Enter your email', name: 'email' },
        { type: 'password', label: 'Password', placeholder: 'Enter your password', name: 'password' }
    ];

    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const [isProccessing, setIsProccessing] = useState(false);

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const validateForm = () => {
        const { email, password } = state;
        if (!email || !password) {
            toast.error('Please fill all fields');
            return false;
        }
        // Email format check
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return false;
        }
        return true;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsProccessing(true);

        try {
            const { error, data } = await supabase.auth.signInWithPassword({
                email: state.email,
                password: state.password
            });
            if (error) {
                console.error('Signin Failed', error);
                toast.error('Login Failed.Check your credentials and try again!');
            } else {
                toast.success('Signed in Successfully.');
                setState(initialState);
                navigate('/')
            }
        } catch (error) {
            console.error('Error in in signing in', error);
            toast.error('Login Failed.Check your credentials and try again!')
        } finally {
            setIsProccessing(false);
        }
    }

    return (
        <div className='h-screen flex items-center justify-center bg-[#06112A]'>
            <div className='lg:w-[50vw] w-[95vw] p-4 lg:p-8 rounded-lg shadow-xl bg-[#081C29] text-white'>
                <h1 className="pb-2 md:pb-4 text-3xl text-center font-bold">Login Form</h1>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 lg:text-sm text-xs'>
                    {inputs.map((input, index) => (
                        <div key={index} className='flex flex-col'>
                            <label className='mb-1'>{input.label}</label>
                            <input
                                className="w-full p-2 rounded-lg border border-[#545456] outline-none focus:border-[#1EE4E9]"
                                type={input.type}
                                placeholder={input.placeholder}
                                name={input.name}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button className="py-2 px-8 rounded-lg bg-[#1EE4E9] hover:bg-[#1ee6e9d7] font-semibold text-white cursor-pointer">
                        {!isProccessing
                            ? 'Login'
                            : <Spin indicator={whiteSpinner} />
                        }
                    </button>
                    <div className='flex gap-5'>
                        <p>Need an Account?</p>
                        <Link to='/authentication/Register' className='underline hover:text-[#1EE4E9]'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login