import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> {/* Používajte as={Link} */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/todo">ToDo</Nav.Link>
              <Nav.Link as={Link} to="/blockchain">Blockchain</Nav.Link>
              <Nav.Link as={Link} to="/countries">Countries</Nav.Link>
              <Nav.Link as={Link} to="/snake">Snake</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/mongo">Mongo</Nav.Link>
              <Nav.Link as={Link} to="/currency">Currency</Nav.Link>
              <Nav.Link as={Link} to="/redux">Redux</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
