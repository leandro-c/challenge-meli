export interface Product {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    address: {
        state_name: string;
    }
}

export interface MercadoLibreResponse {
    results: Product[];
}