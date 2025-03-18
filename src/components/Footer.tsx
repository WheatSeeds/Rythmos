import {Link} from "react-router";

const Footer = () => {
    const footerData = [
        {
            name: 'Contact Us',
            links: [
                {
                    name: 'shop@rythmos.com',
                    routeLink: 'mailto:shop@rythmos.com',
                },
                {
                    name: '+1-2345-6789',
                    routeLink: 'tel:+1-2345-6789'
                },
                {
                    name: '123 Ave, New York, USA',
                    routeLink: ''
                },
            ],
        },
        {
            name: 'Products',
            links: [
                {
                    name: 'Electric Guitars',
                    routeLink: '/products/dfd39027-d134-4353-b9e4-57dc6be791b9'
                },
                {
                    name: 'Synthesizers',
                    routeLink: '/products/d002db05-ab63-4c79-999c-d49bbe8d7739'
                },
                {
                    name: 'Drums',
                    routeLink: '/products/b3cb9f8e-4cb6-4325-8215-1efcd9999daf'
                },
                {
                    name: 'Amplifiers',
                    routeLink: '/products/09055aa7-ed49-459d-9452-aa959f288dc2'
                },
                {
                    name: 'Effects and Pedals',
                    routeLink: '/products/fa10f97c-dd98-4a8f-933b-8cb55eb653dd'
                },
            ],
        },
        {
            name: 'About us',
            links: [
                {
                    name: 'Lorem ipsum dolor sit amet',
                    routeLink: ''
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    routeLink: ''
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    routeLink: ''
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    routeLink: ''
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    routeLink: ''
                },
            ],
        },

    ]

    return (
        <footer>
            <div className="footer-content">
                <span className="footer-title">RYTHMOS</span>
                <div className="footer-content-blocks">
                    {footerData.map((item) => (
                        <div className="footer-content-block">
                            <span className="footer-content-block-title">{item.name}</span>
                            <div className="footer-content-block-links">
                                {item.links.map((link) => (
                                    <Link to={link.routeLink}  >{link.name}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;