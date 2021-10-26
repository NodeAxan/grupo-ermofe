interface Nombre {
  name: string;
  type: string;
  localize: boolean;
  options: any[];
}

interface Galeria {
  name: string;
  type: string;
  localize: boolean;
  options: any[];
}

interface Descripcion {
  name: string;
  type: string;
  localize: boolean;
  options: any[];
}

interface Fields {
  Nombre: Nombre;
  Galeria: Galeria;
  Descripcion: Descripcion;
}

interface Meta {
  title: string;
  asset: string;
}

interface Galeria2 {
  meta: Meta;
  path: string;
}

export interface ProductEntry {
  Nombre: string;
  Galeria: Galeria2[];
  _mby: string;
  _by: string;
  _modified: number;
  _created: number;
  _id: string;
  Descripcion: string;
}

export interface ProductsObject {
  fields: Fields;
  entries: ProductEntry[];
  total: number;
}
