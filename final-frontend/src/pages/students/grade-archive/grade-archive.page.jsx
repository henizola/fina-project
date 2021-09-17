import axios from 'axios';
import MaterialTable from 'material-table';
import {
  default as React,
  useEffect,
  useState,
} from 'react';
import { Form } from 'react-bootstrap';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import { Container } from './grade-archive.styles';

const GradeArchive = () => {
  const [filterd, setFilterd] = useState([]);

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-transcript',
          {
            id: JSON.parse(
              localStorage.getItem('user')
            )._id,
          }
        )
        .then(function (response) {
          setData(response.data.results);
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

  const [data, setData] = useState([]);
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
