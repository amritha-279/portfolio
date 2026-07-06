import React from 'react'
import '../css/Projects.css'
import securepayImg from '../assests/securepay.jpeg'
import trexaImg from '../assests/trexa.jpg'
import natyalayaImg from '../assests/natyalaya.jpeg'
import cinetrackerImg from '../assests/cinetracker.jpg'
import parkmateImg from '../assests/parkmate.png'
import subsidyguardImg from '../assests/subsidy.jpg'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SecurePay',
      description: 'QR Code Verification System for secure digital transactions',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://github.com/amritha-279/SecurePay2',
      image: securepayImg
    },
    {
      id: 2,
      title: 'TREXA',
      description: 'Parametric Micro-Insurance Platform designed for gig workers',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MongoDB'],
      link: 'https://github.com/amritha-279/TREXA',
      image: trexaImg
    },
    {
      id: 3,
      title: 'Natyalaya',
      description: 'Bharatanatyam Dance Management System for organizing and tracking dance classes',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
      link: 'https://github.com/amritha-279/intern',
      image: natyalayaImg
    },
    {
      id: 4,
      title: 'CineTracker',
      description: 'Movie tracking and review platform for cinema enthusiasts',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/amritha-279/cinetracker',
      image: cinetrackerImg
    },
    {
      id: 5,
      title: 'ParkMate',
      description: 'Online parking slot booking system for seamless reservations',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://github.com/amritha-279/parkmate_frontend',
      image: parkmateImg
    },
    {
      id: 6,
      title: 'SubsidyGuard',
      description: 'A government-grade fertilizer subsidy fraud detection system that verifies fertilizer purchases at retail shops in real-time to prevent misuse and black market diversion of subsidized fertilizers.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/amritha-279/SubsidyGuard',
      image: subsidyguardImg
    }
  ]

  return (
    <div className="page-container projects-page">
      <h1 className="page-title">My Projects</h1>
      <p className="section-text">
        Here are some of my recent projects that showcase my skills and experience.
      </p>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-img-wrapper">
              <div
                className="project-img"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
              <div className="project-overlay">
                <a href={project.link} className="overlay-btn" target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">

                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
