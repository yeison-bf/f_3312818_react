import React from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Products } from './components/pages/products';
import { Category } from './components/pages/category';

export const Landing = () => {
  // Datos de ejemplo para categorías
  

 
  return (
    <div className="font-['Arial',sans-serif] bg-gray-50 text-gray-800">
      {/* Header con menú */}
      <Navbar/>

      {/* Banner principal */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                🐾 Bienvenido a PetShop Canino
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Todo lo que tu <span className="text-amber-600">mejor amigo</span> necesita
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                Alimentos, juguetes, accesorios y más para consentir a tu perro. 
                Envíos a todo Chile y atención personalizada.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                  Ver productos →
                </button>
                <button className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-6 py-3 rounded-full transition-colors">
                  Ofertas del día
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="https://placehold.co/500x500/FDF6E3/8B6914?text=🐕+Perro+Feliz" 
                alt="Perro feliz"
                className="w-80 lg:w-96 rounded-full shadow-xl"
              />
            </div>
          </div>
          
          {/* Stats banner */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">+5,000</div>
              <div className="text-sm text-gray-600">clientes felices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">⭐ 4.9</div>
              <div className="text-sm text-gray-600">calificación</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">24/7</div>
              <div className="text-sm text-gray-600">atención</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de categorías */}
      <Category/>

      {/* Sección de productos */}
      <Products/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};