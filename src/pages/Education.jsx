import React from 'react';
import { motion } from 'framer-motion';
import '../css/Education.css';

function Education() {
  const educationData = [
    {
      year: '2024 - 2028',
      title: 'BE Computer Science and Engineering',
      institution: 'Sri Eshwar College of Engineering, Coimbatore',
      scoreLabel: 'CGPA',
      score: '8.16'
    },
    {
      year: '2022 - 2024',
      title: '12th Grade',
      institution: 'Noble Matric Higher Secondary School, Virudhunagar',
      scoreLabel: 'Percentage',
      score: '81.3%'
    },
    {
      year: '2021 - 2022',
      title: '10th Grade',
      institution: 'Noble Matric Higher Secondary School, Virudhunagar',
      scoreLabel: 'Percentage',
      score: '90.2%'
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="page-container education-page">
      <h1 className="page-title">Education</h1>
      <p className="section-text text-center">
        My academic journey showcasing my commitment to continuous learning and excellence.
      </p>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {educationData.map((edu, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="timeline-marker">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="graduation-cap-icon">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="timeline-content">
              <span className="edu-year">{edu.year}</span>
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-institute">{edu.institution}</p>
              <div className="edu-badge">
                <span className="badge-label">{edu.scoreLabel}</span>
                <span className="badge-value">{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
