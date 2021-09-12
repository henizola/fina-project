import MaterialTable from 'material-table';
import {
  default as React,
  useState,
  useEffect,
} from 'react';
import { Form } from 'react-bootstrap';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './mark-list.styles';
import axios from 'axios';
const MarkList = () => {
  // const [filterd, setFilterd] = useState([]);
  // const [data, setData] = useState([]);

  const [grade, setGrade] = useState(7);
  const [section, setSection] = useState('B');

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-students-grade',
          {
            currentSection: section,
            currentGrade: grade,
          }
        )
        .then(function (response) {
          const newData = [];

          response.data.map((d, index) => {
            console.log(d, 'pppppppp');
            newData.push({
              fullName: `${d.firstName} ${d.middleName}`,
            });
          });

          setData(newData);
        })

        .catch(function (error) {
          if (error.response) {
            alert(error.response.data.detail);
          }
          console.log('henok', error);
        })
        .then(function () {
          // always executed
          console.log(data, 'qqqqqq');
        });
    };
    login();
  }, [grade, section]);

  const columns = [
    {
      field: 'fullName',
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

  const [data, setData] = useState([]);
  return (
    <Container>
      <TeacherSubNav />
      <h1>Mark list</h1>
      <div className="flex">
        <Form.Select
          style={{
            width: '200px',
            margin: '0 auto',
          }}
          onChange={(e) =>
            setGrade(e.target.value)
          }
        >
          <option value={7}>Garde 7</option>
          <option value={8}>Grade 8</option>
          <option value={9}>Grade 9</option>
          <option value={10}>Grade 10</option>
        </Form.Select>
        <Form.Select
          style={{
            width: '200px',
            margin: '0 auto',
          }}
          onChange={(e) =>
            setSection(e.target.value)
          }
        >
          <option value=" A ">Section A</option>
          <option value="B">B</option>
          <option value=" C ">C</option>
          <option value=" D ">D</option>
        </Form.Select>
      </div>

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
