import MaterialTable from 'material-table';
import {
  default as React,
  useState,
  useEffect,
} from 'react';
import { Form } from 'react-bootstrap';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './parent-grade-report.styles';
import axios from 'axios';
import ParentSubNav from '../../../components/parent-sub-nav/parent-sub-nav.component';
const GradeReport = () => {
  const [filterd, setFilterd] = useState([]);

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-student-markList',
          {
            id: '614316df88ef430828fdbc97',
          }
        )
        .then(function (response) {
          const ss = [];
          console.log(response.data);
          const subjects =
            Object.getOwnPropertyNames(
              response.data[0]
            );
          for (let i = 0; i < 5; i++) {
            response.data.map((res) =>
              ss.push({
                subject: subjects[i],
                test1: res[subjects[i]]['first'],
                test2: res[subjects[i]]['second'],
                mid: res[subjects[i]]['third'],
                final: res[subjects[i]]['final'],
              })
            );
          }

          setData(ss);
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
      render: (row) => (
        <div>
          {row.test1 +
            row.test2 +
            row.mid +
            row.final}
        </div>
      ),
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

export default GradeReport;
