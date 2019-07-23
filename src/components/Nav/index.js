import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Navbar, 
  Nav 
} from 'react-bootstrap';

import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';

import './style.css';

function Navi(props) {
  return(
    <>
    <Router>
        <Navbar collapseOnSelect id='top-nav' expand="lg" variant="dark">
          <Navbar.Brand as={Link} to="/">RJ Shoemaker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path='/' exact component={Home}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/contact' exact component={Contact}/>
        </Router>

      <Navbar fixed="bottom" id='bottom-nav' className="justify-content-center align-text-middle">
        RJ Shoemaker 2019 ©
      </Navbar>

    </>
  )
}

export default Navi;