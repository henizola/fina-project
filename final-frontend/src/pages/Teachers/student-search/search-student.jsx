import React, {
  useState,
  useEffect,
} from 'react';
import { FcSearch } from 'react-icons/fc';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './search-student.styles';

import axios from 'axios';

const StudentSearch = () => {
  const [students, setStudents] = useState([]);
  const [filterd, setFilterd] = useState([]);

  const filter = (e) => {
    console.log(students[3].id.toLocaleString());
    const { value, name } = e.target;
    console.log(value);
    if (name !== 'id') {
      setFilterd(
        students.filter((stud) =>
          stud[name]
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      );
    } else {
      setFilterd(
        students.filter((m) =>
          m.id
            .toLocaleString()
            .includes(value.toLocaleString())
        )
        // )
      );
    }
  };

  useEffect(() => {
    const find = async () => {
      axios
        .post(
          'http://localhost:9000/api/find-student'
        )
        .then(function (response) {
          console.log(response.data, 'hhhh');
          setStudents(response.data);
        })

        .catch(function (error) {})
        .then(function () {
          console.log(students);
        });
    };
    find();
  }, []);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  return (
    <Container>
      <TeacherSubNav />
      <h1>Search For Student</h1>
      <div className="cont">
        <div className="left">
          <input
            type="text"
            className="input"
            placeholder="First Name"
            name="firstName"
            onChange={filter}
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            name="middleName"
            onChange={filter}
          />

          <input
            type="text"
            className="input"
            placeholder="Student Id"
            name="id"
            onChange={filter}
          />
        </div>
        <div className="right-cont">
          {filterd.map((stud) => (
            <div className="right">
              <div className="flex">
                <span>
                  Name : {stud.firstName}{' '}
                  {stud.middleName}
                </span>
                <span>ID : CAM{stud.id}</span>
                <span>
                  Current Class :{' '}
                  {stud.currentGrade}
                  {stud.currentSection}
                </span>
              </div>
              <div className="flex center">
                <span>Father</span>
                <span>
                  Phone : +251-963-124-35
                </span>
                <span>
                  Email : parent@gmail.com
                </span>
                <span
                  style={{ marginTop: '25px' }}
                >
                  Mother
                </span>
                <span>
                  Phone : +251-963-124-35
                </span>
                <span>
                  Email : parent@gmail.com
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default StudentSearch;
