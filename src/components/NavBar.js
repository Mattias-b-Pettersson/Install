import React from 'react';
import { Navbar, Nav, Container, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "../styles/NavBar.module.css"
import kollaelforetaget from '../assets/logos/logotyp-kollaelforetaget-webb.png' 

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="mx-auto ms-sm-0 me-sm-5">
            <h1 className={`text-wrap ${style.brandName}`}>Install Elteknik</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='mx-auto me-md-0'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/install" className='nav-link'>Hem</Link>
            <Link to="/install/kontakt" className='nav-link'>Kontakta oss</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;