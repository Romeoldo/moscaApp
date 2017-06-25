export interface Branch {
    idsucursal: string;
    sucursal: string;
    zona: string;
}

export interface Article {
    idArticulo: string;
    codigobarras: string;
    descripcion: string;
    precio: string;
    moneda: string;
    lista?: any;
    marca: string;
    cantidad?: number;
}

