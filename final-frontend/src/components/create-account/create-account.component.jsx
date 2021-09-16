import React, { Fragment, useState } from 'react';

import { Container } from './create-account.styles';
import { IoMdContact } from 'react-icons/io';

import { Form } from 'react-bootstrap';

import axios from 'axios';
import AlertModal from '../alert modal/alertModal';

import { useHistory } from 'react-router-dom';
const CreateAccount = (
  { type, onNext, onPrev },
  props
) => {
  const history = useHistory();
  const [firstName, setfirstName] = useState('');
  const [middleName, setmiddleName] =
    useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');
  const [phone, setphone] = useState('');
  const [alert, setAlert] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  console.log(type);
  const save = (e) => {
    e.preventDefault();
    switch (type) {
      case 'Teachers':
        axios
          .post(
            'http://localhost:9000/api/create-teacher',
            {
              firstName: firstName,
              middleName: middleName,
              lastName: lastName,
              phone: phone,
              email: email,
              subject: subject,
            }
          )
          .then(function (response) {
            history.push('/manage-teachers');
          })
          .catch(function (error) {
            console.log('err');
            setShow(true);

            setAlert(error.response.data);
          })
          .then(function () {});

        break;
      case 'System Admin':
        axios
          .post(
            'http://localhost:9000/api/create-system-admin',
            {
              firstName: firstName,
              middleName: middleName,
              lastName: lastName,
              phone: phone,
              email: email,
            }
          )
          .then(function (response) {
            history.push('/manage-teachers');
          })
          .catch(function (error) {
            setShow(true);

            setAlert(error.response.data);
          })
          .then(function () {});

        break;

      default:
      // code block
    }
  };

  return (
    <Container
      style={{
        margin: `${
          type !== 'student' ||
          (type !== 'parents' && '30px auto')
        }`,
      }}
    >
      {type !== 'student' &&
        type !== 'parents' && (
          <h1>Create Profile for {type}</h1>
        )}
      <IoMdContact
        style={{ fontSize: '100px' }}
      />
      <AlertModal
        show={show}
        message={alert}
        handleClose={handleClose}
      />
      <form onSubmit={save}>
        <div className="form">
          <span>First Name :</span>
          <input
            required
            type="text"
            className="input"
            onChange={(e) =>
              setfirstName(e.target.value)
            }
          />
          <span>Middle Name :</span>
          <input
            required
            type="text"
            className="input"
            onChange={(e) =>
              setmiddleName(e.target.value)
            }
          />
          <span>Last Name :</span>
          <input
            type="text"
            required
            className="input"
            onChange={(e) =>
              setlastName(e.target.value)
            }
          />
          <span>Phone :</span>
          <input
            type="text"
            className="input"
            required
            onChange={(e) =>
              setphone(e.target.value)
            }
          />
          <span>Email :</span>
          <input
            type="text"
            className="input"
            required
            onChange={(e) =>
              setemail(e.target.value)
            }
            required
          />
          {type === 'Teachers' && (
            <span>Subject :</span>
          )}
          {type === 'Teachers' && (
            <Fragment>
              <Form.Select
                onChange={(e) =>
                  setsubject(e.target.value)
                }
              >
                <option>Amharic</option>
                <option>English</option>
                <option>Biology</option>
                <option>Chemistry</option>
                <option>Social</option>
                <option>Physics</option>
              </Form.Select>
            </Fragment>
          )}

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
        <button className="default" type="submit">
          Create Profile
        </button>
      </form>
    </Container>
  );
};

export default CreateAccount;
