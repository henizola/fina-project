import React, { useState } from 'react';

import { Container } from './post-calendar.styles';

import {
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

const PostCalendar = () => {
  const [type, settype] = useState('');
  return (
    <Container>
      <PrincipalSubNav />
      <div className="container">
        <h1>Broadcast</h1>
        <div className="upload">
          <Form.Control type="file" size="ls" />
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

              <FormControl aria-label="Last name" />
            </InputGroup>
          )}
        </div>
        <button className="post">Post</button>
      </div>
    </Container>
  );
};

export default PostCalendar;
