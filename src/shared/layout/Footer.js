import React from 'react';

const Footer = () => {
   
    const root = {
        marginTop: '20px',
    }
    return (
        <footer style={root}>
            &copy; Ya No Quiero Estudiar Esto. {new Date().getFullYear()}
        </footer>
    );

}

export default Footer;