import MaterialTable from 'material-table';
import {
  default as React,
  useState,
} from 'react';
import {
  Form,
  InputGroup,
} from 'react-bootstrap';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './grade-archive.styles';

const GradeArchive = () => {
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
      field: 'subject',
      title: 'Subject',
      editable: 'never',
    },
    {
      field: 'semister1',
      editable: 'never',
      title: 'Firest Semister',
    },

    {
      field: 'semister2',
      title: `2nd Semister`,
      editable: 'never',
    },

    {
      field: 'average',
      title: `Average`,
      editable: 'never',
      render: (row) => (
        <div>
          {(row.semister1 + row.semister2) / 2}
        </div>
      ),
    },
  ];

  const [data, setData] = useState([
    {
      subject: ' Amharic',
      semister1: 81,
      semister2: 33,
    },

    {
      subject: ' English',
      semister1: 54,
      semister2: 89,
    },
    {
      subject: ' Biology',
      semister1: 64,
      semister2: 84,
    },
    {
      subject: ' Social',
      semister1: 63,
      semister2: 92,
    },
    {
      subject: ' Physics',
      semister1: 53,
      semister2: 77,
    },
    {
      subject: ' Chemistry',
      semister1: 37,
      semister2: 42,
    },
    {
      subject: ' HPE',
      semister1: 82,
      semister2: 91,
    },
  ]);
  return (
    <Container>
      <StudentSubNav />
      <h1>Mark List</h1>

      <Form.Select
        style={{
          width: '200px',
          margin: '0 auto',
        }}
      >
        <option value="notice">Garde 7</option>
        <option value="calendar">Grade 8</option>
        <option value="calendar">Grade 9</option>
        <option value="calendar">Grade 10</option>
      </Form.Select>

      <div className="table">
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

export default GradeArchive;
