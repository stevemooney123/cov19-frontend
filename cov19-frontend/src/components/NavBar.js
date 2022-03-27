import {  Link } from "react-router-dom";
import { Nav, NavDropdown, Button, Navbar } from 'react-bootstrap'
import { Container } from "reactstrap";
const NavBar= () =>{
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Covid 19 Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">Symptoms</Nav.Link>
          <Nav.Link href="#link">Book Test</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default NavBar;