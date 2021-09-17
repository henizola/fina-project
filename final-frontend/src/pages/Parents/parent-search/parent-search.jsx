import React, {
  useState,
  useEffect,
} from 'react';
import { FcSearch } from 'react-icons/fc';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './parent-search.styles';

import axios from 'axios';
import ParentSubNav from '../../../components/parent-sub-nav/parent-sub-nav.component';

const ParentSearch = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const find = async () => {
      axios
        .post(
          'http://localhost:9000/api//get-teachers'
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
      <ParentSubNav />
      <h1>Teachers</h1>
      <div className="cont">
        {/* <div className="left">
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
        </div> */}
        <div className="right-cont">
          {students.map((stud, id) => (
            <div className="right" key={id}>
              <div className="flex">
                <span>
                  Name : {stud.firstName}
                  {stud.middleName}
                </span>

                <span>
                  Subject :{stud.subject}
                </span>
              </div>
              <div className="flex center">
                <span>Phone : {stud.phone}</span>
                <span>Email : {stud.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ParentSearch;
