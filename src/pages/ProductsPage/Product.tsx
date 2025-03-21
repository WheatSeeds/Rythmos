import { IProduct } from "../../types/types.tsx";
import { Link, useParams } from "react-router";

type ProductProps = {
  product: IProduct;
};

const Product = ({ product }: ProductProps) => {
  const { uuid } = useParams<string>();

  return (
    <Link to={`/products/${uuid}/${product.id}`}>
      <div className="product-item">
        <img
          className="product-item-image"
          src={product._links.photo.href}
          alt=""
        />
        <div className="product-item-description">
          <span className="product-item-title">{product.model}</span>
          <span className="product-item-price">{product.price.display}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
