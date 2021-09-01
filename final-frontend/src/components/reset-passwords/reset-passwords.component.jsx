import React, { useState } from 'react';

import { Container } from './reset-passwords.styles';

import { FcSearch } from 'react-icons/fc';

import { BiReset } from 'react-icons/bi';
import CustomModal from '../modal/modal.component';
import { Button } from 'react-bootstrap';

const ResetPassword = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <h1>Reset Password</h1>
      <div className="cont">
        <div className="left">
          <input
            type="text"
            className="input"
            placeholder="User ID"
          />
          <FcSearch
            style={{
              fontSize: '33px',
            }}
          />

          <button className="find">
            Find User
          </button>
        </div>
        <div className="right">
          <span>Name : Henok Zelalem</span>
          <span>Phone : +2519 253 5132</span>
          <span>Account Type: Parent</span>
          <button
            className="export"
            onClick={handleShow}
          >
            Reset To Default{' '}
            <BiReset
              style={{
                color: '#fa9e00',
                fontSize: '20px',
                marginLeft: '10px',
              }}
            />
          </button>
        </div>
        <CustomModal
          handleClose={handleClose}
          handleShow={handleShow}
          show={show}
          message={'Are You Sure ? '}
        >
          <Button
            variant="danger"
            onClick={handleClose}
          >
            Yes
          </Button>
        </CustomModal>
      </div>
    </Container>
  );
};

export default ResetPassword;
