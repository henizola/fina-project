import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CustomModal = (
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
          No
        </Button>
        {props.children}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
