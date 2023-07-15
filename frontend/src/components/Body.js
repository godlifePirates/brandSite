import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Body.css'
const Body = () => {

    return (
        <Container className='body'>
            <Row>
            <Col>
                <h1>This is the Body</h1>
                <p>This is some text in the body.</p>
            </Col>
            </Row>
        </Container>
    );
}
export default Body;
