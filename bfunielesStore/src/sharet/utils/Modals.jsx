import React from 'react'

export const Modals = ({ title, onCloseModal, onSaveData, children }) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay - fondo gris claro transparente como en la imagen */}
            <div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Container */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 z-10">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-700">
                    <h3 className="text-lg font-semibold text-white">
                        {title}
                    </h3>
                    <button
                        onClick={onCloseModal}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {children}

               
            </div>
        </div>
    )
}