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
    <div id="wrap">
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
        <div id="push"></div>
      </div>
      <div id="footer">
        <Navbar id='bottom-nav'>
          <div className="justify-content-left">
            RJ Shoemaker 2019 ©
          </div>
          <div className="justify-content-right">
            Created with React
          </div>
        </Navbar>
      </div>
    </>
  )
}

export default Navi;