import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {fetchProduct} from "../API/api.ts";
import {useParams} from "react-router";
import {useState} from "react";
import ProductInfo from "../components/ProductInfo.tsx";
import {IProductInfo} from "../types/types.tsx";


const ProductPage = () => {
    const { productId } = useParams<string>();
    const [productDescription, setProductDescription] = useState<IProductInfo>()

    async function loadProduct(productId = '') {
        const data = await fetchProduct({productId});
        setProductDescription(data!);
    }

    loadProduct(productId);

    return (
        <>
            <Header/>
            <main>
                <div id="product-page-content">
                    <ProductInfo product={productDescription}/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;