import React, { useState } from 'react'

export const Productos = () => {

    const [nombre, setNombre] = useState("")
    const [stock, setstock] = useState(0)
    const [precioCompra, setprecioCompra] = useState(0)
    const [iva, setiva] = useState(0)
    const [precioVenta, setprecioVenta] = useState(0)


    const calculoPrecioVenta = () => {
        let precioIva = Number(precioCompra) * Number(iva) / 100
        setprecioVenta(precioIva + Number(precioCompra))
    }
    return (
        <div>
            <div>
                <h2>REGISTRO DE PRODUCTOS</h2>
                <form >
                    <label htmlFor="">Nombre</label>
                    <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" />
                    <br />

                    <label htmlFor="">Stock</label>
                    <input value={stock} onChange={(e)=>setstock(e.target.value)} type="number" />
                    <br />

                    <label htmlFor="">Precio Compra</label>
                    <input value={precioCompra} onChange={(e)=>setprecioCompra(e.target.value)} type="number" />
                    <br />

                    <label htmlFor="">Iva</label>
                    <input value={iva} onChange={(e)=>setiva(e.target.value)} onBlur={calculoPrecioVenta} type="number" />
                    <br />

                    <label htmlFor="">Precio Venta</label>
                    <input value={precioVenta} readOnly onChange={(e)=>setprecioVenta(e.target.value)} type="number" />
                    <br />

                    <input type="submit" value="GUARDAR" />
                    <br />
                </form>
            </div>
        </div>
    )
}
