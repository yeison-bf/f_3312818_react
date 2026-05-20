import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../feature/Auth/pages/Login'
import { Layout } from '../feature/Dashboard/Layout'
import { Home } from '../feature/Dashboard/Home/Home'
import { Users } from '../feature/Dashboard/Users/Users'
import { Error404 } from '../feature/error404'
import { FormUsers } from '../feature/Dashboard/Users/components/formUsers'
import { Productos } from '../feature/Dashboard/products/Productos'

export const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<FormUsers />} />
            <Route path='/dashboard' element={<Layout />}>
                <Route path='home' element={<Home/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='products' element={<Productos/>}/>
            </Route>
            <Route path='*' element={<Error404/>} />
        </Routes>
    )
}
