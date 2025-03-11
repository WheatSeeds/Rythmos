import axios from 'axios';

type fetchProductsProps = {
    query?: string;
}


export async function fetchProducts({query} : fetchProductsProps) {
    const response = await axios.get("https://api.reverb.com/api/listings", {
        headers: {
            "Authorization": `Bearer b737f9905dd0cc4a8f62db4776df11fdb9e40d65722b875fe7cce2f4d35daefd`,
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



