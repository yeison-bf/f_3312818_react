import React, { useEffect, useState } from 'react'
import { FormUsers } from './components/formUsers'

export const Users = () => {

  useEffect(() => {
    fetchDataUsers()
  }, [])
  

  const [dataUsers, setDataUsers] = useState([])

  const fetchDataUsers = ()=>{
    const dataUsers = JSON.parse(localStorage.getItem('dataUsers')) || []
    setDataUsers(dataUsers || [])

  }
  return (
    <div className='contenedorUser'>
      <div className='formUser'>
        <FormUsers/>
      </div>
      <div className='tableUser'>
        <table border={1}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((element, index)=>(
            <tr>
              <td>{element.documento}</td>
              <td>{element.nombre}</td>
              <td>{element.correo}</td>
              <td>11</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
