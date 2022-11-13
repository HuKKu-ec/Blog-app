import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BlogsContext } from '../Context/BlogsContext';
import { UserContext } from '../Context/UserContext';

import FormBlog from './FormBlog';

const Blogs = () => {
  const { blogs, dispatch } = useContext(BlogsContext);
  const { user } = useContext(UserContext);

  const deleteHandler = (id) => {
    fetch(`api/blogs/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${user.token}` },
    }).then((response) => {
      response.json().then((data) => {
        dispatch({ type: 'DELETEBLOG', payload: data });
      });
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/blogs', {
        method: 'GET',
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: 'GETALLBLOGS', payload: json.blogs });
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);
  return (
    <div>
      <Container>
        <h1 className=" mb-5">Blogs</h1>
        <Row>
          <Col md={5}>
            <FormBlog />
          </Col>
          <Col md={7}>
            <div className="blogs-container">
              {blogs ? (
                blogs.map((value, i) => {
                  return (
                    <div key={i}>
                      {' '}
                      <Card border="dark m-3 ">
                        <Card.Header>
                          <Link
                            style={{ all: 'unset' }}
                            to={`/blog/${value._id}`}
                          >
                            {value.title}
                          </Link>

                          <span
                            onClick={() => deleteHandler(value._id)}
                            className="bi bi-trash float-right pl-2"
                          ></span>

                          <Link
                            style={{ all: 'unset' }}
                            to={`/edit/${value._id}`}
                          >
                            {' '}
                            <span className="bi bi-plus float-right pl-2"></span>
                          </Link>
                        </Card.Header>

                        <Link
                          style={{ all: 'unset' }}
                          to={`/blog/${value._id}`}
                        >
                          <Card.Text className="p-3">{value.blog}</Card.Text>
                        </Link>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <div>
                  <h1>Loading...</h1>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
