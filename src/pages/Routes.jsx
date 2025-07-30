import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Authentication from './Authentication'


function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Authentication' element={<Authentication />} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default Index