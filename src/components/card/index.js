import React from 'react';
import { Card } from 'react-bootstrap';

import Modal from '../modal';

export default function(props) {
  return (
    <Card key={props.id} className="card">
      <Card.Header>Orçamento</Card.Header>
        <Card.Body>
          <Card.Title>Vendedor(a): {props.seller}</Card.Title>
          <Card.Title>Cliente: {props.customer}</Card.Title>
          <Card.Text>
            Valor: {props.value}
          </Card.Text>
          <Modal 
          description={props.description}
          />
        </Card.Body>
    </Card>
  );
}