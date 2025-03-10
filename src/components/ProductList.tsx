import {IProduct} from "../types/types.tsx";
import {FC} from "react";
import Product from "./Product.tsx";

interface ProductListProps {
    products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <>
            <section className="ProductList">
                {products.map(product => (
                    <Product key={product.id} product={product}/>
                ))}
            </section>
        </>
    );
};

export default ProductList;