import React from 'react'
import '../css/About.css'
import amrithaPhoto from '../assests/amritha.jpeg'

function About() {

  return (
    <div className="page-container about-page">
      <h1 className="page-title">About Me</h1>
      
      <div className="about-grid">
        <div className="about-image-col">
          <div className="about-photo">
            <img src={amrithaPhoto} alt="Amritha" className="profile-image" />
          </div>
        </div>

        <div className="about-text-col">
          <h2 className="section-heading">Who am I?</h2>
          <p className="section-text">
            Hello! I'm Amritha R, a Computer Science Engineering student at Sri Eshwar College of Engineering with a strong passion for software development, problem solving, and building impactful digital solutions.
          </p>

          <h2 className="section-heading mt-2">My Journey</h2>
          <p className="section-text">
            I enjoy transforming ideas into real-world applications using modern web technologies and continuously improving my technical skills through projects, hackathons, internships, and coding practice.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <h3 className="section-heading" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { category: 'Programming Languages', skills: ['C', 'C++', 'Java', 'JavaScript'] },
                { category: 'Frontend', skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
                { category: 'Backend', skills: ['Node.js', 'Express.js'] },
                { category: 'Database', skills: ['MongoDB', 'SQL'] },
                { category: 'Tools', skills: ['VS Code', 'Postman', 'Git', 'GitHub'] }
              ].map(group => (
                <div key={group.category}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '600' }}>{group.category}</h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {group.skills.map(skill => (
                      <span key={skill} style={{
                        background: 'var(--btn-sec-border)',
                        border: '1px solid var(--nav-border)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        color: 'var(--text-main)'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
