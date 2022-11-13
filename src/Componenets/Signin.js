import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSignUpButton = async (e) => {
    e.preventDefault();
    const data = { email, password };

    const response = await fetch('api/user/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (response.ok) {
      setSuccess(
        'Account is created for email ' +
          json.email +
          ' now you can login using this Email Id'
      );
      setError('');
    } else {
      setError('Error occured: ' + json.error);
      setSuccess('');
    }
  };
  return (
    <div className="card-container">
      {' '}
      <h1 className="header">Sign In</h1>
      <Card border="dark " className=" mt-3 p-4">
        <Form.Control
          type="email"
          className="mb-2"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Control
          className="mb-2"
          placeholder="Password"
          aria-label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="success" onClick={handleSignUpButton}>
          Sign In
        </Button>
      </Card>
      {success ? (
        <Card
          border="success p-3 mt-4 font-weight-bold"
          className="text-success"
        >
          {success}
        </Card>
      ) : (
        <div></div>
      )}
      {error ? (
        <Card border="danger p-3 mt-4 font-weight-bold" className="text-danger">
          {error}
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Signin;
