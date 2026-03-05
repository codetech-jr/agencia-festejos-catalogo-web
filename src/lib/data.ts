import type { Producto, Extra, ZonaEntrega } from './types';

export const productos: Producto[] = [
    {
        id: 'combo-super-castillo',
        nombre: 'Combo Super Castillo',
        descripcion: 'Castillo Inflable 4x4m + Cama Elástica. Ideal para niños de 3 a 12 años. Capacidad: hasta 10 niños simultáneos.',
        precio: 80,
        imagen: '/combo-castillo.png',
        categoria: 'combos',
    },
    {
        id: 'tobogan-acuatico',
        nombre: 'Inflable Tobogán Acuático',
        descripcion: 'Tobogán inflable con piscina integrada. Perfecto para fiestas de verano. Dimensiones: 5x3m. Incluye Manguera.',
        precio: 100,
        imagen: '/tobogan-acuatico.png',
        categoria: 'acuaticos',
    },
    {
        id: 'combo-basico',
        nombre: 'Combo Básico',
        descripcion: 'Castillo Inflable Pequeño + 20 Sillas plásticas. La solución perfecta para reuniones y cumpleaños con presupuesto ajustado.',
        precio: 50,
        imagen: '/combo-basico.png',
        categoria: 'combos',
    },
];

export const extras: Extra[] = [
    {
        id: 'maquina-cotufas',
        nombre: 'Máquina de Cotufas',
        precio: 25,
        icono: '🍿',
    },
    {
        id: 'maquina-algodon',
        nombre: 'Máquina de Algodón de Azúcar',
        precio: 25,
        icono: '🍬',
    },
    {
        id: 'pinta-caritas',
        nombre: 'Pinta Caritas',
        precio: 20,
        icono: '🎨',
    },
];

export const zonasEntrega: ZonaEntrega[] = [
    { id: 'charallave-centro', nombre: 'Charallave Centro', flete: 0 },
    { id: 'matalinda', nombre: 'Urbanización Matalinda', flete: 5 },
    { id: 'caujarito', nombre: 'Caujarito', flete: 10 },
    { id: 'ocumare', nombre: 'Ocumare del Tuy', flete: 15 },
];
