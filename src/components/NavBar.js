import React from 'react';
import { Navbar, Nav, Container, Image} from 'react-bootstrap';
import logo from '../assets//images/install-logo.png';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <h1>Install Elteknik</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#link">Kontakta oss</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;