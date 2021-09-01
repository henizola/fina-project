import React from 'react';
import { FcSearch } from 'react-icons/fc';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './search-student.styles';

const StudentSearch = () => {
  return (
    <Container>
      <TeacherSubNav />
      <h1>Search For Student</h1>
      <div className="cont">
        <div className="left">
          <input
            type="text"
            className="input"
            placeholder="Student ID"
          />
          <FcSearch
            style={{
              fontSize: '33px',
            }}
          />

          <button className="find">
            Find Student
          </button>
        </div>
        <div className="right">
          <div className="flex">
            <span>Name : Henok Zelalem</span>
            <span>ID : CAM2861</span>
            <span>Current Class : 5B</span>
          </div>
          <div className="flex center">
            <span>Father</span>
            <span>Phone : +251-963-124-35</span>
            <span>Email : parent@gmail.com</span>
            <span style={{ marginTop: '25px' }}>
              Mother
            </span>
            <span>Phone : +251-963-124-35</span>
            <span>Email : parent@gmail.com</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StudentSearch;
