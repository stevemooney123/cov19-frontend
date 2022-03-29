import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Container} from "reactstrap";
import BookTest from "./components/BookTest";
import Symptoms from "./components/Symptoms";

function App() {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Covid 19 Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Dashboard</Nav.Link>
                                <Nav.Link href="/symptoms">Symptoms</Nav.Link>
                                <Nav.Link href="/book-test">Book Test</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/symptoms" element={<Symptoms/>}/>
                    <Route path="/book-test" element={<BookTest/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
