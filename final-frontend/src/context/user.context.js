import React, {
  useState,
  createContext,
} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const log = (s) => {
    console.log(s, user);
  };

  return (
    <UserContext.Provider
      value={{
        log: log,
        setUser: setUser,
        user: user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
