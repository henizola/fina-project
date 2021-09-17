import React, { useState } from 'react';

import { Container } from './post-calendar.styles';

import {
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

import axios from 'axios';
import CompleteModal from '../../../components/completed-modal/completed-modal.component';

const PostCalendar = () => {
  const [type, settype] = useState('');
  const [date, setDate] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] =
    useState('');
  const [file, setFile] = useState(null);

  const [show, setShow] = useState(false);

  const post = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('date', date);
    formData.append('type', type);
    formData.append('description', description);
    formData.append('title', title);
    console.log(title, 'he');
    switch (type) {
      case 'calendar':
        axios
          .post(
            'http://localhost:9000/api/broadcast',
            formData
          )
          .then(function (response) {
            console.log(response);
            setShow(true);
          })
          .catch(function (error) {
            console.log(error);
            setShow(true);
          })
          .then(function () {});

        break;
      case 'notice':
        axios
          .post(
            'http://localhost:9000/api/broadcast',
            formData
          )
          .then(function (response) {
            console.log(response);
            setShow(true);
          })
          .catch(function (error) {
            console.log(error);
            setShow(true);
          })
          .then(function () {});

        break;
      case 'event':
        axios
          .post(
            'http://localhost:9000/api/add-event',
            formData
          )
          .then(function (response) {
            console.log(response);
            setShow(true);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {});

        break;

      default:
      // code block
    }
  };

  return (
    <Container>
      <PrincipalSubNav />
      <div className="container">
        <h1>Broadcast</h1>
        <div className="upload">
          <InputGroup>
            <InputGroup.Text>
              Notice Type
            </InputGroup.Text>
            <Form.Select
              style={{
                width: 'calc( 100% - 145px)',
              }}
              onChange={(e) =>
                settype(e.target.value)
              }
            >
              <option value="notice">
                Schoo Notice
              </option>
              <option value="calendar">
                School Calendar
              </option>
              <option value="event">
                Event Notice
              </option>
            </Form.Select>
          </InputGroup>
          <CompleteModal
            show={show}
            setShow={setShow}
          />
          {type === 'event' && (
            <InputGroup>
              <InputGroup.Text
                style={{ width: '100px' }}
              >
                Title
              </InputGroup.Text>

              <FormControl
                aria-label="Last name"
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />
            </InputGroup>
          )}
          <Form.Control
            type="file"
            size="ls"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          {type === 'event' && (
            <InputGroup>
              <InputGroup.Text
                style={{ width: '100px' }}
              >
                Date
              </InputGroup.Text>

              <FormControl
                aria-label="Last name"
                type="date"
                onChange={(e) =>
                  setDate(e.target.value)
                }
              />
            </InputGroup>
          )}
          {type === 'event' && (
            <InputGroup>
              <InputGroup.Text
                style={{ width: '100px' }}
              >
                Description
              </InputGroup.Text>

              <FormControl
                aria-label="Last name"
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />
            </InputGroup>
          )}
        </div>
        <button className="post" onClick={post}>
          Post
        </button>
      </div>
    </Container>
  );
};

export default PostCalendar;
