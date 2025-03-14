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
                                    <Link to={link.routeLink}>{link.name}</Link>
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