import axios from 'axios';

type fetchProductsProps = {
    query?: string;
}


export async function fetchProducts({query} : fetchProductsProps) {
    const response = await axios.get("https://api.reverb.com/api/listings", {
        headers: {
            "Authorization": `Bearer 69e7e4de902b2a4ebc9998f26346800855f1c657ae04c0d3eda7909b18081a18`,
            "Accept": "application/hal+json",
            "Content-Type": `application/hal+json`,
            "Accept-Version": "3.0"
        },
        params: {
            query: query,
            sort: "price|desc",
            condition: 'new',
            price_min: 0.1,
            per_page: 8,
            state: 'for_sale',
        }
    });

    return response.data.listings;
}


