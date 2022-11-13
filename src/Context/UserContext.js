import React, { createContext, useEffect, useReducer } from 'react';
export const UserContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'USERLOGIN':
      return { user: action.payload };
    case 'USERLOGOUT':
      return { user: null };
    default:
      return state;
  }
};
export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { user: null });
  useEffect(() => {
    const user = localStorage.getItem('user');
    dispatch({ type: 'USERLOGIN', payload: JSON.parse(user) });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
