import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  return (
    <>
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
  <p className='fw-lighter m-4'>MothWork para Desafio latam_</p>
  </>
  );
}

export default Contacto