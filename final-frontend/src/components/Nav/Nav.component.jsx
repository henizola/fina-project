import React from 'react';

import { Container } from './Nav.styles';

import logo from '../../assets/logo.png';

const Nav = (props) => {
  return (
    <Container>
      <div>
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
      </div>

      <div className="links">
        {props.children}
      </div>
    </Container>
  );
};

export default Nav;
