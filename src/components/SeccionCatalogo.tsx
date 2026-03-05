'use client';

import { productos } from '@/lib/data';
import TarjetaProducto from './TarjetaProducto';

export default function SeccionCatalogo() {
    return (
        <section id="catalogo" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Encabezado */}
                <div className="text-center mb-10">
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                        🎪 Nuestros Paquetes
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
                        Catálogo de Entretenimiento
                    </h2>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Precios transparentes, sin letra pequeña. Agrega lo que necesitas y arma tu evento perfecto.
                    </p>
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productos.map(producto => (
                        <TarjetaProducto key={producto.id} producto={producto} />
                    ))}
                </div>

                {/* CTA inferior */}
                <div className="mt-12 text-center bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-lg">
                    <p className="text-2xl font-bold mb-2">¿Tienes una idea diferente? 🎈</p>
                    <p className="text-orange-100 mb-4">
                        Contáctanos por WhatsApp y te hacemos una cotización personalizada
                    </p>
                    <a
                        href="https://wa.me/584120000000?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-2xl hover:bg-orange-50 transition-colors shadow-md"
                    >
                        💬 Chatear ahora
                    </a>
                </div>
            </div>
        </section>
    );
}
