import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper">
        <div className="main-info">
            <h1>Web Development and website promotions</h1>
            <Typed className="typed-text"
            strings={["Web design","Web Development","Facebood Ads SMM","Google Ads"]}
            typeSpeed={40}
            backSpeed={60}
            fadeOutDelay={2}
            loop
            />
            <a href="#" className="btn-main-offer">Main Offer</a>
        </div>
        </div>
    )
}

export default Header
