interface Titulo {
    name: string;
    type: string;
    localize: boolean;
    options: any[];
}

interface Resumen {
    name: string;
    type: string;
    localize: boolean;
    options: any[];
}

interface Contenido {
    name: string;
    type: string;
    localize: boolean;
    options: any[];
}

interface Fields {
    titulo: Titulo;
    resumen: Resumen;
    contenido: Contenido;
}

export interface ArticleEntry {
    titulo: string;
    contenido: string;
    _mby: string;
    _by: string;
    _modified: number;
    _created: number;
    _id: string;
    resumen: string;
}

export interface ArticlesObject {
    fields: Fields;
    entries: ArticleEntry[];
    total: number;
}