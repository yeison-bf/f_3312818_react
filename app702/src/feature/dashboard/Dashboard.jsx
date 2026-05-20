import React from 'react'
import { Sidebar } from '../components/sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='contenedorHome'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='contenido'>
            <Outlet/>
        </div>
    </div>
  )
}
