import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const [userName, setUserName] = useState("")
    const [passwordName, setPasswordName] = useState("")


    const navigate = useNavigate()

    const accesUser = (e) => {
        e.preventDefault()
        const dataUserLS = JSON.parse(localStorage.getItem('dataUsers')) || []
        console.log(dataUserLS)
        let bandera = true
        dataUserLS.forEach(element => {
            if (element.correo == userName && element.password == passwordName) {
                navigate('/dashboard/home')
                bandera=true
            }else{
                bandera= false
            }
        });

        console.log(bandera)
        if(bandera == false){
            alert("Credenciales incorectas")
        }
    }
    return (
        <div className='formLogin'>
            <div className='containerTotal'>
                <form onSubmit={accesUser}>
                    <div className='formControl'>
                        <label htmlFor="">Usuario</label>
                        <input onChange={(e) => setUserName(e.target.value)} type="text" />
                    </div>

                    <div className='formControl'>
                        <label htmlFor="">Contraseña</label>
                        <input onChange={(e) => setPasswordName(e.target.value)} type="text" />
                    </div>

                    <div className='formControl'>
                        <input type="submit" value="ACCEDER" />
                    </div>
                </form>
                <p>Registrate <a onClick={()=>navigate('/register')}>Aqui</a></p>
            </div>

        </div>
    )
}
