import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../Context/UserContext';
// import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { user, dispatch } = useContext(UserContext);
  //   let navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'USERLOGOUT' });
    // navigate('/login');
  };
  return (
    <div className="d-flex">
      <button className="btn btn-dark" onClick={logoutHandler}>
        Logout
      </button>
      {user ? (
        <p className="p-2 ml-4" style={{ margin: 'auto' }}>
          {user.email}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Logout;
