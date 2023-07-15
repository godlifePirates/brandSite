import React, { useEffect, useState } from 'react';
import api from '../api/api';
import {useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../assets/Header.css";

function Header () {

    const [logs, setLogs] = useState([]);
    const getLogs = async () => {
        try {
            const json = await api.getLogs();
            setLogs(json)
        } catch (error) {
            console.error('Error during getLogs call', error);
        }
    }
    useEffect(() => {
        getLogs();
    },[])

    // Wrap the map function in a React fragment
    return (
        
    <Navbar expand="lg" className="bg-body-tertiary sticky-nav" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="home">메뉴1</Nav.Link>
          <Nav.Link href="link">메뉴2</Nav.Link>
          <NavDropdown title="메뉴3" id="basic-nav-dropdown" href = "menu3">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default Header;
