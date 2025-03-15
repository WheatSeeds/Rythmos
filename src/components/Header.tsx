import {Link} from "react-router";

const Header = () => {

    const headerMenu = [
        {
            name: "Home",
            routeLink: "/home",
        },
        {
            name: "Store",
            routeLink: "/products",
        },
        {
            name: "About Us",
            routeLink: "/home",
        },
        {
            name: "Contact",
            routeLink: "/home",
        },
        {
            name: "FAQ",
            routeLink: "/faq",
        }
    ]

    return (
        <header>
            <div className="header-content">
                <div className="header-content-left">
                    <div className="header-logo">RYTHMOS</div>
                    <div className="divider"></div>
                    <div className="header-menu">
                        {headerMenu.map(item => (
                            <Link to={item.routeLink} className="header-menu-link" key={item.name}>{item.name}</Link>
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