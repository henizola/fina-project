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

  const [parent, setParent] = useState([]);

  const filter = (e) => {
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
      const filterdStud = students.filter((m) =>
        m.id
          .toLocaleString()
          .includes(value.toLocaleString())
      );
      console.log(filterdStud);
    }
    // const newStud = [];

    // parent.map((p) => {
    //   students.map((stu) => {
    //     stu._id === p.childId &&
    //       newStud.push(...p);
    //   });
    // });
    // console.log(newStud);
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
    const findParent = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-parents'
        )
        .then(function (response) {
          console.log(response.data, 'trrr');
          setParent(response.data);
        })

        .catch(function (error) {
          console.log('errrr');
        })
        .then(function () {
          console.log(students);
        });
    };
    find();
    findParent();
    console.log(parent, students);
  }, []);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');

  function getRandomInt() {
    return Math.floor(
      Math.random() * parent.length
    );
  }

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
          {filterd.map((stud, id) => (
            <div className="right" key={id}>
              <div className="flex">
                <span>
                  Name : {stud.firstName}{' '}
                  {stud.middleName}
                </span>
                <span>ID : {stud.id}</span>
                <span>
                  Current Class :{' '}
                  {stud.currentGrade}
                  {stud.section}
                </span>
              </div>
              <div className="flex center">
                <span>Father</span>
                <span>
                  Phone :{' '}
                  {parent[getRandomInt()].phone}
                </span>
                <span>
                  Email :{' '}
                  {parent[getRandomInt()].email}
                </span>
                <span
                  style={{ marginTop: '25px' }}
                >
                  Mother
                </span>
                <span>
                  Phone :{' '}
                  {parent[getRandomInt()].phone}
                </span>
                <span>
                  Email :{' '}
                  {parent[getRandomInt()].email}
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
