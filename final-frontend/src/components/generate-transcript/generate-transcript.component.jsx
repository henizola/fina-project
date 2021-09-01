import React from 'react';

import { Container } from './generate-transcript.styles';

import { FcSearch } from 'react-icons/fc';

import { BiExport } from 'react-icons/bi';

const GenerateTranscriptForm = () => {
  return (
    <Container>
      <h1>Generate transcript</h1>
      <div className="cont">
        <div className="left">
          <input
            type="text"
            className="input"
            placeholder="Student ID"
          />
          <FcSearch
            style={{
              fontSize: '33px',
            }}
          />

          <button className="find">
            Find Student
          </button>
        </div>
        <div className="right">
          <span>Name : Henok Zelalem</span>
          <span>ID : CAM2861</span>
          <span>Current Class : 5B</span>
          <button className="export">
            Export <BiExport />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default GenerateTranscriptForm;
