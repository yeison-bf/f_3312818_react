import React from 'react'

export const Category = () => {
    const categories = [
        { id: 1, name: 'Alimentos', icon: '🍖', color: 'bg-amber-100' },
        { id: 2, name: 'Juguetes', icon: '🎾', color: 'bg-sky-100' },
        { id: 3, name: 'Accesorios', icon: '🦮', color: 'bg-purple-100' },
        { id: 4, name: 'Higiene', icon: '🧴', color: 'bg-emerald-100' },
        { id: 5, name: 'Ropa', icon: '👕', color: 'bg-rose-100' },
        { id: 6, name: 'Salud', icon: '💊', color: 'bg-amber-100' },
      ];

      
  return (
<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Categorías</h2>
            <p className="text-gray-600">Explora nuestros productos por categoría</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className={`${cat.color} p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer group`}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <span className="font-medium text-gray-800">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>  )
}
