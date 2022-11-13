import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/blogs/' + id, {
        method: 'GET',
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      setBlog(json.blog);
    };
    fetchData();
  }, []);

  return (
    <>
      {blog ? (
        <Card border="primary m-3 ">
          <Card.Header>{blog.title}</Card.Header>
          <Card.Text className="p-3">{blog.blog}</Card.Text>
        </Card>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Blog;
