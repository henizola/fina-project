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
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-markList',
          {
            grade: grade,
          }
        )
        .then(function (response) {
          const ss = [];

          response.data.map((stud) =>
            ss.push({
              fullName: stud.fullName,
              subject:
                stud[
                  JSON.parse(
                    localStorage.getItem('user')
                  ).subject.toLowerCase()
                ],
              studId: stud['studId'],
              id: stud['id'],
            })
          );
          setData(ss);
          console.log(ss);
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
  }, [grade, section, updated]);

  const columns = [
    {
      field: 'fullName',
      title: 'Full  Name',
      editable: 'never',
    },
    {
      field: 'studId',
      editable: 'never',
      title: 'Id',
    },

    {
      field: 'subject.first',
      title: `15%`,
    },
    {
      field: 'subject.second',
      title: ` 15%`,
    },
    {
      field: 'subject.third',
      title: `20%`,
    },
    {
      field: 'subject.final',
      title: ` 50%`,
    },
    {
      field: 'total',
      title: ` 100%`,
      render: (row) => (
        <div>
          {row.subject.first +
            row.subject.second +
            row.subject.third +
            row.subject.final}
        </div>
      ),
    },
  ];
  const handdleUpdate = (rows) => {
    rows.map((row) =>
      axios
        .post(
          'http://localhost:9000/api/update-markList',
          {
            id: row.id,
            subject: JSON.parse(
              localStorage.getItem('user')
            ).subject.toLowerCase(),
            result: row.subject,
          }
        )
        .then(function (response) {
          console.log(response.data);
          setUpdated(!updated);
        })
        .catch((err) => console.log(err))
    );
  };
  const [data, setData] = useState([
    // {
    //   fullName: 'hhenok zelalem',
    //   id: 'ETS092',
    //   first: 17,
    //   second: 12,
    //   third: 14,
    //   final: 40,
    // },
  ]);
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
                console.log(updatedRows);
                let index;
                rows.map((emp) => {
                  index =
                    emp.oldData.tableData.id;
                  updatedRows[index] =
                    emp.newData;
                });
                handdleUpdate(updatedRows);
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
