import React, { Component } from 'react';
import './style.css';

class Home extends Component { 
  render() {
    return (
      <div className='container main-section'>
        <div className='row'>
          <div className='col-sm-12'>
          <h1 className='main-header'>Hello, I'm RJ.</h1>
          <h3 className='secondary-header'>I create beautiful, responsive web applications with backend functionality.</h3>
          </div>
        </div>
        <div className='row' id='page-link-section'>
          <div className='col-sm-12 col-lg-4'>
            <a href='http://www.github.com/rjshoemaker55' target='_blank'>
              <div className='page-link'>
                GitHub
              </div>
            </a>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <a href='https://www.linkedin.com/in/r-joseph-shoemaker/' target='_blank'>
              <div className='page-link'>
                LinkedIn
              </div>
            </a>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <div className='page-link'>
              Résumé
            </div>
          </div>
        </div>
        <div className='row' id='skills-section'>
          <div className='col-sm-12'>
            <h1 className='main-header'>My Skills</h1>
            <span className='skill-card'>HTML</span>
            <span className='skill-card'>CSS</span>
            <span className='skill-card'>Javascript</span>
            <span className='skill-card'>JQuery</span>
            <span className='skill-card'>MongoDB</span>
            <span className='skill-card'>Mongoose</span>
            <span className='skill-card'>MySQL</span>
            <span className='skill-card'>Sequelize</span>
            <span className='skill-card'>Express</span>
            <span className='skill-card'>Handlebars</span>
            <span className='skill-card'>React</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;