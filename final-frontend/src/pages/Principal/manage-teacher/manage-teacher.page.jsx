import React, { useState } from 'react';

import { Container } from './manage-teacher';

import { Link } from 'react-router-dom';

import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

import MaterialTable, {
  MTableEditField,
} from 'material-table';

const ManageTeacher = () => {
  const [filterd, setFilterd] = useState([]);
  const columns = [
    {
      field: 'firstName',
      title: 'First name',
    },
    {
      field: 'lastName',
      title: 'Last name',
    },
    {
      field: 'subject',
      title: 'Subject',
    },
    {
      field: 'phone',
      title: 'Phone No',
    },
    {
      field: 'email',
      title: 'Email',
    },
    // {
    //   field: 'homeroom',
    //   title: 'Home Room',
    //   width: 10,
    // },
    {
      field: 'classTeach',
      title: 'Class To Teach',
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      subject: 'English',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      subject: 'Biology',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      subject: 'Geography',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 4,
      lastName: 'Stark',
      firstName: 'Arya',
      age: 16,
      subject: 'Sport',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      age: null,
      subject: 'Amharic',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 6,
      lastName: 'Melisandre',
      firstName: 'Lanster',
      age: 150,
      subject: 'Spoken',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      subject: 'Geography',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      subject: 'Geography',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
    {
      id: 9,
      lastName: 'Roxie',
      firstName: 'Harvey',
      subject: 'Geography',
      email: 'Snow@gmail.com',
      phone: '+251 912-145-345',
    },
  ]);
  return (
    <Container>
      <PrincipalSubNav />
      <div className="top">
        <div></div>
        <h1 className="header">
          Manage Teachers
        </h1>
        <Link to="create-teacher">
          Create Teacher
        </Link>
      </div>
      <div className="table">
        <MaterialTable
          columns={columns}
          data={data}
          disableSelectionOnClick
          title=""
          editable={{
            onRowAdd: () =>
              new Promise(
                (resolve, reject) => {}
              ),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const index =
                  selectedRow.tableData.id;
                let updatedRows = [...data];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...data];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onBulkUpdate: (selectedRows) =>
              new Promise((resolve, reject) => {
                const rows =
                  Object.values(selectedRows);
                const updatedRows = [...data];
                let index;
                rows.map((emp) => {
                  index =
                    emp.oldData.tableData.id;
                  updatedRows[index] =
                    emp.newData;
                });
                setData(updatedRows);
                resolve();
              }),
          }}
          options={{ actionsColumnIndex: -1 }}
          components={{
            MTableEditField: (props) => (
              <div
                style={{
                  border: '2px solid red',
                }}
              >
                <MTableEditField {...props} />
              </div>
            ),
          }}
        />
      </div>
    </Container>
  );
};

export default ManageTeacher;
