import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const MenuNavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-danger">
      <Container>
          <Nav className="me-auto">
            <Link to="/" className='text-light pe-2 text-decoration-none'>🏠Home</Link>
            <Link to="/Contacto" className='text-light pe-2 text-decoration-none'>📒Contacto</Link>
          </Nav>
          <Link to="/" className="text-light text-decoration-none d-flex justify-content-end text-light">HappyCake🍰</Link>
      </Container>
    </Navbar>
    </>
  )
}

export default MenuNavBar