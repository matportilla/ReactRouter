import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Home = () => {
  return (
   <>
   <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav, collapsecolor">
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light' href="#link">Contacto</Nav.Link>
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
    <div>
        <h1 className='m-4'>Bienvenido a Happy Cake</h1>
        <h6 className='m-2'>El lugar de los pasteles</h6>
        <img className='img-fluid, pastel' src="https://static-00.iconduck.com/assets.00/birthday-cake-icon-2048x2048-ulq09lo1.png" alt="Pastel" />
    </div>
   </>
  )
}

export default Home