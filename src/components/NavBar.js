import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="mx-auto ms-sm-0">
            <h1 className='text-wrap'>Install Elteknik</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='mx-auto me-md-0'/>
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