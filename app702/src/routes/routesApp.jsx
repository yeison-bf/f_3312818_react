import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../feature/auth/pages/Login'
import { Dashboard } from '../feature/dashboard/Dashboard'
import { Clients } from '../feature/dashboard/clients/Clients'
import { Users } from '../feature/dashboard/users/Users'
import { Home } from '../feature/dashboard/home/Home'
import { Register } from '../feature/auth/pages/Register'

export const RoutesApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/dashboard' element={<Dashboard/>} >
                    <Route path='home' element={<Home/>} />
                    <Route path='clients' element={<Clients/>} />
                    <Route path='users' element={<Users/>} />
                </Route>
            </Routes>
        </>
    )
}
