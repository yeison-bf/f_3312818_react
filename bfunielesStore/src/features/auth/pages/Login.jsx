import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });

    const dataUsuarios = JSON.parse(localStorage.getItem("datosUsuarios")) || []
    const auth = dataUsuarios.find(u => u.email === email && u.password === password) 
    if (auth) {
    navigate('/dashboard/home')
    }
    // Limpiar campos
    setEmail("")
    setPassword("")

  };



  const handdleHome = (e) => {
    e.preventDefault()
    navigate("/")
  }

  const handdleRegister = (e) => {
    e.preventDefault()
    navigate("/register")
  }

  return (
    <div className="font-['Arial',sans-serif] min-h-screen flex">
      {/* Lado izquierdo - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-md w-full">
          {/* Logo y título */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-amber-100 p-4 rounded-2xl">
                <span className="text-5xl">🐕</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              ¡Bienvenido de vuelta!
            </h1>
            <p className="text-gray-500">
              Ingresa a tu cuenta para seguir comprando
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  📧
                </span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            {/* Campo contraseña */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  🔒
                </span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Opciones adicionales */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500"
                />
                <span className="text-sm text-gray-600">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de login */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-md"
            >
              Iniciar Sesión
            </button>

            {/* Separador */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <a onClick={handdleHome} className="px-4 bg-white text-blue-500 cursor-pointer">Regresar al Home</a>
              </div>
            </div>



            {/* Registro */}
            <p className="text-center text-sm text-gray-600 mt-6">
              ¿No tienes una cuenta?{' '}
              <a onClick={handdleRegister} className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer">
                Regístrate aquí
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Lado derecho - Imagen con frase animada */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-amber-400 to-amber-700 overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/8B6914/white?text=🐕+Perros+Felices')" }}
        ></div>

        {/* Patrón de huellas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl">🐾</div>
          <div className="absolute bottom-20 right-10 text-4xl">🐾</div>
          <div className="absolute top-1/3 right-20 text-3xl">🐾</div>
          <div className="absolute bottom-1/3 left-20 text-3xl">🐾</div>
        </div>

        {/* Contenido centrado */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-12 text-center">
          {/* Logo grande */}
          <div className="mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 inline-block">
              <span className="text-7xl">🐕</span>
            </div>
          </div>

          {/* Nombre de la tienda */}
          <h2 className="text-4xl font-bold mb-4">
            PetShop Canino
          </h2>

          {/* Frase animada */}
          <div className="space-y-3">
            <p className="text-xl font-light animate-pulse">
              🐾 Tu mejor amigo merece lo mejor 🐾
            </p>
            <div className="h-1 w-24 bg-white/50 mx-auto rounded-full my-4"></div>
            <div className="space-y-2">
              <p className="text-lg animate-bounce inline-block mx-2">✨</p>
              <p className="text-lg font-medium">Calidad y amor para tu mascota</p>
              <p className="text-lg animate-bounce inline-block mx-2">✨</p>
            </div>
            <p className="text-md opacity-90 mt-4 italic">
              "La felicidad de tu perro es nuestra mayor recompensa"
            </p>
          </div>

          {/* Beneficios */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>🚚</span>
              <span>Envíos gratis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>⭐</span>
              <span>4.9 estrellas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>💳</span>
              <span>Pago seguro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Versión móvil: solo el formulario */}
      <div className="lg:hidden w-full">
        {/* Mostrar solo formulario en móvil */}
      </div>
    </div>
  );
};