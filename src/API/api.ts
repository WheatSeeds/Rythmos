import axios from 'axios';

type fetchProductsProps = {
    query?: string;
    uuid?: string;
}

export async function fetchProducts({query, uuid} : fetchProductsProps) {
    const response = await axios.get("https://api.reverb.com/api/listings", {
        headers: {
            "Authorization": `Bearer 92699cf813496334a2a0dd0d5a471fa4984d0e8814ce2b1ca96e7fa3ecb2a63d`,
            "Accept": "application/hal+json",
            "Content-Type": `application/hal+json`,
            "Accept-Version": "3.0"
        },
        params: {
            query: query,
            sort: "price",
            condition: 'new',
            price_min: 0.1,
            per_page: 8,
            state: 'for_sale',
            category_uuid: uuid,
        }
    });

    return response.data.listings;
}


