import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Sidebar = () => {

  const navigate = useNavigate()
  const logout = () =>{
    navigate('/')
  }
  return (
    
      <nav>
        <ul>
          <li><Link to='/dashboard/home'>Inicio</Link></li>
          <li><Link to='/dashboard/clients'>Clientes</Link></li>
          <li><Link to='/dashboard/users'>Usuarios</Link></li>
          <li><a onClick={logout}>Salir</a></li>
        </ul>
      </nav>
  )
}
