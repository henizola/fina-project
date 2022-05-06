import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import CreateAccountAdmin from "../../../components/create-account-admin/create-account-admin.component";
import Printable from "../../../components/printable/printable.component";
import Stepper from "../../../components/stepper/steperr.component";
import { UserContext } from "../../../context/user.context";
import { Container } from "./steper.style";

const AccountStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [show, setShow] = useState(true);
  const [studentData, setStudebtData] = useState(null);
  const [response, setResponse] = useState({});
  const [wait, setWait] = useState(true);
  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const onSignOut = () => {
    setCurrentStep(0);
  };

  const { student, setStudent, mother, setMother, father, setFather } =
    useContext(UserContext);

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
      .post("http://localhost:9000/api/register-student", {
        ...student,
        ...mother,
        ...father,
      })
      .then(function (response) {
        setStudebtData(response.data.studentResult);
        setResponse(response.data);
        console.log("response:", response);
        setWait(false);
      })
      .catch(function (error) {
        console.log(error, "this is error");
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
      <Stepper currentStep={currentStep}>
        <CreateAccountAdmin
          type={"student"}
          onNext={onNext}
          onPrev={onPrev}
          value={"student"}
          setter={setStudents}
        />
        <CreateAccountAdmin
          type={"parents"}
          onNext={onNext}
          onPrev={onPrev}
          value={"father"}
          setter={setFathers}
        />
        <CreateAccountAdmin
          type={"parents"}
          onNext={onNext}
          onPrev={onPrev}
          value={"mother"}
          setter={setMothers}
          onRegister={registerStudent}
          show={show}
          setShow={setShow}
        />

        {!wait && (
          <Printable
            ref={componentRef}
            student={response.studentResult}
            mother={response.motherResult}
            father={response.fatherResult}
            studentData={studentData}
            onRegister={handlePrint}
            show={show}
            setShow={setShow}
          />
        )}
      </Stepper>
    </Container>
  );
};

export default AccountStepper;
