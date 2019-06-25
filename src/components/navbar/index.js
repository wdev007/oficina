import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Oficina App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Vendedor(a)" className="mr-sm-2" />
        <Button variant="outline-light">Buscar</Button>
      </Form>
    </Navbar>
  );
}