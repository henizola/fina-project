import React, { useContext } from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import Nav from '../Nav/Nav.component';
import { BsBellFill } from 'react-icons/bs';

import { Form } from 'react-bootstrap';
import { UserContext } from '../../context/user.context';

const StudentSubNav = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  return (
    <Nav role={'System Admin'}>
      <Link to="/student-attendance">
        Attendance
      </Link>
      <Link to="/grade-archive">
        Grade Archive
      </Link>
      <Link to="/grade-report">Grade Report</Link>
      <a
        href="/school-calendar-2020-2021.pdf"
        download
      >
        School Calendar
      </a>
      <Link to="/exams">Exams</Link>
      <Link to="/events">Events</Link>
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
          localStorage.clear();
          history.push('/');
        }}
      >
        <option>
          Logged in as :{' '}
          {
            JSON.parse(
              localStorage.getItem('user')
            ).email
          }
        </option>
        <option>Log Out</option>
      </Form.Select>
      <BsBellFill />
    </Nav>
  );
};
export default StudentSubNav;
