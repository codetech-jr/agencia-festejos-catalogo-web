export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

export interface Extra {
  id: string;
  nombre: string;
  precio: number;
  icono: string;
}

export interface ZonaEntrega {
  id: string;
  nombre: string;
  flete: number;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

export interface EstadoCarrito {
  items: ItemCarrito[];
  extras: Extra[];
  zonaSeleccionada: ZonaEntrega | null;
}
