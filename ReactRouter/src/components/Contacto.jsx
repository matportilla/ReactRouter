import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
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
    <h1 className='m-4'>Cuentanos, ¿en que te podemos ayudar?</h1>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
  <Button variant="danger">Enviar</Button>{' '}
  </>
  );
}

export default Contacto