import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import { IoMdContact } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user.context';
import AlertModal from '../alert modal/alertModal';
import { Container } from './create-account-admin.styles';

const CreateAccountAdmin = ({
  type,
  onNext,
  onPrev,
  setter,
  value,
  onRegister,
}) => {
  const [firstName, setfirstName] = useState('');
  const [middleName, setmiddleName] =
    useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [alert, setAlert] = useState('');
  const [show, setShow] = useState(false);

  const { student, mother, father } =
    useContext(UserContext);

  useEffect(() => {
    const sett = async () => {
      if (value === 'student') {
        setfirstName(student.firstName);
        setmiddleName(student.middleName);
        setlastName(student.lastName);
        setemail(student.email);
        setphone(student.phone);
      } else if (value === 'father') {
        setfirstName(father.firstName);
        setmiddleName(father.middleName);
        setlastName(father.lastName);
        setemail(father.email);
        setphone(father.phone);
      } else if (value === 'mother') {
        setfirstName(mother.firstName);
        setmiddleName(mother.middleName);
        setlastName(mother.lastName);
        setemail(mother.email);
        setphone(mother.phone);
      }
    };
    sett();
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const save = (e) => {
    onNext();
    setter({
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      email: email,
      phone: phone,
    });
  };

  const goBack = () => {
    onPrev();
    setter({
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      email: email,
      phone: phone,
    });
  };

  return (
    <Container
      style={{
        margin: '30px auto',
      }}
    >
      {type !== 'student' &&
        type !== 'parents' && (
          <h1>Create Profile for {type}</h1>
        )}
      <IoMdContact
        style={{ fontSize: '100px' }}
      />
      <AlertModal
        show={show}
        message={alert}
        handleClose={handleClose}
      />
      <form onSubmit={save}>
        <div className="form">
          <span>First Name :</span>
          <input
            required
            type="text"
            className="input"
            value={firstName}
            onChange={(e) =>
              setfirstName(e.target.value)
            }
          />
          <span>Middle Name :</span>
          <input
            required
            type="text"
            className="input"
            value={middleName}
            onChange={(e) =>
              setmiddleName(e.target.value)
            }
          />
          <span>Last Name :</span>
          <input
            type="text"
            required
            className="input"
            value={lastName}
            onChange={(e) =>
              setlastName(e.target.value)
            }
          />
          <span>Phone :</span>
          <input
            type="text"
            className="input"
            required
            value={phone}
            onChange={(e) =>
              setphone(e.target.value)
            }
          />
          <span>Email :</span>
          <input
            type="email"
            className="input"
            required
            value={email}
            onChange={(e) =>
              setemail(e.target.value)
            }
            required
          />
        </div>
        {value !== 'student' && (
          <button
            className="default"
            onClick={goBack}
          >
            Previous
          </button>
        )}
        {value !== 'mother' && (
          <button
            className="default"
            type="submit"
            style={{ marginLeft: '30px' }}
          >
            Next
          </button>
        )}
        {value === 'mother' && (
          <button
            className="default"
            type="submit"
            style={{ marginLeft: '30px' }}
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
