import React, { useState } from 'react';

import { Container } from './manage-sys-admin.style';

import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

import { Form } from 'react-bootstrap';

const ManageSysAdmin = () => {
  const [filterd, setFilterd] = useState([]);

  const filter = (e) => {
    setFilterd(
      admins.filter(
        (teacher) =>
          teacher.firstName
            .toLowerCase()
            .includes(
              e.target.value.toLowerCase()
            ) ||
          teacher.lastName
            .toLowerCase()
            .includes(
              e.target.value.toLowerCase()
            ) ||
          teacher.subject
            .toLowerCase()
            .includes(
              e.target.value.toLowerCase()
            )
      )
    );
    console.log(filterd);
  };
  const admins = [
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      status: 'Active',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      status: 'Active',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
  ];
  return (
    <Container>
      <PrincipalSubNav />
      <div className="top">
        <div>
          <input
            type="text"
            className="input"
            placeholder="Live Search"
            onChange={filter}
          />
        </div>
        <h1 className="header">
          Manage System Admin
        </h1>
        <Link to="/create-sys-admin">
          Create System Admin
        </Link>
      </div>
      <div className="cards">
        <div className="card">
          <h4>Name : Admin 1</h4>
          <div className="status">
            <h4>Status :</h4>
            <Form.Select>
              <option>Active</option>
              <option>Inactive</option>
            </Form.Select>
            <RiDeleteBin6Line />
            <button className="save">Save</button>
          </div>
        </div>
        <div className="card">
          <h2>Name : Admin 2</h2>
          <div className="status">
            <h2>Status :</h2>
            <Form.Select>
              <option>Active</option>
              <option>Inactive</option>
            </Form.Select>
            <RiDeleteBin6Line />
            <button className="save">Save</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ManageSysAdmin;
