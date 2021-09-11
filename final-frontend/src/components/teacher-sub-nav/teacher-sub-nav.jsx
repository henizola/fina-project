import React from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import Nav from '../Nav/Nav.component';
import { BsBellFill } from 'react-icons/bs';

import { Form } from 'react-bootstrap';

const TeacherSubNav = () => {
  const history = useHistory();
  return (
    <Nav role={'System Admin'}>
      <Link to="/attendance">Attendance</Link>
      <Link to="/post-exam">
        Post Exam and quiz date
      </Link>
      <Link to="/student-search">
        Search for student{' '}
      </Link>
      <Link to="/mark-list">Mark List</Link>

      <Form.Select
        style={{
          width: '200px',
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0',
          margin: '0',
          color: '#f79e01',
          marginLeft: '50px',
        }}
        onChange={(e) => {
          e.preventDefault();
          history.push('/');
        }}
      >
        <option>
          Logged in as :{' '}
          {localStorage.getItem('userName')}
        </option>
        <option>Log Out</option>
      </Form.Select>
      <BsBellFill />
    </Nav>
  );
};
export default TeacherSubNav;
