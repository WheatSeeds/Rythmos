// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const API_KEY = import.meta.env.VITE_API_KEY;
import axios from 'axios';

type fetchProductsProps = {
    query: string;
    uuid: string;
    brandsFilter: string[];
    minPrice: number;
    maxPrice: number;
    priceFilter: string;
}

export async function fetchProducts({query, uuid, brandsFilter, minPrice, maxPrice, priceFilter} : fetchProductsProps) {
    console.log(brandsFilter, minPrice, maxPrice, priceFilter);
    const response = await axios.get("https://api.reverb.com/api/listings", {
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Accept": "application/hal+json",
            "Content-Type": `application/hal+json`,
            "Accept-Version": "3.0"
        },
        params: {
            query: query,
            sort: priceFilter,
            condition: 'new',
            price_min: minPrice,
            price_max: maxPrice,
            per_page: 8,
            state: 'for_sale',
            category_uuid: uuid,
            make: brandsFilter,
        }
    });
    return response.data.listings;
}



