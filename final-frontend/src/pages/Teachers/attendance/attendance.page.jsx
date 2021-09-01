import MaterialTable, {
  MTableEditField,
} from 'material-table';
import {
  default as React,
  useState,
} from 'react';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './attendance.styles';

const Attendance = () => {
  const [filterd, setFilterd] = useState([]);
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
      field: 'name',
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

  const [data, setData] = useState([
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 1,
    },
    {
      id: 1,
      name: ' Jon Snow',
      daysAbsent: 2,
      today: 0,
    },
  ]);
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
