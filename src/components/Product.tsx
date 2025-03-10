import {FC} from "react";
import {IProduct} from "../types/types.tsx";

interface ProductProps {
    product: IProduct;
}

const Product: FC<ProductProps> = ({product}) => {
    return (
        <div className="product-item">
            <img className="product-item-image" src={product._links.photo.href} alt=""/>
            <div className="product-item-description">
                <span className="product-item-title">{product.make} {product.model}</span>
                <span className="product-item-price">{product.price.display}</span>
            </div>
            <div className="product-item-btn">
                <img className="product-item-btn-img" src="./icons/shopping-cart.svg" alt=""/>
            </div>
        </div>
    );
};

export default Product;