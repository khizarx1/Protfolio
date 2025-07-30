import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

function index() {
    return (
        <>
            <Header />
            <main className='bg-[#081C29] text-white'>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default index