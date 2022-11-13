import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const EditForm = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState(``);
  const [blog, setBlog] = useState(``);

  let navigate = useNavigate();
  const handleEditButton = (e) => {
    e.preventDefault();
    const data = { title, blog };

    const fetchData = async () => {
      const response = await fetch('/api/blogs/edit/' + id, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        navigate('/blogs');
      }
    };
    if (user) {
      fetchData();
    }
    console.log('alkshfdjs');
  };
  return (
    <div>
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

      <Button variant="success float-right" onClick={handleEditButton}>
        Edit
      </Button>
    </div>
  );
};

export default EditForm;
