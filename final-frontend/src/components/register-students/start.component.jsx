import React from 'react';

import { Container } from './start.style';

const Start = ({ onNext }) => {
  return (
    <Container>
      <div
        className="sign-btn"
        onClick={() => onNext()}
      >
        <img
          className="icon"
          alt="message"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"
        />
        <span className="txts">
          Sign in with email
        </span>
      </div>
      <div
        className="sign-btn"
        onClick={() => onNext()}
      >
        <img
          className="icon"
          alt="message"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        />
        <span className="txts">
          Sign in with google
        </span>
      </div>
    </Container>
  );
};
export default Start;
