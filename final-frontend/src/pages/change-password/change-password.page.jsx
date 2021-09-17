import axios from 'axios';
import React, { useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  Container,
  FormContainer,
} from './change-password.styles';

const ChangePassword = () => {
  const { role } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [wrong, setWrong] = useState(false);
  const history = useHistory();
  const handleSignin = () => {
    let link = '';
    role === 'student'
      ? (link = '/student-change-password')
      : role === 'teachers'
      ? (link = '/teacher-change-password')
      : role === 'parent'
      ? (link = '/parents-change-password')
      : role === 'principal'
      ? (link = '/principal-change-password')
      : role === 'system-admin' &&
        (link = '/change-admin-password');
    console.log(
      JSON.parse(localStorage.getItem('user'))
        ._id,
      'here'
    );
    axios
      .post(`http://localhost:9000/api${link}`, {
        id: JSON.parse(
          localStorage.getItem('user')
        )._id,
        password: password,
      })
      .then(function (response) {
        if (role === 'student') {
          history.push('/student-attendance');
        } else if (role === 'teachers') {
          history.push('/attendance');
        } else if (role === 'principal') {
          history.push('/manage-teachers');
        } else if (role === 'system-admin') {
          history.push('/Create-profile');
        } else {
          history.push('/parent-attendance');
        }
      })

      .catch(function (error) {
        alert('true');
      });
  };
  return (
    <Container>
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
      <FormContainer>
        <input
          type="text"
          className="input"
          placeholder="New Password"
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            border: `${
              wrong ? '2px solid red' : null
            }`,
          }}
        />
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            border: `${
              wrong ? '2px solid red' : null
            }`,
            marginBottom: '50px',
          }}
        />
        <button
          onClick={handleSignin}
          className="default"
        >
          Approve
        </button>
      </FormContainer>
    </Container>
  );
};

export default ChangePassword;
