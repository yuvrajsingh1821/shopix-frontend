import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="about">
                <h2>About</h2>
                <p>Shopix is a platform where you can buy your favourite electronic products. Any feedback about the site will be appreciated.</p>
            </div>

            <div className="contact">
                <h2>Contact</h2>
                <div className="icons">
                    <FaLocationArrow/>
                    <p>sector 62, noida 201301</p>
                </div>

                <div className="icons">
                    <FaMobileAlt/>
                    <p>4321 2222 3450</p>
                </div>

                <div className="icons">
                    <FaEnvelope/>
                    <p>imyuvi1218@gmail.com</p>
                </div>

            </div>

            <div className="categories">
                 <h2>Categories</h2>
                 <ul>
                    <li>Headphones</li>
                    <li>Smart Watches</li>
                    <li>Bluetooth speakers</li>
                    <li>Wireless earbuds</li>
                    <li>Home Theatre</li>
                    <li>Smartphones</li>
                 </ul>
            </div>

            <div className="pages">
                 <h2>Pages</h2>
                 <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>Returns</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                 </ul>
            </div>

       </div>

       <div className="copyright">
                <p>Shopix created by Yuvraj singh</p>
                <img src={Payment} alt="" />
        </div>

    </footer>;
};

export default Footer;
