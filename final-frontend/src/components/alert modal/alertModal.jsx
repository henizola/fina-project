import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AlertModal = (
  { message, handleClose, show },
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
        <Button
          variant="success"
          onClick={handleClose}
        >
          Ok
        </Button>
        {props.children}
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
