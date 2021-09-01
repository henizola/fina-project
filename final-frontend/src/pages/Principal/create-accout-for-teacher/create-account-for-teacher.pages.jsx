import React from 'react';

import { Container } from './create-account-for-teacher.styles';

import CreateAccount from '../../../components/create-account/create-account.component';
import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

const CreateTeacherAcc = () => {
  return (
    <Container>
      <PrincipalSubNav />
      <CreateAccount type={'Teachers'} />
    </Container>
  );
};

export default CreateTeacherAcc;
