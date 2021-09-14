import React, {
  useState,
  createContext,
} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [student, setStudent] = useState({
    firstName: 'g',
    lastName: '',
    middleName: '',
    phone: '',
    email: '',
  });
  const [mother, setMother] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
    email: '',
  });
  const [father, setFather] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
    email: '',
  });

  return (
    <UserContext.Provider
      value={{
        student: student,
        setStudent: setStudent,
        mother: mother,
        setMother: setMother,
        father: father,
        setFather: setFather,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
