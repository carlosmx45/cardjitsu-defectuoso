import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">
            <a href={url} className="App-cola  ">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{title}</h1>
                <div className="App-Routes">
                    <a href="/" className="Text">Home</a>
                    <a href="product" className="Text">Product</a>
                </div>
            </a>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;