import axios from 'axios';
import React, {
  useEffect,
  useState,
} from 'react';
import { Form } from 'react-bootstrap';
import { BsBellFill } from 'react-icons/bs';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import Nav from '../Nav/Nav.component';

const StudentSubNav = () => {
  const history = useHistory();
  const [file, setFile] = useState('');

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-school-calendar'
        )
        .then(function (response) {
          setFile(
            `http://localhost:9000/${response.data[0].file}`
          );
        })

        .catch(function (error) {
          if (error.response) {
            console.login(
              error.response.data.detail
            );
          }
        })
        .then(function () {
          // always executed
        });
    };
    login();
  }, []);

  return (
    <Nav role={'System Admin'}>
      <Link to="/student-attendance">
        Attendance
      </Link>
      <Link to="/grade-archive">
        Grade Archive
      </Link>
      <Link to="/grade-report">Grade Report</Link>
      <a href={file} download>
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
