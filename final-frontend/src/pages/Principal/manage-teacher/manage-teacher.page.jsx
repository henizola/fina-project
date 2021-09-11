import MaterialTable, {
  MTableEditField,
} from 'material-table';
import React, {
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';
import { Container } from './manage-teacher';

import axios from 'axios';

const ManageTeacher = () => {
  const [filterd, setFilterd] = useState([]);

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    async function fetchTeachers() {
      axios
        .post(
          'http://localhost:9000/api/get-teachers'
        )
        .then(function (response) {
          console.log(response.data);

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

          setTeachers(teachers);
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
    {
      field: 'homeRoom[0].grade',
      title: 'Home Room',
      width: 10,
    },
    {
      field: 'classTeach',
      title: 'Class To Teach',
    },
  ];

  return (
    <Container>
      <PrincipalSubNav />
      <div className="top">
        <Link to="create-teacher">
          Create Teacher
        </Link>
        <div></div>
        <h1 className="header">
          Manage Teachers
        </h1>

        <Link to="create-teacher">
          Manage Homeroom
        </Link>
        <Link to="create-teacher">
          Manage Class To Teach
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

export default ManageTeacher;
