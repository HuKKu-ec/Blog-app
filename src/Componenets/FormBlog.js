import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { BlogsContext } from '../Context/BlogsContext';
import { UserContext } from '../Context/UserContext';

const FormBlog = () => {
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(BlogsContext);
  const handleAddButton = async (e) => {
    e.preventDefault();
    if (title && blog) {
      const data = { title, blog };
      fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          response.json().then((data) => {
            dispatch({ type: 'ADDBLOG', payload: data.blogs });
            setTitle('');
            setBlog('');
          });
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setError('Title and Blog must not be empty');
    }
  };
  return (
    <div className="form-container">
      <Card border="dark " className=" mt-3 p-4">
        <Form.Control
          className="mb-2"
          placeholder="Title"
          aria-label="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Form.Control
          className="mb-2"
          placeholder="Blog"
          aria-label="Blog"
          value={blog}
          onChange={(e) => {
            setBlog(e.target.value);
          }}
        />

        <Button variant="success" onClick={handleAddButton}>
          Add
        </Button>
      </Card>
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

export default FormBlog;
