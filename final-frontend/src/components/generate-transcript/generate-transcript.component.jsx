import axios from 'axios';
import React, {
  useEffect,
  useState,
} from 'react';
import { BiExport } from 'react-icons/bi';
import { Container } from './generate-transcript.styles';

const GenerateTranscriptForm = ({
  changeSelect,
  students,
  filter,
  filterd,
}) => {
  function capitalize(word) {
    const lower = word.toLowerCase();
    return (
      word.charAt(0).toUpperCase() +
      lower.slice(1)
    );
  }
  return (
    <Container>
      <h1>Generate transcript</h1>
      <div className="cont">
        <div className="left">
          <span>Search By </span>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            name="firstName"
            onChange={filter}
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            name="middleName"
            onChange={filter}
          />

          <input
            type="text"
            className="input"
            placeholder="Student Id"
            name="studentId"
            onChange={filter}
          />
        </div>
        <div className="result">
          {filterd.map((tr) => (
            <div className="right">
              <span>
                Name :{capitalize(tr.firstName)}{' '}
                {capitalize(tr.middleName)}
              </span>
              <span>ID : {tr.schoolId}</span>
              <span>
                Current Class : {tr.grade}
                {tr.section}
              </span>
              <button
                className="export"
                onClick={() =>
                  changeSelect(tr.id)
                }
              >
                Export <BiExport />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default GenerateTranscriptForm;
