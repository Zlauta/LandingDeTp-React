import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="grey" expand="lg">
      <Container className="header-container me-auto gap-5 align-center d-flex align-items-center">
        <Navbar.Brand href="#home" className="Header-encabezado d-flex align-items-center">
          <img
            alt="Logo"
            src="src\assets\react.svg"
            width="100"
            height="100"
            className="d-inline-block align-top p-2"
          />
          React - Primeros Pasos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-5 align-center d-flex align-items-center">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="#Footer">Grupo</Nav.Link>
            <Nav.Link href="">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
