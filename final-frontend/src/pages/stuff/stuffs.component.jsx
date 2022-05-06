import React from "react";
import { Container } from "./stuffs.styles";

import logo from "../../assets/logo.png";
import admin from "../../assets/admin.jpg";
import principal from "../../assets/principal.jpg";
import { Link } from "react-router-dom";

const Stuff = () => {
  return (
    <Container>
      <img src={logo} alt="logo" className="logo" />
      <h1 className="header">Log in As</h1>
      <div className="roles-container">
        <Link to="/sign-in/principal" className="role">
          <img src={principal} alt="parent" className="role-img" />
          <h1 className="role-name">Principal</h1>
        </Link>
        <Link to="/sign-in/system-admin" className="role">
          <img src={admin} alt="parent" className="role-img" />
          <h1 className="role-name" style={{ width: "270px" }}>
            System Admin
          </h1>
        </Link>
      </div>
    </Container>
  );
};

export default Stuff;
