import axios from 'axios';
import MaterialTable from 'material-table';
import {
  default as React,
  useContext,
  useEffect,
  useState,
} from 'react';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { UserContext } from '../../../context/user.context';
import { Container } from './attendance.styles';

const Attendance = () => {
  const [data, setData] = useState([
    {
      fullName: 'henok',
      monday: 0,
      tuesday: 1,
      wednesday: 1,
      thursday: 0,
      friday: 0,
    },
    {
      fullName: 'kalab',
      monday: 1,
      tuesday: 1,
      wednesday: 1,
      thursday: 1,
      friday: 0,
    },
  ]);

  const { user } = useContext(UserContext);

  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api//get-attendance',
          {
            grade: 8,
            section: 'B',
          }
        )
        .then(function (response) {
          setData(response.data);
        })

        .catch(function (error) {
          if (error.response) {
            console.log(
              error.response.data.detail
            );
          }
        })
        .then(function () {
          // always executed
          console.log(data);
        });
    };
    login();
  }, [updated]);
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
      render: (row) => (
        <div>
          {5 -
            (row.monday +
              row.tuesday +
              row.thursday +
              row.wednesday +
              row.wednesday)}
        </div>
      ),
    },

    {
      field: 'monday',
      title: ` Monday`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'tuesday',
      title: ` Tuesday`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'wednesday',
      title: ` Wednesday`,
      editable: 'never',
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'thursday',
      title: `Thursday`,
      editable: true,
      lookup: { 1: 'Present', 0: 'Absent' },
    },
    {
      field: 'friday',
      title: ` Friday`,
      editable:
        today !== today ? 'never' : 'always',
      lookup: {
        1: 'Present',
        0: 'Absent',
        null: '-',
      },
    },
  ];

  const save = (result) => {
    console.log(result[0]['monday']);
    result.map((row) =>
      axios
        .post(
          'http://localhost:9000/api/update-attendance',
          {
            id: row.id,
            monday: parseInt(row.monday),
            tuesday: parseInt(row.tuesday),
            wednesday: parseInt(row.wednesday),
            thursday: parseInt(row.thursday),
            friday: parseInt(row.friday),
          }
        )
        .then(function (response) {
          console.log(response.data);
          setUpdated(!updated);
        })
        .catch((err) => console.log(err))
    );
  };

  return (
    <Container>
      <TeacherSubNav />
      <h1>Attendance</h1>

      <div className="table">
        <h5>
          Date: {dd}/{mm}/{yyyy}
        </h5>
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
                save(updatedRows);
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
