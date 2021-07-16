import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper">
        <div className="main-info">
            <h1>Abhishek Sir and Sandeep Gupta</h1>
            <Typed className="typed-text"
            strings={["vEnagage Team","Bangalore HSR","Hospital JSS","Baby Memorial"]}
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
