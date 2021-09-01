import React from 'react';

import {
  Container,
  FormContainer,
} from './sign-in.styles';

import {
  Link,
  useParams,
} from 'react-router-dom';

import logo from '../../assets/logo.png';

const SignIn = () => {
  const { role } = useParams();
  console.log(role);
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
        />
        <input
          type="text"
          className="input"
          placeholder="Password"
          style={{ marginBottom: '50px' }}
        />
        <Link
          to={
            role === 'parent'
              ? '/parnts-attendance'
              : role === 'stuff'
              ? '/create-profile'
              : role === 'teachers'
              ? '/attendance'
              : '/student-attendance'
          }
          className="default"
        >
          Sign In
        </Link>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
