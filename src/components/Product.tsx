const Product = () => {
    return (
        <div className="product-item">
            <img className="product-item-image" alt=""/>
            <div className="product-item-description">
                <span className="product-item-title">Player Plus Nashville Telecaster with Maple Fretboard</span>
                <span className="product-item-price">$748.99</span>
            </div>
            <div className="product-item-btn">
                <img className="product-item-btn-img" src="./icons/shopping-cart.svg" alt=""/>
            </div>
        </div>
    );
};

export default Product;