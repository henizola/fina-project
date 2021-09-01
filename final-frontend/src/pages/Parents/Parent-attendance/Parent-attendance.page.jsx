import MaterialTable from 'material-table';
import {
  default as React,
  useState,
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

  const columns = [
    {
      field: 'date',
      title: 'Date',
      editable: 'never',
    },
    {
      field: 'remark',
      title: 'Remark',
      editable: 'never',
      render: (row) => (
        <div
          style={{
            backgroundColor: `${
              row.remark ? 'red' : 'none'
            }`,
          }}
        >
          {row.remark ? 'Absent' : 'Present'}
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
