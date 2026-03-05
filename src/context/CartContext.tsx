'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Producto, Extra, ZonaEntrega, ItemCarrito } from '@/lib/types';

interface ContextoCarrito {
    items: ItemCarrito[];
    extrasSeleccionados: Extra[];
    zonaSeleccionada: ZonaEntrega | null;
    fechaEvento: string; // formato YYYY-MM-DD (valor nativo del input date)
    carritoAbierto: boolean;
    agregarProducto: (producto: Producto) => void;
    quitarProducto: (productoId: string) => void;
    toggleExtra: (extra: Extra) => void;
    seleccionarZona: (zona: ZonaEntrega) => void;
    setFechaEvento: (fecha: string) => void;
    abrirCarrito: () => void;
    cerrarCarrito: () => void;
    totalProductos: number;
    totalExtras: number;
    totalFlete: number;
    totalGeneral: number;
    cantidadItems: number;
}

const CarritoContext = createContext<ContextoCarrito | undefined>(undefined);

export function CarritoProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<ItemCarrito[]>([]);
    const [extrasSeleccionados, setExtrasSeleccionados] = useState<Extra[]>([]);
    const [zonaSeleccionada, setZonaSeleccionada] = useState<ZonaEntrega | null>(null);
    const [fechaEvento, setFechaEventoState] = useState<string>('');
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    const agregarProducto = useCallback((producto: Producto) => {
        setItems(prev => {
            const existente = prev.find(i => i.producto.id === producto.id);
            if (existente) {
                return prev.map(i =>
                    i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
                );
            }
            return [...prev, { producto, cantidad: 1 }];
        });
        setCarritoAbierto(true);
    }, []);

    const quitarProducto = useCallback((productoId: string) => {
        setItems(prev => prev.filter(i => i.producto.id !== productoId));
    }, []);

    const toggleExtra = useCallback((extra: Extra) => {
        setExtrasSeleccionados(prev => {
            const existe = prev.find(e => e.id === extra.id);
            if (existe) return prev.filter(e => e.id !== extra.id);
            return [...prev, extra];
        });
    }, []);

    const seleccionarZona = useCallback((zona: ZonaEntrega) => {
        setZonaSeleccionada(zona);
    }, []);

    const setFechaEvento = useCallback((fecha: string) => {
        setFechaEventoState(fecha);
    }, []);

    const abrirCarrito = useCallback(() => setCarritoAbierto(true), []);
    const cerrarCarrito = useCallback(() => setCarritoAbierto(false), []);

    const totalProductos = items.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0);
    const totalExtras = extrasSeleccionados.reduce((acc, e) => acc + e.precio, 0);
    const totalFlete = zonaSeleccionada?.flete ?? 0;
    const totalGeneral = totalProductos + totalExtras + totalFlete;
    const cantidadItems = items.reduce((acc, i) => acc + i.cantidad, 0);

    return (
        <CarritoContext.Provider value={{
            items,
            extrasSeleccionados,
            zonaSeleccionada,
            fechaEvento,
            carritoAbierto,
            agregarProducto,
            quitarProducto,
            toggleExtra,
            seleccionarZona,
            setFechaEvento,
            abrirCarrito,
            cerrarCarrito,
            totalProductos,
            totalExtras,
            totalFlete,
            totalGeneral,
            cantidadItems,
        }}>
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    const context = useContext(CarritoContext);
    if (!context) throw new Error('useCarrito debe usarse dentro de CarritoProvider');
    return context;
}
