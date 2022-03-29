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
              <NavBar/>

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
