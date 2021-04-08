import { Product } from "../types";
import { MercadoLibreResponse } from "./types";

export default {
    search: (query: string): Promise<Product[]> => {
        return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then(res => res.json())
            .then((response: MercadoLibreResponse) =>
                response.results.map(product => ({
                    id: product.id,
                    title: product.title,
                    image: product.thumbnail,
                    price: product.price,
                    location: product.address.state_name,
                })))
    }
} 