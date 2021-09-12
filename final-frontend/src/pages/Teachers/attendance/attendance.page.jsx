import MaterialTable, {
  MTableEditField,
} from 'material-table';
import {
  default as React,
  useState,
  useEffect,
  useContext,
} from 'react';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './attendance.styles';

import axios from 'axios';

import { UserContext } from '../../../context/user.context';

const Attendance = () => {
  const [data, setData] = useState([]);
  let combination = [];

  const { user } = useContext(UserContext);

  // var patt2 = /[a-zA-Z]/g;

  // console.log(
  //   user.homeRoom[0].grade.match(patt2)[0],
  //   'jhsgdfjkasgdjfhgs'
  // );

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-attendance',
          {
            grade: JSON.parse(
              localStorage.getItem('user')
            ).homeRoom[0].grade,
            section: JSON.parse(
              localStorage.getItem('user')
            ).homeRoom[0].section,
          }
        )
        .then(function (response) {
          response.data.map((d, index) => {
            d.attendance.map(
              (r) =>
                r.remark === 'A' &&
                combination.push({ index, r })
            );
          });
          const newData = [];

          response.data.map((d, index) => {
            newData.push({
              fullName: `${d.firstName} ${d.middleName}`,
              daysAbsent: combination.filter(
                (com) => com.index === index
              ).length,
            });
          });

          setData(newData);
        })

        .catch(function (error) {
          if (error.response) {
            alert(error.response.data.detail);
          }
          console.log('henok', error);
        })
        .then(function () {
          // always executed
          console.log(data);
        });
    };
    login();
  }, []);
  var today = new Date();
  var dd = String(today.getDate()).padStart(
    2,
    '0'
  );
  var mm = String(today.getMonth() + 1).padStart(
    2,
    '0'
  ); //January is 0!
  var yyyy = String(today.getFullYear()).slice(
    2,
    4
  );

  const columns = [
    {
      field: 'fullName',
      title: 'Full  Name',
      editable: 'never',
    },
    {
      field: 'daysAbsent',
      editable: 'never',
      title: 'Days Absent',
    },

    {
      field: 'today',
      title: ` ${mm} / ${dd - 4} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd - 3} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd - 2} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd - 1} / ${yyyy}`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'today',
      title: ` ${mm} / ${dd} / ${yyyy}`,
      editable:
        today !== today ? 'never' : 'always',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
  ];

  return (
    <Container>
      <TeacherSubNav />
      <h1>Attendance</h1>

      <div className="table">
        <MaterialTable
          columns={columns}
          data={data}
          title=""
          disableSelectionOnClick
          editable={{
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
          style={{ boxShadow: 'none' }}
        />
      </div>
    </Container>
  );
};

export default Attendance;
