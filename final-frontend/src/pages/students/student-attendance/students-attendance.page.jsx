import MaterialTable from 'material-table';
import {
  default as React,
  useState,
  useEffect,
} from 'react';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import { Container } from './students-attendance.styles';

import axios from 'axios';

const StudentAttendance = () => {
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

  const [abs, setAbs] = useState(null);

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-student-attendance',
          {
            id: JSON.parse(
              localStorage.getItem('user')
            )._id,
          }
        )
        .then(function (response) {
          const temp = 0;

          var d = [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
          ];
          console.log(d);

          const tem = [];

          d.map((d) => {
            tem.push({
              date: d,
              remark: response.data[d],
            });
          });

          setData(tem);
          setAbs(temp);
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

  const columns = [
    {
      field: 'date',
      title: 'Date',
      editable: 'never',
    },
    {
      field: 'tuesday',
      title: 'Remark',
      editable: 'never',
      render: (row) => (
        <div
          style={{
            backgroundColor: `${
              row.remark === 0 ? 'red' : 'white'
            }`,
          }}
        >
          {row.remark === 0
            ? 'Absent'
            : row.remark === null
            ? '-'
            : 'Present'}
        </div>
      ),
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      date: `${dd}/${mm}/${yyyy}`,
      remark: 1,
    },
    {
      id: 2,
      date: `${dd - 1}/${mm}/${yyyy}`,
      remark: 0,
    },
    {
      id: 3,
      date: `${dd - 2}/${mm}/${yyyy}`,
      remark: 0,
    },
    {
      id: 4,
      date: `${dd - 3}/${mm}/${yyyy}`,
      remark: 1,
    },
    {
      id: 5,
      date: `${dd - 4}/${mm}/${yyyy}`,
      remark: 0,
    },
    {
      id: 3,
      date: `${dd - 6}/${mm}/${yyyy}`,
      remark: 0,
    },
    {
      id: 4,
      date: `${dd - 7}/${mm}/${yyyy}`,
      remark: 1,
    },
    {
      id: 5,
      date: `${dd - 8}/${mm}/${yyyy}`,
      remark: 0,
    },
  ]);
  return (
    <Container>
      <StudentSubNav />
      <h1>Attendance</h1>

      <div className="table">
        <div className="desc">
          <h3>
            Days Absent In the past month: {abs}
          </h3>
        </div>

        <MaterialTable
          columns={columns}
          data={data}
          title=""
          disableSelectionOnClick
          options={{ actionsColumnIndex: -1 }}
          style={{ boxShadow: 'none' }}
        />
      </div>
    </Container>
  );
};

export default StudentAttendance;
