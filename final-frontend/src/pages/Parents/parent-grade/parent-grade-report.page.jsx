import MaterialTable from 'material-table';
import {
  default as React,
  useState,
} from 'react';
import { Form } from 'react-bootstrap';
import ParentSubNav from '../../../components/parent-sub-nav/parent-sub-nav.component';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './parent-grade-report.styles';

const ParentGradeReport = () => {
  const [filterd, setFilterd] = useState([]);

  const columns = [
    {
      field: 'subject',
      title: 'Subject',
      editable: 'never',
    },

    {
      field: 'test1',
      title: `15%`,
    },
    {
      field: 'test2',
      title: ` 10%`,
    },
    {
      field: 'mid',
      title: `25%`,
    },
    {
      field: 'final',
      title: ` 50%`,
    },
    {
      field: 'total',
      title: ` 100%`,
    },
  ];

  const [data, setData] = useState([
    {
      subject: ' Amharic',
      test1: 12,
      test2: 8,
      mid: 19,
    },
    {
      subject: ' English',
      test1: 12,
      test2: 8,
      mid: 19,
    },
    {
      subject: ' Physics',
      test1: 12,
      test2: 8,
      mid: '',
    },
    {
      subject: ' Geography',
      test1: 12,
      test2: '',
      mid: '',
    },
    {
      subject: ' Chemistry',
      test1: 12,
      test2: 8,
      mid: '',
    },
    {
      subject: ' Civics',
      test1: 12,
      test2: 8,
      mid: '',
    },
  ]);
  return (
    <Container>
      <ParentSubNav />
      <h1>Mark list</h1>

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

export default ParentGradeReport;
