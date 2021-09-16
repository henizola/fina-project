import React, {
  useState,
  useEffect,
} from 'react';

import { Container } from './reset-passwords.styles';

import { FcSearch } from 'react-icons/fc';

import { BiReset } from 'react-icons/bi';
import CustomModal from '../modal/modal.component';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import CompleteModal from '../completed-modal/completed-modal.component';

const ResetPassword = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');

  const [showAlert, setShowAlert] =
    useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  const [students, setStudents] = useState([]);
  const [filterd, setFilterd] = useState([]);

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

  const confirm = async () => {
    console.log('tsssss', id);
    await axios
      .post(
        'http://localhost:9000/api/reset-student-password',
        { id: id }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // setShow(true);
        // setAlert(error.response.data);
      })
      .then(function () {});
    setShowAlert(true);
    handleClose();
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
  return (
    <Container>
      <h1>Reset Password</h1>
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
        <CompleteModal
          show={showAlert}
          setShow={setShowAlert}
        />
        <div className="result">
          {filterd.map((stud) => (
            <div className="right">
              <span>
                Name :{stud.firstName}{' '}
                {stud.middleName}
              </span>
              <span>Phone : {stud.phone}</span>
              <span>Id : {stud.id}</span>
              <span>Account Type: Student</span>
              <button
                className="export"
                onClick={() => {
                  setId(stud._id);
                  setShow(true);
                }}
              >
                Reset To Default{' '}
                <BiReset
                  style={{
                    color: '#fa9e00',
                    fontSize: '20px',
                    marginLeft: '10px',
                  }}
                />
              </button>{' '}
              <CustomModal
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                message={'Are You Sure ? '}
                next={confirm}
              >
                <Button
                  variant="danger"
                  onClick={handleClose}
                >
                  Yes
                </Button>
              </CustomModal>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ResetPassword;
