import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    // Importamos el hooks => useNavigate()
    const navigate = useNavigate()

    // Estructura para capturar los datos
    const [formData, setFormData] = useState({
        "tipoDocumento": "",
        "documento": "",
        "nombre": "",
        "apellidos": "",
        "usuario": "",
        "password": ""
    })

    const [nombre, setnombre] = useState()
    
    function accessLogin(e) {
        e.preventDefault()
        const dataStorage = JSON.parse(localStorage.getItem('dataUsers')) || []
        dataStorage.push(formData)
        localStorage.setItem('dataUsers', JSON.stringify(dataStorage))
    }

    const formLogin = () => {
        navigate('/')
    }

    // Función para capturar los datos
    const changeForm = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
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
                        <label className="form-label">Documento</label>
                        <select
                            name="tipoDocumento"
                            value={formData.tipoDocumento}
                            type="text"
                            className="form-control"
                            onChange={changeForm}
                        >
                            <option selected>Selecione</option>
                            <option value="CC">CC</option>
                            <option value="TI">TI</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Documento</label>
                        <input
                            value={formData.documento}
                            name="documento"
                            type="number"
                            className="form-control"
                            onChange={changeForm}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            value={formData.nombre}
                            name="nombre"
                            type="text"
                            className="form-control"
                            onChange={changeForm}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellidos</label>
                        <input
                            value={formData.apellidos}
                            name="apellidos"
                            type="text"
                            className="form-control"
                            onChange={changeForm}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input
                            value={formData.usuario}
                            name="usuario"
                            type="text"
                            className="form-control"
                            onChange={changeForm}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                            value={formData.password}
                            name="password"
                            type="text"
                            className="form-control"
                            onChange={changeForm}
                        />
                    </div>

                    <div className="mb-3">
                        <button className='btn btn-primary col-12'>ACCEDER</button>
                    </div>
                </form>
                <p><a className='mouseClick' onClick={formLogin} >Ir al login </a></p>

            </div>
        </div>
    )
}
