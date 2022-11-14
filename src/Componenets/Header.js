import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../Context/UserContext';
import Logout from './Logout';

function Header() {
  // const user = localStorage.getItem('user');

  const { user } = useContext(UserContext);

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="/">Botsman11</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <Logout />
          ) : (
            <Nav className="mr-auto p-4">
              <Nav.Link href="/login">LogIn</Nav.Link>
              <Nav.Link href="/signin">SignIn</Nav.Link>
            </Nav>
          )}
          {user ? (
            <Nav className="ml-auto p-4">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          ) : (
            <div></div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
