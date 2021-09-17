import React, {
  useState,
  useEffect,
} from 'react';

import { Container } from './manage-sys-admin.style';

import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

import { Form } from 'react-bootstrap';

import axios from 'axios';
import MaterialTable, {
  MTableEditField,
} from 'material-table';

const ManageSysAdmin = () => {
  const [filterd, setFilterd] = useState([]);

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      axios
        .post(
          'http://localhost:9000/api/get-admins'
        )
        .then(function (response) {
          setTeachers(response.data);

          const teachers = [];

          let cls = '';

          response.data.map((teach) => {
            teach.classToTeach.map((clss) =>
              cls.concat(
                `${clss.grade} ${teach.classToTeach[1].section}`
              )
            );
            teachers.push({
              firstName: teach.firstName,
              lastName: teach.lastName,
              middleName: teach.middleName,
              subject: teach.subject,
              phone: teach.phone,
              email: teach.email,
              homeRoom: teach.homeRoom,
              classTeach: teach.classToTeach.map(
                (clss) =>
                  `${clss.grade}${teach.classToTeach[1].section} ,`
              ),
            });
          });

          setTeachers(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    }
    fetchTeachers();
  }, []);

  const columns = [
    {
      field: 'fullName',
      title: 'First name',
      editable: false,
    },
    {
      field: 'phone',
      title: 'Phone No',
    },
    {
      field: 'email',
      title: 'Email',
    },
  ];

  return (
    <Container>
      <PrincipalSubNav />
      <div className="top">
        <div></div>
        <h1 className="header">
          Manage System Admin
        </h1>
        <Link to="/create-sys-admin">
          Create System Admin
        </Link>
      </div>
      <div className="table">
        <MaterialTable
          columns={columns}
          data={teachers}
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
                let updatedRows = [...teachers];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setTeachers(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...teachers];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  setTeachers(updatedRows);
                  resolve();
                }, 2000);
              }),
            onBulkUpdate: (selectedRows) =>
              new Promise((resolve, reject) => {
                const rows =
                  Object.values(selectedRows);
                const updatedRows = [...teachers];
                let index;
                rows.map((emp) => {
                  index =
                    emp.oldData.tableData.id;
                  updatedRows[index] =
                    emp.newData;
                });
                setTeachers(updatedRows);
                resolve();
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
          }}
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

export default ManageSysAdmin;
