import {IProduct} from "../types/types.tsx";
import Product from "./Product.tsx";

type ProductListProps = {
    products: IProduct[];
}

const ProductList = ({products} : ProductListProps) => {
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