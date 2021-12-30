interface Name {
  name: string;
  type: string;
  localize: boolean;
  options: any[];
}

interface Logo {
  name: string;
  type: string;
  localize: boolean;
  options: any[];
}

interface Fields {
  name: Name;
  logo: Logo;
}

interface Logo2 {
  path: string;
}

export interface ClientEntry {
  name: string;
  logo: Logo2;
  _mby: string;
  _by: string;
  _o: number;
  _modified: number;
  _created: number;
  _id: string;
  children: any[];
}

export interface ClientObject {
  fields: Fields;
  entries: ClientEntry[];
  total: number;
}
