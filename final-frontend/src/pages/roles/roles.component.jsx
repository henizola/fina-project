import React from 'react';
import { Container } from './roles.styles';

import logo from '../../assets/logo.png';
import parent from '../../assets/icon-for-family-8.jpg';
import student from '../../assets/students-icon-4.jpg';
import teachers from '../../assets/teacher-icon-png-16 (1).jpg';
import stuff from '../../assets/staff-icon-15.jpg';
import { Link } from 'react-router-dom';

const Roles = () => {
  return (
    <Container>
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
      <h1 className="header">Log in As</h1>
      <div className="roles-container">
        <Link
          to="/sign-in/parent"
          className="role"
        >
          <img
            src={parent}
            alt="parent"
            className="role-img"
          />
          <h1 className="role-name">Parent</h1>
        </Link>
        <Link
          to="/sign-in/student"
          className="role"
        >
          <img
            src={student}
            alt="parent"
            className="role-img"
          />
          <h1 className="role-name">Student</h1>
        </Link>
        <Link
          to="/sign-in/teachers"
          className="role"
        >
          <img
            src={teachers}
            alt="parent"
            className="role-img"
          />
          <h1 className="role-name">Teachers</h1>
        </Link>
        <Link to="/staff" className="role">
          <img
            src={stuff}
            alt="parent"
            className="role-img"
          />
          <h1 className="role-name">Stuff</h1>
        </Link>
      </div>
    </Container>
  );
};

export default Roles;
