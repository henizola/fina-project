import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import AdminSubNav from '../../../components/admon-sub-nav/admin-sub-nav.component';
import ExportGrade from '../../../components/export-grade/export-grade.component';
import GenerateTranscriptForm from '../../../components/generate-transcript/generate-transcript.component';
import { Container } from './generate-transcript.styless';

import { useReactToPrint } from 'react-to-print';

import axios from 'axios';
const GenerateTranscript = () => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState([]);
  const changeSelect = (id) => {
    setSelected(true);
    const d = {};
    setData(filterd.find((e) => e.id === id));
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [id, setId] = useState([]);
  const [show, setShow] = useState(false);

  const [showAlert, setShowAlert] =
    useState(false);

  const [students, setStudents] = useState([]);
  const [filterd, setFilterd] = useState([]);

  useEffect(() => {
    const find = async () => {
      axios
        .post(
          'http://localhost:9000/api//get-all-transcript'
        )
        .then(function (response) {
          setStudents(response.data);
          setFilterd(response.data);
        })

        .catch(function (error) {})
        .then(function () {
          console.log(students);
        });
    };
    find();
  }, []);
  console.log('tss', id);
  const filter = (e) => {
    const { value, name } = e.target;
    console.log(value);
    if (name !== 'studentId') {
      setFilterd(
        students.filter((stud) =>
          stud[name]
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      );
    } else {
      setFilterd(
        students.filter((m) =>
          m.schoolId
            .toLocaleString()
            .toLowerCase()
            .includes(
              value.toLocaleString().toLowerCase()
            )
        )
        // )
      );
    }
  };

  return (
    <Container>
      <AdminSubNav />
      {!selected && (
        <GenerateTranscriptForm
          changeSelect={changeSelect}
          filter={filter}
          students={students}
          filterd={filterd}
        />
      )}
      {selected && (
        <ExportGrade
          data={data}
          ref={componentRef}
        />
      )}
      {selected && (
        <button
          onClick={handlePrint}
          className="print"
        >
          Print
        </button>
      )}
    </Container>
  );
};

export default GenerateTranscript;
