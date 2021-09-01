import React from 'react';
import AdminSubNav from '../../../components/admon-sub-nav/admin-sub-nav.component';
import GenerateTranscriptForm from '../../../components/generate-transcript/generate-transcript.component';
import { Container } from './generate-transcript.styless';

const GenerateTranscript = () => {
  return (
    <Container>
      <AdminSubNav />
      <GenerateTranscriptForm />
    </Container>
  );
};

export default GenerateTranscript;
