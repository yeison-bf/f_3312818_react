import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='dashboardHome'>
      <div className='sidebar'></div>
      <div className='contenedor'>
        <Outlet/>
      </div>
    </div>
  )
}
