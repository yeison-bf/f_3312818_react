import React from 'react'

export const Products = () => {

     // Datos de ejemplo para productos
      const products = [
        { id: 1, name: 'Croquetas Premium', price: '$25.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=🍖+Alimento', category: 'Alimentos', badge: 'Oferta' },
        { id: 2, name: 'Pelota Squeaker', price: '$8.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=🎾+Juguete', category: 'Juguetes', badge: 'Nuevo' },
        { id: 3, name: 'Cama Ortopédica', price: '$49.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=🛏️+Cama', category: 'Accesorios', badge: null },
        { id: 4, name: 'Shampoo Hipoalergénico', price: '$12.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=🧴+Shampoo', category: 'Higiene', badge: '-20%' },
        { id: 5, name: 'Chaqueta Impermeable', price: '$32.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=🧥+Chaqueta', category: 'Ropa', badge: null },
        { id: 6, name: 'Vitaminas + Omega 3', price: '$18.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=💊+Vitaminas', category: 'Salud', badge: 'Envío gratis' },
        { id: 7, name: 'Hueso de Nylon', price: '$7.490', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=🦴+Hueso', category: 'Juguetes', badge: null },
        { id: 8, name: 'Collar Reflectante', price: '$9.990', image: 'https://placehold.co/300x300/FDF6E3/8B6914?text=📿+Collar', category: 'Accesorios', badge: 'Oferta' },
      ];
    

      
  return (
    <section id="productos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Productos Destacados</h2>
            <p className="text-gray-600">Los favoritos de nuestros clientes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow relative">
                {product.badge && (
                  <span className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold ${
                    product.badge === 'Oferta' ? 'bg-red-500 text-white' :
                    product.badge === 'Nuevo' ? 'bg-green-500 text-white' :
                    product.badge === '-20%' ? 'bg-red-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <div className="relative group">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-xl hover:bg-white">
                    ❤️
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs text-amber-600 font-medium">{product.category}</span>
                  <h3 className="font-bold text-lg mt-1 mb-2">{product.name}</h3>
                  <div className="text-xl font-bold text-amber-600 mb-3">{product.price}</div>
                  <button className="w-full bg-gray-100 hover:bg-amber-500 hover:text-white py-2 rounded-full font-medium transition-colors">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3 rounded-full transition-colors">
              Ver todos los productos →
            </button>
          </div>
        </div>
      </section>
  )
}
