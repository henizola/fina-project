import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';

import complete from '../../assets/right.png';
import { Container } from './completed.styles';

const CompleteModal = ({ show, setShow }) => {
  setTimeout(() => setShow(false), 2000);

  console.log('bruhhhhh', show);

  return (
    <Container>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{
          top: '300px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          padding: '0',
          backgroundColor:
            'transparent!important',
        }}
      >
        <Modal.Header
          style={{
            padding: '0',
            backgroundColor: 'rgb (0,0,0,)',
            width: '50px',
          }}
        >
          <Modal.Title
            style={{
              width: '50vw',
              backgroundColor:
                'transparent!important',
              border: 'none',
            }}
          >
            <img
              src={complete}
              alt=""
              style={{
                width: '400px',
                borderRadius: '0%',
                backgroundColor:
                  'transparent!important',
              }}
            />
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </Container>
  );
};
export default CompleteModal;
