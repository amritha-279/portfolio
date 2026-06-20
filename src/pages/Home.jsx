import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import amrithaPhoto from '../assests/amritha.jpeg'
import resumePdf from '../assests/Amritha.R Resume.pdf'

const roles = [
  "Aspiring Software Developer",
  "MERN Stack Developer",
  "Problem Solver"
];

function Home() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole(currentWord.substring(0, currentRole.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  const nameText = "Hi, I'm Amritha R";

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to my portfolio</span>
          
          <h1 className="hero-title">
            {nameText.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="word-wrapper" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {word.split('').map((char, charIndex) => (
                  <span 
                    key={charIndex} 
                    className="letter-animate" 
                    style={{ animationDelay: `${(wordIndex * 5 + charIndex) * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
                {/* Add a space after each word except the last one */}
                {wordIndex !== nameText.split(' ').length - 1 && <span className="space">&nbsp;</span>}
              </span>
            ))}
          </h1>
          
          <div className="typewriter-container">
            <span className="typewriter-text">{currentRole}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          
          <p className="hero-desc">
            I'm a passionate web developer and designer with a love for creating beautiful, 
            functional experiences. Let's build something amazing together!
          </p>
          
          <div className="hero-actions">
            <Link to="/projects" className="btn-gradient">
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a href={resumePdf} download="Amritha_R_Resume.pdf" className="btn-glass" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/amritha-279" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.914 1.186.092-.923.35-1.548.636-1.904-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10Z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/amritha-r-58aa40327" target="_blank" rel="noopener noreferrer" className="social-icon" data-tooltip="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" /></svg>
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-value">4+</h3>
              <p className="stat-label">Projects Built</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-value">8.16</h3>
              <p className="stat-label">CGPA</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-value">2</h3>
              <p className="stat-label">Internships</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img src={amrithaPhoto} alt="Amritha R" className="hero-image-blob" />
        </div>
      </div>
    </div>
  )
}

export default Home
