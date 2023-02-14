import React from 'react'
import project from '../../assets/projects.jpg'
import './projects.css'

const Projects = () => {
  return (
    <div className='project-container'>
    <div className='projects'>
        <div className='projects-l'>
            <img className='projects-img' src={project} alt="" />
        </div>
        <div className='projects-r'>
            <div className='morepage-r-head'>DELIVERED</div>
            <h2>AANANDVILAS</h2>
            <hr />
            <h3>LOCATION</h3>
            <div>Sector 81, Faridabad</div>
            <hr />
            <h3>PROPERTY TYPE</h3>
            <div>Luxury 3 & 4 BHK Apartments Residential</div>
            <hr />
            <div>
                After landmark developments like The Pranayam, Pratham and 81 Highstreet. Puri Constructions presents to Faridabad its signature quality with another top notch inimitable address, Aanandvilas
            </div>
            <button className='knowmore-btn'>KNOW MORE</button>
        </div>
    </div>
    <button className='projects-btn'>VIEW ALL PROJECTS</button>
    </div>
  )
}

export default Projects