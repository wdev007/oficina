import React from 'react';
import { Card } from 'react-bootstrap';

import Modal from '../modal';

export default function(props) {
  return (
    <Card key={props.id} className="card">
      <Card.Header>{props.description}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Modal />
        </Card.Body>
    </Card>
  );
}