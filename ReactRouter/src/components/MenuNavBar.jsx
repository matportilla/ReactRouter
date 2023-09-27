import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const MenuNavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav, collapsecolor">
          <Nav className="me-auto">
            <Link to="/" className='text-light pe-2 text-decoration-none'>Home</Link>
            <Link to="/Contacto" className='text-light pe-2 text-decoration-none'>Contacto</Link>
          </Nav>
          <NavDropdown title="HappyCake" id="basic-nav-dropdown-" className='d-flex justify-content-end text-light'>
              <NavDropdown.Item href="#action/3.1">Rico</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rico Rico</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rico Rico Rico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Rico Rico Rico Rico</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default MenuNavBar