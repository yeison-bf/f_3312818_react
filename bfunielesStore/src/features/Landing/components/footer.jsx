import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-3xl">🐕</span>
                            <span className="text-xl font-bold text-white">PetShop Canino</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Tienda especializada en productos para perros. Calidad y amor para tu mejor amigo.
                        </p>
                        <div className="flex gap-3">
                            {['📘', '📷', '🐦', '💬'].map((social, idx) => (
                                <a key={idx} href="#" className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Tienda</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Productos</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Ofertas</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Nuevos ingresos</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Más vendidos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Ayuda</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Centro de ayuda</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Envíos y entregas</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Cambios y devoluciones</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors">Preguntas frecuentes</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm">
                            <li>📞 +56 2 1234 5678</li>
                            <li>✉️ hola@petshop.cl</li>
                            <li>📍 Providencia, Santiago</li>
                        </ul>
                        <div className="flex gap-2 mt-4 text-2xl">
                            <span>💳</span> <span>🏦</span> <span>📱</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; 2024 PetShop Canino - Todos los derechos reservados</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-amber-400 transition-colors">Términos y condiciones</a>
                        <a href="#" className="hover:text-amber-400 transition-colors">Política de privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
