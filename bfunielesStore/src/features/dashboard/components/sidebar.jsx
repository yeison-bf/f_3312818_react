import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Menú de navegación
    const menuItems = [
        { id: 1, name: 'Dashboard', icon: '📊', path: '/dashboard' },
        { id: 2, name: 'Productos', icon: '🛒', path: 'products' },
        { id: 3, name: 'Categorías', icon: '📁', path: 'categories' },
        { id: 4, name: 'Órdenes', icon: '📦', path: 'orders' },
        { id: 5, name: 'Usuarios', icon: '👥', path: 'users' },
        { id: 6, name: 'Ventas', icon: '💰', path: 'sales' },
        { id: 7, name: 'Reportes', icon: '📈', path: 'reports' },
        { id: 8, name: 'Configuración', icon: '⚙️', path: 'settings' },
    ];

    return (
        <aside className={`
        fixed lg:relative z-30 w-72 bg-blue-900 text-white h-full transition-all duration-300 transform
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block shadow-2xl
      `}>
            {/* Logo y título */}
            <div className="flex flex-col items-center justify-center py-8 border-b border-blue-800">
                <div className="bg-blue-800 p-3 rounded-full mb-3">
                    <span className="text-3xl">🐕</span>
                </div>
                <h1 className="text-xl font-bold">PetShop Admin</h1>
                <p className="text-xs text-blue-300 mt-1">Panel de Control</p>
            </div>

            {/* Menú de navegación */}
            <nav className="flex-1 py-6 overflow-y-auto">
                <ul className="space-y-1 px-3">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-800 hover:text-white transition-all duration-200 group"
                            >
                                <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer del sidebar */}
            <div className="border-t border-blue-800 p-4">
                <div className="bg-blue-800 rounded-lg p-3">
                    <p className="text-xs text-blue-300">Versión 2.0.0</p>
                    <p className="text-xs text-blue-300">© 2026 PetShop Canino</p>
                </div>
            </div>
        </aside>
    )
}
