import React, {
  useState,
  useContext,
} from 'react';

import { Container } from './steper.style';

import Stepper from '../../../components/stepper/steperr.component';
import CreateAccount from '../../../components/create-account/create-account.component';
import CreateAccountAdmin from '../../../components/create-account-admin/create-account-admin.component';

import { UserContext } from '../../../context/user.context';

const AccountStepper = () => {
  const [currentStep, setCurrentStep] =
    useState(0);

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const onSignOut = () => {
    setCurrentStep(0);
  };

  const {
    student,
    setStudent,
    mother,
    setMother,
    father,
    setFather,
  } = useContext(UserContext);
  console.log(student);

  const setStudents = (value) => {
    setStudent(value);
  };
  const setMothers = (value) => {
    setMother(value);
  };
  const setFathers = (value) => {
    setFather(value);
  };
  return (
    <Container>
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
        />
      </Stepper>
    </Container>
  );
};

export default AccountStepper;
