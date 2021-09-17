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
} from './sign-in.styles';

const SignIn = () => {
  const { role } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [wrong, setWrong] = useState(false);
  const history = useHistory();
  const handleSignin = () => {
    let link = '';
    role === 'student'
      ? (link = '/student-sign-in')
      : role === 'teachers'
      ? (link = '/teacher-sign-in')
      : role === 'parent'
      ? (link = '/parents-sign-in')
      : role === 'principal'
      ? (link = '/principal-sign-in')
      : (link = '/admin-sign-in');

    axios
      .post(`http://localhost:9000/api${link}`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setWrong(false);
        localStorage.setItem(
          'token',
          response.data.token
        );

        localStorage.setItem(
          'user',
          JSON.stringify(response.data.user)
        );

        console.log(
          'hereeeeee',
          response.data.user.first
        );
        if (!response.data.user.first) {
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
        } else {
          if (role === 'student') {
            history.push(
              '/change-password/student'
            );
          } else if (role === 'teachers') {
            history.push(
              '/change-password/teacher'
            );
          } else if (role === 'principal') {
            history.push(
              '/change-password/principal'
            );
          } else if (role === 'system-admin') {
            history.push(
              '/change-password/system-admin'
            );
          } else {
            history.push(
              '/change-password/parents'
            );
          }
        }
      })

      .catch(function (error) {
        setWrong(true);
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
          placeholder="Email"
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
          placeholder="Password"
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
          Sign In
        </button>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
