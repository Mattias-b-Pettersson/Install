import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="mx-auto ms-sm-0 me-sm-5">
            <h1 className='text-wrap'>Install Elteknik</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='mx-auto me-md-0'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Hem</Link>
            <Link to="/kontakt" className='nav-link'>Kontakta oss</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;