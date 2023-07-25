import React from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import './Navbar.css';

function Navbar() {
  return (

    <NavbarBS expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <NavbarBS.Brand href="#home">TIENDA</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="nav-container justify-content-evenly">

              <Nav.Item>
              <Link to="/" style={{color: '#fff', textDecoration: 'none',}}> HOME </Link>
              </Nav.Item>

              <Nav.Item>
              <Link to="/CREATE" style={{color: '#fff', textDecoration: 'none'}}> CREATE </Link>
              </Nav.Item>

              <Nav.Item>
              <Link to="/LIST-PRODUCTS" style={{color: '#fff', textDecoration: 'none'}}> LIST-PRODUCTS </Link>
              </Nav.Item>

            <NavbarBS.Text className='justify-content-center p-0'>
            Signed in as: <a href="#login">Daniel Montero</a>
          </NavbarBS.Text>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  )
}

export default Navbar;