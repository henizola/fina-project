import {
  default as React,
  useState,
  useEffect,
} from 'react';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import { Container } from './exams.style';
import axios from 'axios';

const Exams = () => {
  const [exams, setExams] = useState([]);
  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-exams',
          {
            grade: '12',
          }
        )
        .then(function (response) {
          setExams(response.data);
        })

        .catch(function (error) {
          if (error.response) {
            console.login(
              error.response.data.detail
            );
          }
        })
        .then(function () {
          // always executed
        });
    };
    login();
  }, []);
  return (
    <Container>
      <StudentSubNav />
      <h1>Upcoming Exams</h1>
      <div className="cards">
        {exams.map((ex) => (
          <div className="card">
            <span>Subject :</span>
            <span>{ex.subject}</span>
            <span>Description :</span>
            <span>{ex.chapters}</span>
            <span>Date : </span>
            <span>
              {ex.date.substring(0, 10)}
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Exams;
