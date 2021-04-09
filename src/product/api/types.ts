export interface Product {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    address: {
        state_name: string;
    }
}

export interface ProductPageDescriptionResponse {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    seller_address: {
        state: {
            name: string;
        }
    }
}

export interface MercadoLibreResponse {
    results: Product[];
}