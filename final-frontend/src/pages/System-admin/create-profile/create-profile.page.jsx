import React from 'react';
import AdminSubNav from '../../../components/admon-sub-nav/admin-sub-nav.component';
import CreateAccount from '../../../components/create-account/create-account.component';
import AccountStepper from '../Stepper/steper.component';
import { Container } from './create-profile.styles';

const CreateProfile = () => {
  return (
    <Container>
      <AdminSubNav />
      {/* <CreateAccount type={'Student'} /> */}
      <AccountStepper />
    </Container>
  );
};

export default CreateProfile;
