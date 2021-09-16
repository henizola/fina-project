import React, {
  useState,
  useContext,
  useRef,
} from 'react';
import { useReactToPrint } from 'react-to-print';

import { Container } from './steper.style';

import Stepper from '../../../components/stepper/steperr.component';
import CreateAccount from '../../../components/create-account/create-account.component';
import CreateAccountAdmin from '../../../components/create-account-admin/create-account-admin.component';

import { UserContext } from '../../../context/user.context';

import axios from 'axios';
import Printable from '../../../components/printable/printable.component';
import CompleteModal from '../../../components/completed-modal/completed-modal.component';

const AccountStepper = () => {
  const [currentStep, setCurrentStep] =
    useState(0);
  const [show, setShow] = useState(false);
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const onSignOut = () => {
    setCurrentStep(0);
  };

  const [studentData, stStudebtData] =
    useState(null);

  const {
    student,
    setStudent,
    mother,
    setMother,
    father,
    setFather,
  } = useContext(UserContext);
  console.log(student);
  console.log(mother);
  console.log(father);

  const setStudents = (value) => {
    setStudent(value);
  };
  const setMothers = (value) => {
    setMother(value);
  };
  const setFathers = (value) => {
    setFather(value);
  };

  const registerStudent = async () => {
    await axios
      .post(
        'http://localhost:9000/api/create-student',
        student
      )
      .then(function (response) {
        registerFather(response.data._id);
        registerMother(response.data._id);
        stStudebtData(response.data);
        console.log();
      })
      .catch(function (error) {
        // setShow(true);
        // setAlert(error.response.data);
      })
      .then(function () {});

    // Check for response and if successful call the second api
  };

  const registerFather = async (id) => {
    // console.log(id, 'sdfbskjdfhgksdjfgsjkhdfg');
    await axios
      .post(
        'http://localhost:9000/api/create-parents',
        { ...father, childId: id }
      )
      .then(function (response) {})
      .catch(function (error) {
        // setShow(true);
        // setAlert(error.response.data);
      })
      .then(function () {});

    // Check for response and if successful call the second api
  };
  const registerMother = async (id) => {
    // console.log(id, 'sdfbskjdfhgksdjfgsjkhdfg');
    await axios
      .post(
        'http://localhost:9000/api/create-parents',
        { ...mother, childId: id }
      )
      .then(function (response) {
        setShow(true);
      })
      .catch(function (error) {
        // setShow(true);
        // setAlert(error.response.data);
      })
      .then(function () {});

    // Check for response and if successful call the second api
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Container>
      <CompleteModal
        show={show}
        setShow={setShow}
      />
      <Stepper currentStep={currentStep}>
        <CreateAccountAdmin
          type={'student'}
          onNext={onNext}
          onPrev={onPrev}
          value={'student'}
          setter={setStudents}
        />
        <CreateAccountAdmin
          type={'parents'}
          onNext={onNext}
          onPrev={onPrev}
          value={'father'}
          setter={setFathers}
        />
        <CreateAccountAdmin
          type={'parents'}
          onNext={onNext}
          onPrev={onPrev}
          value={'mother'}
          setter={setMothers}
          onRegister={registerStudent}
        />
        <Printable
          ref={componentRef}
          student={student}
          mother={mother}
          father={father}
          studentData={studentData}
          onRegister={handlePrint}
        />
      </Stepper>
    </Container>
  );
};

export default AccountStepper;
