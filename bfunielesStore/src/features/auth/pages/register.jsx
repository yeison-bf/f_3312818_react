import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {


    const navigate = useNavigate()
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Paso 1 - Datos Personales
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        // Paso 2 - Datos de Dirección
        direccion: '',
        ciudad: '',
        region: '',
        codigoPostal: '',
        // Paso 3 - Datos de Usuario y Contraseña
        username: '',
        password: '',
        confirmPassword: '',
        roleId: 2
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)
        try {
            const response = await axios.post('http://localhost:3001/api/auth/register', formData)

            if(response.data.status){
                alert(response.data.message)
                navigate('/login')
            }else{
                alert("Error en el registro")
            }
            
        } catch (error) {
            console.error("Error en el proceso: ", error)
        }
    };

    const IniciarSeccion = (e) => {
        e.preventDefault()
        navigate("/login")
    }

    // Verificar si el paso actual es válido
    const isStepValid = () => {
        if (step === 1) {
            return formData.nombre && formData.apellido && formData.email && formData.telefono;
        }
        if (step === 2) {
            return formData.direccion && formData.ciudad && formData.region && formData.codigoPostal;
        }
        if (step === 3) {
            return formData.username && formData.password && formData.confirmPassword &&
                formData.password === formData.confirmPassword && formData.password.length >= 6;
        }
        return false;
    };



    return (
        <div className="font-['Arial',sans-serif] min-h-screen flex">
            {/* Lado izquierdo - Formulario de Registro */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-white to-gray-50">
                <div className="max-w-md w-full">
                    {/* Logo y título */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="bg-amber-100 p-4 rounded-2xl">
                                <span className="text-5xl">🐕</span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            ¡Crea tu cuenta!
                        </h1>
                        <p className="text-gray-500">
                            Únete a PetShop Canino y empieza a consentir a tu mejor amigo
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center">
                            {[1, 2, 3].map((stepNumber) => (
                                <div key={stepNumber} className="flex-1 relative">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold z-10 relative
                        ${step >= stepNumber
                                                    ? 'bg-amber-500 text-white'
                                                    : 'bg-gray-200 text-gray-500'
                                                }`}
                                        >
                                            {step > stepNumber ? '✓' : stepNumber}
                                        </div>
                                        <span className={`text-xs mt-2 hidden sm:block ${step >= stepNumber ? 'text-amber-600 font-medium' : 'text-gray-400'
                                            }`}>
                                            {stepNumber === 1 && 'Personales'}
                                            {stepNumber === 2 && 'Dirección'}
                                            {stepNumber === 3 && 'Usuario'}
                                        </span>
                                    </div>
                                    {stepNumber < 3 && (
                                        <div
                                            className={`absolute top-5 left-1/2 w-full h-0.5 -translate-y-1/2
                        ${step > stepNumber ? 'bg-amber-500' : 'bg-gray-200'}`}
                                            style={{ width: 'calc(100% - 2.5rem)', left: 'calc(50% + 1.25rem)' }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleSubmit}>
                        {/* Paso 1 - Datos Personales */}
                        {step === 1 && (
                            <div className="space-y-5 animate-fadeIn">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="Juan"
                                            required


                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="Pérez"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo electrónico
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            📧
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="juan@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            📱
                                        </span>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="+56 9 1234 5678"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Paso 2 - Datos de Dirección */}
                        {step === 2 && (
                            <div className="space-y-5 animate-fadeIn">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Dirección
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            🏠
                                        </span>
                                        <input
                                            type="text"
                                            name="direccion"
                                            value={formData.direccion}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="Calle Los Pinos 123"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Ciudad
                                        </label>
                                        <input
                                            type="text"
                                            name="ciudad"
                                            value={formData.ciudad}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="Santiago"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Región
                                        </label>
                                        <select
                                            name="region"
                                            value={formData.region}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
                                            required
                                        >
                                            <option value="">Seleccionar</option>
                                            <option value="Metropolitana">Metropolitana</option>
                                            <option value="Valparaíso">Valparaíso</option>
                                            <option value="Biobío">Biobío</option>
                                            <option value="Antofagasta">Antofagasta</option>
                                            <option value="Araucanía">Araucanía</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Código Postal
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            ✉️
                                        </span>
                                        <input
                                            type="text"
                                            name="codigoPostal"
                                            value={formData.codigoPostal}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="8320000"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Paso 3 - Datos de Usuario y Contraseña */}
                        {step === 3 && (
                            <div className="space-y-5 animate-fadeIn">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre de usuario
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            👤
                                        </span>
                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="juanperez"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contraseña
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            🔒
                                        </span>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                    {formData.password && formData.password.length < 6 && (
                                        <p className="text-xs text-red-500 mt-1">
                                            La contraseña debe tener al menos 6 caracteres
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirmar contraseña
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                                            ✓
                                        </span>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                        <p className="text-xs text-red-500 mt-1">
                                            Las contraseñas no coinciden
                                        </p>
                                    )}
                                    {formData.confirmPassword && formData.password === formData.confirmPassword && formData.password.length >= 6 && (
                                        <p className="text-xs text-green-500 mt-1">
                                            ✓ Contraseña válida
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Botones de navegación */}
                        <div className="flex gap-4 mt-8">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-3 rounded-xl transition-all"
                                >
                                    Atrás
                                </button>
                            )}
                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className={`flex-1 font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02]
                    ${isStepValid()
                                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    Siguiente →
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={!isStepValid()}
                                    className={`flex-1 font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02]
                    ${isStepValid()
                                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}

                                >
                                    Registrarme 🐕


                                </button>
                            )}
                        </div>

                        {/* Separador y login */}
                        <div className="mt-6">
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">¿Ya tienes cuenta?</span>
                                </div>
                            </div>

                            <p className="text-center text-sm text-gray-600">
                                <a onClick={IniciarSeccion} className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer ">
                                    Inicia sesión aquí
                                </a>
                            </p>
                        </div>
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
                            🐾 ¡Bienvenido a la familia! 🐾
                        </p>
                        <div className="h-1 w-24 bg-white/50 mx-auto rounded-full my-4"></div>
                        <div className="space-y-2">
                            <p className="text-lg animate-bounce inline-block mx-2">✨</p>
                            <p className="text-lg font-medium">Regístrate y obtén beneficios exclusivos</p>
                            <p className="text-lg animate-bounce inline-block mx-2">✨</p>
                        </div>
                        <p className="text-md opacity-90 mt-4 italic">
                            "10% de descuento en tu primera compra al registrarte"
                        </p>
                    </div>

                    {/* Beneficios */}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span>🎁</span>
                            <span>Bienvenida</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span>⭐</span>
                            <span>Puntos por compra</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span>🚚</span>
                            <span>Envíos gratis</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
