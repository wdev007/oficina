import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function(props) {
  const [show, setShow] = useState(false);

  return (
    <>
    <Button variant="primary" onClick={() => setShow(true)}>
      ver detalhes
    </Button>

    <Modal show={show} onHide={() => setShow(false)}>

      <Modal.Header closeButton>
        <Modal.Title>Descrição</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.description}</Modal.Body>

      <Modal.Footer>

        <Button variant="primary" onClick={() => setShow(false)}>
          Ok
        </Button>
        
      </Modal.Footer>

    </Modal>
  </>
  );
}