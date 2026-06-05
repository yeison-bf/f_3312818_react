import React from 'react'

export const ProductsForm = ({ mode = 'create' }) => {

  console.log(mode)
  const saveProducts = () => {

  }


  return (
    <div className="max-w-md mx-auto m-3 p-6 bg-white rounded-lg">
      <form onSubmit={saveProducts}>
        {/* Nombre del producto */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
            Nombre del producto
          </label>
          <input
            disabled={mode == 'views'}
            type="text"
            id="nombre"
            name="nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ej: Laptop Gaming"
          />
        </div>

        {/* Precio */}
        <div className="mb-4">
          <label htmlFor="precio" className="block text-gray-700 font-medium mb-2">
            Precio
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.00"
          />
        </div>

        {/* Descripción */}
        <div className="mb-6">
          <label htmlFor="descripcion" className="block text-gray-700 font-medium mb-2">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Descripción del producto..."
          />
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Crear Producto
          </button>

        </div>
      </form>
    </div>
  )
}