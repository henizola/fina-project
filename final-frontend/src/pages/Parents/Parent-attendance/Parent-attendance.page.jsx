import axios from 'axios';
import MaterialTable from 'material-table';
import {
  default as React,
  useState,
  useEffect,
} from 'react';
import ParentSubNav from '../../../components/parent-sub-nav/parent-sub-nav.component';
import { Container } from './Parent-attendance.styles';

const ParentAttendance = () => {
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

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-student-attendance',
          {
            id: JSON.parse(
              localStorage.getItem('user')
            ).childId,
          }
        )
        .then(function (response) {
          console.log(response.data, 'ddddd');

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
          console.log(tem, 'tem');
          setData(tem);
        })

        .catch(function (error) {
          if (error.response) {
            console.log(
              error.response.data.detail
            );
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
            : 'Present'}
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
  return (
    <Container>
      <ParentSubNav />
      <h1>Attendance</h1>

      <div className="table">
        <div className="desc">
          <h3>
            Days Absent In the past month: 2{' '}
          </h3>
          <h3>Total Days Absent : 3</h3>
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

export default ParentAttendance;
