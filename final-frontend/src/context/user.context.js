import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    grade: null,
  });
  const [mother, setMother] = useState({
    motherFirstName: "mom",
    motherLastName: "mom",
    motherMiddleName: "mom",
    motherPhone: "654897079685765876",
    motherEmail: "mom@gmail.com",
  });
  const [father, setFather] = useState({
    fatherFirstName: "dad",
    fatherLastName: "",
    fatherMiddleName: "",
    fatherPhone: "",
    fatherEmail: "",
  });
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        student: student,
        setStudent: setStudent,
        mother: mother,
        setMother: setMother,
        father: father,
        setFather: setFather,
        user: user,
        setUser: setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
