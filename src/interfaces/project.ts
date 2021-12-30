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

interface Options {
  options: string;
}

interface Categoria {
  name: string;
  type: string;
  localize: boolean;
  options: Options;
}

interface Fields {
  nombre: Nombre;
  galeria: Galeria;
  descripcion: Descripcion;
  categoria: Categoria;
}

interface Meta {
  title: string;
  asset: string;
}

interface Galeria2 {
  meta: Meta;
  path: string;
}

export interface ProjectEntry {
  nombre: string;
  galeria: Galeria2[];
  descripcion: string;
  categoria: string;
  _mby: string;
  _by: string;
  _modified: number;
  _created: number;
  _id: string;
  _pid?: any;
  _o: number;
  children: any[];
}

export interface ProjectsObject {
  fields: Fields;
  entries: ProjectEntry[];
  total: number;
}
