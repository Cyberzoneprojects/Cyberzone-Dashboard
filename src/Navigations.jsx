import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MyProfile from './pages/MyProfile'
import ResourcePage from './pages/ResourcesPage'
import AttestationPage from './pages/AttestationPage'
function Navigation (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/profile' exact element={<MyProfile/>}/>
                <Route path='/res' exact element={<ResourcePage/>}/>
                <Route path='/attest' exact element={<AttestationPage/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Navigation;