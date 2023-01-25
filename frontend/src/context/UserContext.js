import React, { createContext, useState } from 'react';

const initialUserInfo = {
  _id: '',
  firstName: '',
  lastName: '',
  email: '',
  isAdmin: false,
  isDaycareAdmin: false,
};

export const UserContext = createContext({
  user_info: initialUserInfo,
  setUserInfo: () => {},
  setLoading: () => {},
  clearUserInfo: () => {},
});

const UserProvider = ({ children }) => {
  const [loading, set_loading] = useState(true);
  const [user_info, set_user_info] = useState(initialUserInfo);

  const setUserInfo = (new_user_info) => {
    console.log('USER CONTEXT setUserInfo', new_user_info);
    set_user_info(new_user_info);
    set_loading(false);
  };

  const setLoading = (new_loading) => {
    set_loading(new_loading);
  };

  const clearUserInfo = () => {
    set_user_info({
      ...initialUserInfo,
    });
  };
  return (
    <UserContext.Provider
      value={{
        user_info,
        setUserInfo,
        loading,
        setLoading,
        clearUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export { UserProvider };
