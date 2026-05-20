import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {

    // Importamos el hooks => useNavigate()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUserName] = useState("")
    const [passwordName, setPasswordName] = useState("")

    function accessLogin(e) {
        e.preventDefault()

        const dataStorage = JSON.parse(localStorage.getItem('dataUsers')) || []
        console.log(dataStorage)
       
        let bandera = false
        dataStorage.forEach(element => {
             if(element.usuario === username && element.password === passwordName){
                bandera = true
             }
        });

        if (bandera){
            navigate('/dashboard')
        }else{
            alert("Credenciales incorrectas")
        }
    }

    const registerForm = () => {
        navigate('/register')
    }

    const passwordShow = (e) => {
        setShowPassword(!showPassword)
    }
    return (
        <div className='containerLogin'>
            <div className='imagen'>

            </div>
            <div className='form'>
                <h1>SARA</h1>
                <p>Sistema Automatizado de Registro de Aprendices</p>
                <form onSubmit={accessLogin} className='mt-5'>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input onChange={(e)=>setPasswordName(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" />
                        <button type='button' onClick={passwordShow} className='btn btn-light'>{showPassword ? (<FaEye />) : (<FaEyeSlash />)}</button>
                    </div>

                    <div className="mb-3">
                        <button type='submit' className='btn btn-primary col-12'>ACCEDER</button>
                    </div>
                    
                </form>
                <p>No tienes una cuenta <a className='mouseClick' onClick={registerForm} >Registrate aquí</a></p>
            </div>
        </div>
    )
}
