import axios from 'axios';
import React, { useState } from 'react';
import {
  useParams,
  useHistory,
} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  Container,
  FormContainer,
} from './sign-in.styles';

const SignIn = () => {
  const { role } = useParams();
  console.log(role);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [wrong, setWrong] = useState(false);
  const history = useHistory();
  const handleSignin = () => {
    let link = '';
    role === 'student'
      ? (link = '/student-sign-in')
      : (link = '/teacher-sign-in');
    axios
      .post(`http://localhost:9000/api/${link}`, {
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
          'id',
          response.data.id
        );
        localStorage.setItem(
          'userName',
          response.data.userName
        );
        console.log(response.data);
        if (role === 'student') {
          history.push('/student-attendance');
        } else if (role === 'teachers') {
          history.push('/attendance');
        }
      })

      .catch(function (error) {
        setWrong(true);
      })
      .then(
        console.log(localStorage.getItem('token'))
      );
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
          type="text"
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
