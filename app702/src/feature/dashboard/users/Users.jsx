import React, { useEffect, useState } from 'react'

export const Users = () => {

  // Constante global para almacenar la lista
  const [userList, setUserList] = useState([])

  useEffect(() => {
    dataList()
  }, [])

  // Funcion para obtener los datos del localStorage
  const dataList = () => {
    const users = JSON.parse(localStorage.getItem('dataUsers')) || []
    console.log(users)
    setUserList(users)
  }

  return (
    <div>
      <table className='table table-bordered w-100'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Tipo</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((element, index)=>(
            <tr>
            <td>{index + 1}</td>
            <td>{element.tipoDocumento}</td>
            <td>{element.documento}</td>
            <td>{element.nombre}</td>
            <td>{element.apellidos}</td>
            <td>{element.usuario}</td>
            <td>1</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}
