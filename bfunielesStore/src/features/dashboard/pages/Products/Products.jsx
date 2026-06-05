import React, { useState } from 'react'
import { Modals } from '../../../../sharet/utils/Modals'
import { ProductsForm } from './components/productsForm'

export const Products = () => {

    const [openModal, setOpenaModal] = useState(false)
    const [mode, setMode] = useState('create')
    const [searchTerm, setSearchTerm] = useState('')

    // Datos de ejemplo para la tabla
    const products = [
        { id: 1, nombre: 'Laptop Gaming', precio: '$1,299.99', categoria: 'Electrónica', stock: 15 },
        { id: 2, nombre: 'Mouse Inalámbrico', precio: '$29.99', categoria: 'Accesorios', stock: 50 },
        { id: 3, nombre: 'Teclado Mecánico', precio: '$89.99', categoria: 'Accesorios', stock: 30 },
        { id: 4, nombre: 'Monitor 24"', precio: '$199.99', categoria: 'Electrónica', stock: 10 },
        { id: 5, nombre: 'Audífonos Bluetooth', precio: '$49.99', categoria: 'Audio', stock: 25 },
    ]

    const filteredProducts = products.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const clickOpenModal = () => {
        setMode("create")
        setOpenaModal(true)
    }

    const clickCloseModal = () => {
        setOpenaModal(false)
    }

    const handleEdit = (product) => {
        setMode("edit")
        setOpenaModal(true)
    }




    
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Productos</h1>
                <p className="text-gray-600">Gestiona tus productos</p>
            </div>

            {/* Barra de búsqueda y botón nuevo */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full sm:w-96">
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <svg
                        className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                
                <button
                    onClick={clickOpenModal}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nuevo Producto
                </button>
            </div>

            {/* Tabla de productos */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Producto
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Categoría
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            #{product.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {product.nombre}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 font-semibold">
                                                {product.precio}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                                {product.categoria}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`text-sm ${product.stock < 10 ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                                                {product.stock} unidades
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="text-blue-600 hover:text-blue-900 mr-3 cursor-pointer"
                                            >
                                                <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button className="text-red-600 hover:text-red-900 cursor-pointer">
                                                <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                        No se encontraron productos
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {openModal &&
                <Modals
                    titulo={mode == 'create' ? 'Crear Producto' : mode == 'edit' ? 'Editar Producto' : 'Ver Producto'}
                    onCloseModal={clickCloseModal}
                >
                    <ProductsForm mode={mode} />
                </Modals>
            }
        </div>
    )
}