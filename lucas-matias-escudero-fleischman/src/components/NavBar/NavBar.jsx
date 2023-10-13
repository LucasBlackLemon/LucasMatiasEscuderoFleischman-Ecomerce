import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Tienda Pokémon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Peluches</Nav.Link>
            <NavDropdown title="Indumentaria" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Buzos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pijamas</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">📞 Contacto</Nav.Link>
            </Nav>
            <CartWidget />
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export default NavBar;
