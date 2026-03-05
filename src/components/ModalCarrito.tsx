'use client';

import { X, Trash2, ShoppingBag, MapPin, CalendarDays } from 'lucide-react';
import { useCarrito } from '@/context/CartContext';
import { extras, zonasEntrega } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';

const NUMERO_WHATSAPP = '584120000000';

/** Convierte "YYYY-MM-DD" → "DD/MM/AAAA" para el mensaje de WhatsApp */
function formatearFecha(fechaISO: string): string {
    if (!fechaISO) return '';
    const [y, m, d] = fechaISO.split('-');
    return `${d}/${m}/${y}`;
}

/** Fecha mínima permitida: hoy en formato YYYY-MM-DD */
function hoyISO(): string {
    const hoy = new Date();
    const y = hoy.getFullYear();
    const m = String(hoy.getMonth() + 1).padStart(2, '0');
    const d = String(hoy.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function generarMensajeWhatsApp(
    items: ReturnType<typeof useCarrito>['items'],
    extrasSeleccionados: ReturnType<typeof useCarrito>['extrasSeleccionados'],
    zona: ReturnType<typeof useCarrito>['zonaSeleccionada'],
    fechaEvento: string,
    totalGeneral: number
): string {
    const nombreProductos = items.map(i =>
        `${i.producto.nombre}${i.cantidad > 1 ? ` (x${i.cantidad})` : ''}`
    ).join(', ');

    const listaExtras = extrasSeleccionados.length > 0
        ? extrasSeleccionados.map(e => `${e.icono} ${e.nombre}`).join(', ')
        : 'Ninguno';

    const lineas = [
        'Hola Festejos Valles del Tuy! 🎈',
        '',
        `Quiero reservar: ${nombreProductos}`,
        `📅 Fecha: ${formatearFecha(fechaEvento)}`,
        `📍 Zona: ${zona?.nombre ?? '—'}`,
        `✨ Extras: ${listaExtras}`,
        `💰 Total Estimado: $${totalGeneral}`,
        '',
        '¿Tienen disponibilidad? 🙏',
    ];

    return lineas.join('\n');
}

export default function ModalCarrito() {
    const {
        items,
        extrasSeleccionados,
        zonaSeleccionada,
        fechaEvento,
        setFechaEvento,
        carritoAbierto,
        cerrarCarrito,
        quitarProducto,
        toggleExtra,
        seleccionarZona,
        totalProductos,
        totalExtras,
        totalFlete,
        totalGeneral,
    } = useCarrito();

    const [sacudirFecha, setSacudirFecha] = useState(false);
    const dateInputRef = useRef<HTMLInputElement>(null);

    // Animación del total cuando cambia
    const [totalVisible, setTotalVisible] = useState(totalGeneral);
    useEffect(() => {
        setTotalVisible(totalGeneral);
    }, [totalGeneral]);

    // Cerrar con Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && carritoAbierto) cerrarCarrito();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [carritoAbierto, cerrarCarrito]);

    // Bloquear scroll del body cuando el modal está abierto
    useEffect(() => {
        if (carritoAbierto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [carritoAbierto]);

    const handleWhatsApp = () => {
        if (!fechaEvento) {
            setSacudirFecha(true);
            dateInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            dateInputRef.current?.focus();
            setTimeout(() => setSacudirFecha(false), 600);
            return;
        }
        if (!zonaSeleccionada) {
            alert('Por favor, selecciona tu zona de entrega antes de continuar.');
            return;
        }
        const mensaje = generarMensajeWhatsApp(items, extrasSeleccionados, zonaSeleccionada, fechaEvento, totalGeneral);
        const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    if (!carritoAbierto) return null;

    const puedeEnviar = !!fechaEvento && !!zonaSeleccionada;

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={cerrarCarrito}
            />

            {/* Panel del carrito */}
            <div className="relative ml-auto w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col animate-slide-in">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <ShoppingBag className="text-orange-500" size={22} />
                        <div>
                            <h2 className="font-bold text-gray-800 text-lg leading-tight">Mi Evento</h2>
                            <p className="text-xs text-gray-400">{items.length} producto(s) seleccionado(s)</p>
                        </div>
                    </div>
                    <button
                        id="btn-cerrar-carrito"
                        onClick={cerrarCarrito}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 flex flex-col gap-4 p-5">
                    {/* Carrito vacío */}
                    {items.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center py-10 gap-4">
                            <span className="text-6xl">🎈</span>
                            <p className="text-gray-400 font-medium">Tu carrito está vacío</p>
                            <p className="text-gray-400 text-sm">Agrega productos del catálogo para empezar</p>
                            <button
                                onClick={cerrarCarrito}
                                className="text-orange-500 font-semibold text-sm underline"
                            >
                                Ver catálogo
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Items */}
                            <div className="space-y-3">
                                {items.map(({ producto, cantidad }) => (
                                    <div
                                        key={producto.id}
                                        className="flex items-center gap-3 bg-orange-50 rounded-2xl p-3 border border-orange-100"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
                                                {producto.nombre}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                x{cantidad} · ${producto.precio * cantidad} · ⏳ 6 horas
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => quitarProducto(producto.id)}
                                            className="p-1.5 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* ─── [3] ORDER BUMP MEJORADO ─── */}
                            <div className="bg-yellow-50 rounded-2xl p-4 border-2 border-dashed border-orange-300">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xl">✨</span>
                                    <h3 className="font-bold text-gray-800 text-sm">¡Hazlo más divertido!</h3>
                                    <span className="ml-auto text-xs bg-orange-100 text-orange-600 font-semibold px-2 py-0.5 rounded-full">
                                        Popular
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mb-3">Agrega extras y sube la diversión al máximo</p>
                                <div className="space-y-2.5">
                                    {extras.map(extra => {
                                        const seleccionado = extrasSeleccionados.some(e => e.id === extra.id);
                                        return (
                                            <label
                                                key={extra.id}
                                                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border-2 ${seleccionado
                                                        ? 'bg-white border-orange-400 shadow-sm'
                                                        : 'bg-white/70 border-transparent hover:bg-white hover:border-orange-200'
                                                    }`}
                                            >
                                                {/* Checkbox grande — "fat finger design" */}
                                                <input
                                                    id={`extra-${extra.id}`}
                                                    type="checkbox"
                                                    checked={seleccionado}
                                                    onChange={() => toggleExtra(extra)}
                                                    className="w-5 h-5 accent-orange-500 cursor-pointer flex-shrink-0"
                                                />
                                                <span className="text-2xl">{extra.icono}</span>
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-gray-700">{extra.nombre}</p>
                                                </div>
                                                <span className={`text-sm font-bold transition-colors ${seleccionado ? 'text-orange-600' : 'text-gray-500'}`}>
                                                    +${extra.precio}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ─── [2] FECHA DEL EVENTO ─── */}
                            <div className={`rounded-2xl p-4 border-2 transition-colors ${sacudirFecha
                                    ? 'border-red-400 bg-red-50 animate-shake'
                                    : fechaEvento
                                        ? 'border-green-300 bg-green-50'
                                        : 'border-orange-200 bg-orange-50'
                                }`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <CalendarDays size={18} className={fechaEvento ? 'text-green-600' : 'text-orange-500'} />
                                    <h3 className="font-bold text-gray-800 text-sm">
                                        📅 ¿Cuándo es la fiesta?
                                    </h3>
                                    <span className="ml-auto text-xs text-red-500 font-medium">Obligatorio</span>
                                </div>
                                <input
                                    ref={dateInputRef}
                                    id="input-fecha-evento"
                                    type="date"
                                    value={fechaEvento}
                                    min={hoyISO()}
                                    onChange={e => setFechaEvento(e.target.value)}
                                    className={`w-full bg-white rounded-xl px-3 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 transition-all border ${sacudirFecha
                                            ? 'border-red-400 focus:ring-red-400'
                                            : 'border-orange-200 focus:ring-orange-400'
                                        }`}
                                />
                                {!fechaEvento && (
                                    <p className="text-xs text-amber-600 font-medium mt-1.5 flex items-center gap-1">
                                        ⚠️ Selecciona la fecha para continuar
                                    </p>
                                )}
                                {fechaEvento && (
                                    <p className="text-xs text-green-600 font-medium mt-1.5">
                                        ✅ Fiesta el {formatearFecha(fechaEvento)}
                                    </p>
                                )}
                            </div>

                            {/* Selector de Zona (Flete) */}
                            <div className="bg-teal-50 rounded-2xl p-4 border border-teal-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin size={18} className="text-teal-600" />
                                    <h3 className="font-bold text-gray-800 text-sm">Zona de entrega</h3>
                                </div>
                                <select
                                    id="selector-zona"
                                    value={zonaSeleccionada?.id ?? ''}
                                    onChange={e => {
                                        const zona = zonasEntrega.find(z => z.id === e.target.value);
                                        if (zona) seleccionarZona(zona);
                                    }}
                                    className="w-full bg-white border border-teal-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-shadow"
                                >
                                    <option value="" disabled>
                                        📍 ¿A qué zona llevamos la diversión?
                                    </option>
                                    {zonasEntrega.map(zona => (
                                        <option key={zona.id} value={zona.id}>
                                            {zona.nombre} — {zona.flete === 0 ? '🎉 GRATIS' : `+$${zona.flete} flete`}
                                        </option>
                                    ))}
                                </select>
                                {!zonaSeleccionada && (
                                    <p className="text-xs text-amber-600 font-medium mt-2 flex items-center gap-1">
                                        ⚠️ Selecciona tu zona para continuar
                                    </p>
                                )}
                            </div>

                            {/* Resumen de costos con animación */}
                            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Productos</span>
                                    <span className="font-medium">${totalProductos}</span>
                                </div>
                                {totalExtras > 0 && (
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Extras</span>
                                        <span className="font-medium text-orange-600 transition-all duration-300">
                                            +${totalExtras}
                                        </span>
                                    </div>
                                )}
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Flete</span>
                                    <span className={`font-medium ${totalFlete === 0 && zonaSeleccionada ? 'text-green-600' : ''}`}>
                                        {zonaSeleccionada ? (totalFlete === 0 ? 'GRATIS' : `$${totalFlete}`) : '—'}
                                    </span>
                                </div>
                                <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                                    <span className="font-bold text-gray-800">Total Estimado</span>
                                    {/* ─── [3] TOTAL CON TRANSICIÓN SUAVE ─── */}
                                    <span
                                        key={totalVisible}
                                        className="text-2xl font-extrabold text-orange-500 transition-all duration-300 animate-pulse-once"
                                    >
                                        ${totalVisible}
                                    </span>
                                </div>
                                {/* ─── [5] NOTA LEGAL ─── */}
                                <p className="text-xs text-gray-400 text-center pt-1 leading-relaxed">
                                    *El transporte se cotiza según la zona exacta.<br />
                                    Se requiere un <span className="font-semibold">abono del 50%</span> para reservar la fecha.
                                </p>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer del carrito */}
                {items.length > 0 && (
                    <div className="sticky bottom-0 bg-white border-t border-gray-100 p-5">
                        <button
                            id="btn-solicitar-whatsapp"
                            onClick={handleWhatsApp}
                            className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg transition-all duration-200 ${puedeEnviar
                                    ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-200 hover:scale-[1.02]'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Solicitar Reserva por WhatsApp
                        </button>
                        <p className="text-xs text-gray-400 text-center mt-2">
                            Te responderemos en menos de 30 minutos ⚡
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
