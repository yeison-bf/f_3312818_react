import React, { useState } from 'react'

export const Nabvar = () => {
        const [sidebarOpen, setSidebarOpen] = useState(false);
     const user = {
    name: 'Carlos Rodríguez',
    email: 'carlos@petadmin.com',
    role: 'Administrador',
    avatar: 'https://ui-avatars.com/api/?background=1e3a8a&color=fff&name=Carlos+Rodríguez'
  };

   const handleLogout = () => {
    console.log('Cerrando sesión...');
    // Aquí iría la lógica de logout
  };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Botón menú móvil */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <span className="text-2xl">☰</span>
                    </button>

                    {/* Título de página (dinámico) */}
                    <div className="hidden sm:block">
                        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
                    </div>

                    {/* Acciones del navbar */}
                    <div className="flex items-center gap-4 ml-auto">
                        {/* Notificaciones */}
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <span className="text-xl">🔔</span>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Dropdown de usuario */}
                        <div className="relative group">
                            <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                                />
                                <div className="hidden md:block text-left">
                                    <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.role}</p>
                                </div>
                                <span className="text-gray-400 text-sm hidden md:inline">▼</span>
                            </button>

                            {/* Menú desplegable */}
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                                <div className="p-4 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-12 h-12 rounded-full border-2 border-blue-600"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800">{user.name}</p>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <a
                                        href="/profile"
                                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-xl">👤</span>
                                        <span>Ver Perfil</span>
                                    </a>
                                    <a
                                        href="/settings"
                                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-xl">⚙️</span>
                                        <span>Configuración</span>
                                    </a>
                                    <hr className="my-2" />
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        <span className="text-xl">🚪</span>
                                        <span>Cerrar Sesión</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
