import React from "react";

import { Link, useHistory } from "react-router-dom";

import Nav from "../Nav/Nav.component";
import { BsBellFill } from "react-icons/bs";

import { Form } from "react-bootstrap";

const AdminSubNav = () => {
  const history = useHistory();
  return (
    <Nav role={"System Admin"}>
      <Link to="/Create-profile">Create Profile</Link>
      <Link to="/Create-profile">Manage Sections</Link>
      <Link to="/generate-transcript">Generate transcript</Link>
      <Link to="/reset-password">Reset Passwords</Link>
      <Form.Select
        style={{
          width: "200px",
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
          margin: "0",
          color: "#f79e01",
          marginLeft: "50px",
        }}
        onChange={(e) => {
          e.preventDefault();
          localStorage.clear();
          history.push("/");
        }}
      >
        <option>
          Logged in as : {JSON.parse(localStorage.getItem("user")).email}{" "}
        </option>
        <option>Log Out</option>
      </Form.Select>
      <BsBellFill />
    </Nav>
  );
};
export default AdminSubNav;
