import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/Footer.css'

const Footer = () => {
    return (
        <Container fluid style={{backgroundColor: '#212529', color: '#fff', textAlign: 'center'}}>
            <p className='footer-bar'>This is the Footer</p>
        </Container>
    );
}
export default Footer;
