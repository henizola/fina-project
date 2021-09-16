import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CustomModal = (
  { message, handleClose, show, next },
  props
) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      style={{ marginTop: '40vh' }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{message}</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="success" onClick={next}>
          yes
        </Button>
        <Button
          variant="danger"
          onClick={handleClose}
        >
          No
        </Button>
        {props.children}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
