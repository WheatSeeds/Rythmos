import {Link} from "react-router";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

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
            name: "Contact",
            routeLink: "/home",
        },
        {
            name: "FAQ",
            routeLink: "/faq",
        }
    ]

    const cart = useSelector((state: RootState) => state.cart)

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
                    <Link to="/cart" className="header-shopping-cart">
                        <img className="header-shopping-cart-icon" src="../../icons/shopping-cart-dark.svg" alt=""/>
                        {(cart.length > 0)
                            ?<div className="header-shopping-cart-count">{cart.length}</div>
                            :''
                        }
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;