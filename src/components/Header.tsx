const Header = () => {

    const headerMenu = ["Home", "Store", "About Us", "Contact", "FAQ"]


    return (
        <header>
            <div className="header-content">
                <div className="header-content-left">
                    <div className="header-logo">RYTHMOS</div>
                    <div className="divider"></div>
                    <div className="header-menu">
                        {headerMenu.map(item => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className="header-content-right">
                    <div className="header-shopping-cart">
                        <img className="header-shopping-cart-icon" src="../icons/shopping-cart-dark.svg" alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;