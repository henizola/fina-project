import React, { useState } from 'react';
import {
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './post-exam-date.styles';

const PostExam = () => {
  const [type, settype] = useState('');
  return (
    <Container>
      <TeacherSubNav />
      <div className="container">
        <h1>Post Exam</h1>
        <div className="upload">
          <InputGroup>
            <InputGroup.Text>
              Exam Type
            </InputGroup.Text>
            <Form.Select
              style={{
                width: 'calc( 100% - 145px)',
              }}
              onChange={(e) =>
                settype(e.target.value)
              }
              value={type}
            >
              <option value="notice">Quiz</option>
              <option value="calendar">
                Test
              </option>
            </Form.Select>
          </InputGroup>

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

          <InputGroup>
            <InputGroup.Text
              style={{ width: '100px' }}
            >
              Chapters
            </InputGroup.Text>

            <FormControl aria-label="Last name" />
          </InputGroup>
        </div>
        <button className="post">Post</button>
      </div>
    </Container>
  );
};

export default PostExam;
