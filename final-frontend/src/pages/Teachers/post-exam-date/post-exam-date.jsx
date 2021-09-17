import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import TeacherSubNav from '../../../components/teacher-sub-nav/teacher-sub-nav';
import { Container } from './post-exam-date.styles';
import axios from 'axios';

import { UserContext } from '../../../context/user.context';
import CompleteModal from '../../../components/completed-modal/completed-modal.component';

const PostExam = () => {
  const [type, settype] = useState('quiz');
  const [date, setDate] = useState(null);
  const [chapters, setChapters] = useState('');
  const [grade, setGrade] = useState(null);

  const [teacher, setteacher] = useState(null);

  const { user } = useContext(UserContext);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const login = async () => {
      axios
        .post(
          'http://localhost:9000/api/get-one-teacher',
          {
            id: JSON.parse(
              localStorage.getItem('user')
            )._id,
          }
        )
        .then(function (response) {
          setteacher(response.data);
          setGrade(
            response.data.classToTeach[0].grade
          );
        })

        .catch(function (error) {
          if (error.response) {
            alert(error.response.data.detail);
          }
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    login();
    console.log(user, 'kkkkkk');
  }, []);

  const post = async () => {
    axios
      .post(
        'http://localhost:9000/api/post-exam',
        {
          type: type,
          date: date,
          chapters: chapters,
          grade: grade,
          subject: teacher.subject,
        }
      )
      .then(function (response) {
        console.log(response);
        setShow(true);
      })

      .catch(function (error) {
        setShow(true);

        if (error.response) {
          alert(error.response.data.detail);
        }
      });
  };
  return (
    <Container>
      <TeacherSubNav />
      <div className="container">
        <h1>Post Exam</h1>
        <div className="upload">
          <CompleteModal
            show={show}
            setShow={setShow}
          />
          <InputGroup>
            <InputGroup.Text>
              Exam Type
            </InputGroup.Text>
            <Form.Select
              style={{
                width: 'calc( 100% - 145px)',
              }}
              onChange={(e) =>
                settype(e.target.value)
              }
              value={type}
            >
              <option value="quize">Quiz</option>
              <option value="test">Test</option>
            </Form.Select>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>
              Grade
            </InputGroup.Text>
            <Form.Select
              style={{
                width: 'calc( 100% - 145px)',
              }}
              onChange={(e) =>
                setGrade(e.target.value)
              }
              value={type}
            >
              {JSON.parse(
                localStorage.getItem('user')
              ) &&
                JSON.parse(
                  localStorage.getItem('user')
                ).classToTeach.map((cls) => (
                  <option value={cls.grade}>
                    {cls.grade}
                  </option>
                ))}
            </Form.Select>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text
              style={{ width: '100px' }}
            >
              Date
            </InputGroup.Text>

            <FormControl
              aria-label="Last name"
              type="date"
              onChange={(e) =>
                setDate(e.target.value)
              }
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text
              style={{ width: '100px' }}
            >
              Chapters
            </InputGroup.Text>

            <FormControl
              aria-label="Last name"
              onChange={(e) =>
                setChapters(e.target.value)
              }
            />
          </InputGroup>
        </div>
        <button className="post" onClick={post}>
          Post
        </button>
      </div>
    </Container>
  );
};

export default PostExam;
