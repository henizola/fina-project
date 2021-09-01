import MaterialTable from 'material-table';
import {
  default as React,
  useState,
} from 'react';
import { Form } from 'react-bootstrap';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './mark-list.styles';

const MarkList = () => {
  const [filterd, setFilterd] = useState([]);
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(
  //   2,
  //   '0'
  // );
  // var mm = String(today.getMonth() + 1).padStart(
  //   2,
  //   '0'
  // ); //January is 0!
  // var yyyy = String(today.getFullYear()).slice(
  //   2,
  //   4
  // );

  const columns = [
    {
      field: 'name',
      title: 'Full  Name',
      editable: 'never',
    },
    {
      field: 'id',
      editable: 'never',
      title: 'Id',
    },

    {
      field: 'today',
      title: `15%`,
    },
    {
      field: 'today',
      title: ` 15%`,
    },
    {
      field: 'today',
      title: `10%`,
    },
    {
      field: 'today',
      title: ` 10%`,
    },
    {
      field: 'today',
      title: ` 50%`,
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
      <h1>Mark list</h1>

      <Form.Select
        style={{
          width: '200px',
          margin: '0 auto',
        }}
      >
        <option value="notice">Garde 7B</option>
        <option value="calendar">Grade 7D</option>
        <option value="calendar">Grade 8C</option>
        <option value="calendar">Grade 8D</option>
      </Form.Select>

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

export default MarkList;
