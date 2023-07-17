import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <p className="small-text">
                NewsLetter
            </p>
            <p className="big-text">Sign up for latest updates and offers</p>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF/>
                </div>
                <div className="icon">
                    <FaTwitter/>
                </div>
                <div className="icon">
                    <FaInstagram/>
                </div>
                <div className="icon">
                    <FaLinkedinIn/>
                </div>
            </div>
        </div>

    </div>;
};

export default Newsletter;
