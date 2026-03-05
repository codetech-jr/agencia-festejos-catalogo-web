'use client';

import Image from 'next/image';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { useCarrito } from '@/context/CartContext';
import type { Producto } from '@/lib/types';
import { useState } from 'react';

interface TarjetaProductoProps {
    producto: Producto;
}

export default function TarjetaProducto({ producto }: TarjetaProductoProps) {
    const { agregarProducto, items } = useCarrito();
    const [agregado, setAgregado] = useState(false);

    const estaEnCarrito = items.some(i => i.producto.id === producto.id);

    const handleAgregar = () => {
        agregarProducto(producto);
        setAgregado(true);
        setTimeout(() => setAgregado(false), 2000);
    };

    return (
        <div className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1">
            {/* Imagen */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={false}
                />
                <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-orange-600 font-extrabold text-lg px-3 py-1 rounded-full shadow-md border border-orange-100">
                        ${producto.precio}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">{producto.nombre}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 mt-1 font-medium">
                        ⏳ Alquiler por 6 horas
                    </span>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{producto.descripcion}</p>
                </div>

                {estaEnCarrito && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-teal-600 bg-teal-50 rounded-lg px-2.5 py-1.5">
                        <CheckCircle size={14} />
                        Ya está en tu evento
                    </div>
                )}

                <button
                    id={`btn-agregar-${producto.id}`}
                    onClick={handleAgregar}
                    className={`mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm transition-all duration-200 ${agregado
                        ? 'bg-teal-500 text-white scale-95'
                        : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white hover:shadow-lg hover:scale-[1.02]'
                        }`}
                >
                    {agregado ? (
                        <>
                            <CheckCircle size={18} />
                            ¡Agregado con éxito!
                        </>
                    ) : (
                        <>
                            <ShoppingCart size={18} />
                            Agregar a mi evento
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
