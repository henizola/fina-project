import React, { useContext, useEffect, useState } from "react";
import { IoMdContact } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import AlertModal from "../alert modal/alertModal";
import { Container } from "./create-account-admin.styles";

import { InputGroup, Form } from "react-bootstrap";

const CreateAccountAdmin = ({
  type,
  onNext,
  onPrev,
  setter,
  value,
  onRegister,
}) => {
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [grade, setGrade] = useState("");
  const [alert, setAlert] = useState("");
  const [show, setShow] = useState(false);

  const { student, mother, father } = useContext(UserContext);

  useEffect(() => {
    const sett = async () => {
      if (value === "student") {
        setfirstName(student.firstName);
        setmiddleName(student.middleName);
        setlastName(student.lastName);
        setemail(student.email);
        setphone(student.phone);
      } else if (value === "father") {
        setfirstName(father.fatherFirstName);
        setmiddleName(father.fatherMiddleName);
        setlastName(father.fatherLastName);
        setemail(father.fatherEmail);
        setphone(father.fatherPhone);
      } else if (value === "mother") {
        setfirstName(mother.motherFirstName);
        setmiddleName(mother.motherMiddleName);
        setlastName(mother.motherLastName);
        setemail(mother.motherEmail);
        setphone(mother.motherPhone);
      }
    };
    sett();
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const save = (e) => {
    onNext();
    if (type === "student") {
      setter({
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        email: email,
        phone: phone,
        grade: grade,
      });
    } else if (value === "mother") {
      setter({
        motherFirstName: firstName,
        motherLastName: lastName,
        motherMiddleName: middleName,
        motherEmail: email,
        motherPhone: phone,
      });
    } else if (value === "father") {
      setter({
        fatherFirstName: firstName,
        fatherLastName: lastName,
        fatherMiddleName: middleName,
        fatherEmail: email,
        fatherPhone: phone,
      });
    }
  };

  const goBack = () => {
    onPrev();
    if (type === "student") {
      setter({
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        email: email,
        phone: phone,
        grade: grade,
      });
    } else if (type === "mother") {
      setter({
        motherFirstName: firstName,
        motherLastName: lastName,
        motherMiddleName: middleName,
        motherEmail: email,
        motherPhone: phone,
      });
    } else if (type === "father") {
      setter({
        fatherFirstName: firstName,
        fatherLastName: lastName,
        fatherMiddleName: middleName,
        fatherEmail: email,
        fatherPhone: phone,
      });
    }
  };
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Container
      style={{
        margin: "30px auto",
      }}
    >
      {type !== "student" && type !== "parents" && (
        <h1>Create Profile for {type}</h1>
      )}
      <IoMdContact style={{ fontSize: "100px" }} />

      <form onSubmit={save}>
        <div className="form">
          <span>First Name :</span>
          <input
            required
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <span>Middle Name :</span>
          <input
            required
            type="text"
            className="input"
            value={middleName}
            onChange={(e) => setmiddleName(e.target.value)}
          />
          <span>Last Name :</span>
          <input
            type="text"
            required
            className="input"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <span>Phone :</span>
          <input
            type="text"
            className="input"
            required
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <span>Email :</span>
          <input
            type="email"
            className="input"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          {type === "student" && <span>Grade :</span>}
          {type === "student" && (
            <Form.Select
              style={{
                width: " 100% ",
              }}
              onChange={(e) => setGrade(e.target.value.toString())}
            >
              {grades.map((g) => (
                <option value={`${g}`}>{g}</option>
              ))}
            </Form.Select>
          )}
        </div>
        {value !== "student" && (
          <button className="default" onClick={goBack}>
            Previous
          </button>
        )}
        {value !== "mother" && (
          <button
            className="default"
            type="submit"
            style={{ marginLeft: "30px" }}
          >
            Next
          </button>
        )}
        {value === "mother" && (
          <button
            className="default"
            type="submit"
            style={{ marginLeft: "30px" }}
            onClick={onRegister}
          >
            Submitt
          </button>
        )}
      </form>
    </Container>
  );
};

export default CreateAccountAdmin;
