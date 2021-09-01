import React from 'react';

import { Container } from './create-sys-admin.styles';

import CreateAccount from '../../../components/create-account/create-account.component';
import PrincipalSubNav from '../../../components/principal-subnav/principal-subnav';

const CreateSysAdmin = () => {
  return (
    <Container>
      <PrincipalSubNav />
      <CreateAccount type={'System Admin'} />
    </Container>
  );
};

export default CreateSysAdmin;
