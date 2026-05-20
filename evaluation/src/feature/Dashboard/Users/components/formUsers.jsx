import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const FormUsers = () => {

  const navigate = useNavigate()

  const [documento, setdocumento] = useState("")
  const [nombre, setnombre] = useState("")
  const [correo, setcorreo] = useState("")
  const [password, setpassword] = useState("")

  const registerUser = (e) =>{
    e.preventDefault()

    const dataUsers = JSON.parse(localStorage.getItem('dataUsers')) || []

    dataUsers.push({
      documento, 
      nombre, 
      correo, 
      password
    })

    localStorage.setItem('dataUsers', JSON.stringify(dataUsers))
    alert("Registro exitoso")
    navigate('/')
  }
  return (
    <div className='formLogin'>
      <div className='containerTotal'>
        <form onSubmit={registerUser}>

          <div className='formControl'>
            <label htmlFor="">Documento</label>
            <input onChange={(e) => setdocumento(e.target.value)} type="text" />
          </div>

          <div className='formControl'>
            <label htmlFor="">Nombre Completo</label>
            <input onChange={(e) => setnombre(e.target.value)} type="text" />
          </div>

          <div className='formControl'>
            <label htmlFor="">Usuario</label>
            <input onChange={(e) => setcorreo(e.target.value)} type="text" />
          </div>

          <div className='formControl'>
            <label htmlFor="">Contraseña</label>
            <input onChange={(e) => setpassword(e.target.value)} type="text" />
          </div>

          <div className='formControl'>
            <input type="submit" value="ACCEDER" />
          </div>
        </form>
        <p>Registrate <a onClick={() => navigate('/register')}>Aqui</a></p>
      </div>

    </div>
  )
}
