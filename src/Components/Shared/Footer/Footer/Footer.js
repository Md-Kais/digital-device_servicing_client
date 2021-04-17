import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterColumn/FooterColumn';

const Footer = () => {
    const noNamed = [
        { name: "Phone Servicing", link: "/emergency" },
        { name: "Phone Check Up", link: "/checkup" },
        { name: "Treatment of Virus Attack", link: "/personal-treatment" },
        { name: "Memory Extraction", link: "/tooth-extract" },
        { name: "Laptop Check Up", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "Motijheel-1000,Dhaka", link: "//google.com/map" },
        { name: "Bangladesh", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Emergency Servicing", link: "/emergency" },
        { name: "PC Check Up", link: "/checkup" },
        { name: "Treatment of MalWare Attack", link: "/personal-treatment" },
        { name: "MotherBoard Extraction", link: "/tooth-extract" },
        { name: "Laptop Check Up", link: "/checkup" },
        { name: "Phone Check Up", link: "/checkup" },
        { name: "PC Check Up", link: "/checkup" }
    ]
    const services = [
        { name: "Emergency Servicing", link: "/emergency" },
        { name: "PC Check Up", link: "/checkup" },
        { name: "Treatment of MalWare Attack", link: "/personal-treatment" },
        { name: "MotherBoard Extraction", link: "/tooth-extract" },
        { name: "Laptop Check Up", link: "/checkup" },
        { name: "Phone Check Up", link: "/checkup" },
        { name: "PC Check Up", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon  text-info" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon text-danger" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon text-success" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801722711840</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;