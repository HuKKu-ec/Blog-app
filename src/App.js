// import { useEffect, useState } from 'react';
import './App.css';
import Header from './Componenets/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './Componenets/Blogs';

import Blog from './Componenets/Blog';
import EditForm from './Componenets/EditForm';
import Login from './Componenets/Login';
import Signin from './Componenets/Signin';
import { UserContext } from './Context/UserContext';
import { useContext } from 'react';

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <section>
          <Routes>
            <Route path="/blogs" element={user ? <Blogs /> : <Login />}></Route>
            <Route path="/" element={user ? <p>home</p> : <Login />}></Route>
            <Route
              path="/home"
              element={user ? <p>home</p> : <Login />}
            ></Route>
            <Route
              path="/about"
              element={user ? <p>about</p> : <Login />}
            ></Route>
            <Route
              path="/contact"
              element={user ? <p>contact</p> : <Login />}
            ></Route>
            <Route
              path="/blog/:id"
              element={user ? <Blog /> : <Login />}
            ></Route>
            <Route
              path="/edit/:id"
              element={user ? <EditForm /> : <Login />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Blogs />}
            ></Route>
            <Route path="/signin" element={<Signin />}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

export default App;
