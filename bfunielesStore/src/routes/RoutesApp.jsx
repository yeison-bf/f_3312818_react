import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../features/Landing/Landing'
import { Login } from '../features/auth/pages/Login'
import { Register } from '../features/auth/pages/register'
import { Layout } from '../features/dashboard/Layout'
import { Home } from '../features/dashboard/pages/home/Home'
import { Products } from '../features/dashboard/pages/Products/Products'
import Categories from '../features/dashboard/pages/categories/categories'

export const RoutesApp = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        


        {/* Rutas del Dashboard Administrtivo */}
        <Route path='/dashboard' element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='categories' element={<Categories/>}/>
        </Route>
    </Routes>
  )
}
