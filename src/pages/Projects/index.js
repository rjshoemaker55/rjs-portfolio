import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './style.css';

const projectList = require('../../projectList.json')

class Projects extends Component {

  state = {
    projectList
  }

  render() {
    return (
      
        <div className='container main-section'>
          <div className='row'>
            <div className='col-sm-12'>
              <h1 className='main-header'>Projects</h1>
              <h3 
                className='secondary-header' 
                id='projects-sec-header'>
                Click on a project to visit the deployed app. Repo links 
                  <span id='in-caption'>are in the caption.</span>
                  <span id='found-below'>can be found below.</span>
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <Carousel id='carousel'>
              {this.state.projectList.map(project => (
                  <Carousel.Item key={project.id}>
                    <a href={project.deployed} target='_blank'>
                      <img
                        className="project-images d-block w-100"
                        src={project.image}
                        alt="First slide"
                      />
                    </a>
                    <Carousel.Caption>
                      <div className='carousel-cap'>
                        <h3><strong>{project.title}</strong></h3>
                        <a  href={project.repo} target='_blank'>
                          <button className='project-links'>Visit Repo</button>
                        </a>
                        <p>{project.description}</p>
                        <p><strong>My Role: </strong>{project.role}</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
              ))}
              </Carousel>  
            </div>
          </div>
          <div clasName='row' id='repo-row'>
            <div className='col-sm-12'>
              <h1 className='main-header'>Repos</h1>
              {this.state.projectList.map(project => (
                <a href={project.repo} target='_blank' className='repo-links'>{project.title}</a>
              ))}
            </div>
          </div>
        </div>
    )
  }
}

export default Projects;