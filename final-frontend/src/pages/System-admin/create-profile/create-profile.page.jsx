import React from 'react';
import AdminSubNav from '../../../components/admon-sub-nav/admin-sub-nav.component';
import CreateAccount from '../../../components/create-account/create-account.component';
import { Container } from './create-profile.styles';

const CreateProfile = () => {
  return (
    <Container>
      <AdminSubNav />
      <CreateAccount />
    </Container>
  );
};

export default CreateProfile;
