import React from 'react';
import AdminSubNav from '../../../components/admon-sub-nav/admin-sub-nav.component';
import ResetPassword from '../../../components/reset-passwords/reset-passwords.component';
import { Container } from './passowrd-reset';

const PasswordReset = () => {
  return (
    <Container>
      <AdminSubNav />
      <ResetPassword />
    </Container>
  );
};

export default PasswordReset;
