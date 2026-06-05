import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    const handdleLogin = () =>{
        navigate('/login')
    }
    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">🐕</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">PetShop</span>
                        <span className="bg-amber-100 px-2 py-1 rounded-full text-xs font-bold text-amber-700">Canino</span>
                    </div>

                    {/* Menú desktop */}
                    <nav className="hidden md:flex gap-8">
                        {['Inicio', 'Productos', 'Ofertas', 'Contacto'].map((item) => (
                            <a key={item} href="#" className="font-medium hover:text-amber-600 transition-colors">
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Acciones header */}
                    <div className="flex gap-3 items-center">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-xl">🔍</button>
                        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors text-xl">
                            🛒
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
                        </button>
                        <button onClick={handdleLogin} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-xl">Login | Registrate</button>
                    </div>

                    {/* Botón móvil */}
                    <button className="md:hidden text-2xl">☰</button>
                </div>
            </div>
        </header>
    )
}
