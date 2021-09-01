import React, { Fragment } from 'react';

import { Container } from './create-account.styles';
import { IoMdContact } from 'react-icons/io';

import { Form } from 'react-bootstrap';
const CreateAccount = ({ type }) => {
  return (
    <Container>
      <h1>Create Profile for {type}</h1>
      <IoMdContact
        style={{ fontSize: '100px' }}
      />
      <div className="form">
        <span>Name :</span>
        <input type="text" className="input" />
        <span>Phone :</span>
        <input type="text" className="input" />
        <span>Email :</span>
        <input type="text" className="input" />

        {type !== 'Students' ? null : (
          <Fragment>
            <span>Role :</span>
            <Form.Select>
              <option>Student</option>
              <option>Parent</option>
              <option>Teacher</option>
            </Form.Select>
          </Fragment>
        )}
      </div>
      <button className="default">
        Create Profile
      </button>
    </Container>
  );
};

export default CreateAccount;
