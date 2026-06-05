import React, { useState } from 'react'
import { Modals } from '../../../../sharet/utils/Modals'

export const Home = () => {


  const [user, setUser] = useState({ "name": "Juan" })

  return (
    <>
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">

        <div className="space-y-6">
          {/* Tarjetas de estadísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Ventas Hoy</p>
                  <p className="text-2xl font-bold text-gray-800">$1,234,567</p>
                </div>
                <span className="text-3xl">💰</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Pedidos</p>
                  <p className="text-2xl font-bold text-gray-800">156</p>
                </div>
                <span className="text-3xl">📦</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Usuarios</p>
                  <p className="text-2xl font-bold text-gray-800">3,421</p>
                </div>
                <span className="text-3xl">👥</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Productos</p>
                  <p className="text-2xl font-bold text-gray-800">245</p>
                </div>
                <span className="text-3xl">🛒</span>
              </div>
            </div>
          </div>

          {/* Tabla de ejemplo */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Últimas Órdenes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">#12345</td>
                    <td className="px-6 py-4 text-sm text-gray-800">María González</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$125,990</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Completado</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-600">#12346</td>
                    <td className="px-6 py-4 text-sm text-gray-800">Juan Pérez</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$89,990</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">Pendiente</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>


    </>
  )
}
