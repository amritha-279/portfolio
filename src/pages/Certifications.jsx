import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/Certifications.css';

// Import certification images
import javaImg from '../assests/java.jpeg';
import designThinkingImg from '../assests/designthinking.jpeg';
import guidewireImg from '../assests/guidewire.jpeg';
import udemyImg from '../assests/udemy.png';

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: 1,
      provider: 'NPTEL',
      name: 'Programming in Java',
      status: 'available',
      image: javaImg
    },
    {
      id: 2,
      provider: 'NPTEL',
      name: 'Design Thinking',
      status: 'available',
      image: designThinkingImg
    },
    {
      id: 3,
      provider: 'Guide Wire',
      name: 'Participation Certificate',
      status: 'available',
      image: guidewireImg
    },
    {
      id: 4,
      provider: 'Udemy',
      name: 'Mastering Data Structures',
      status: 'available',
      image: udemyImg
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: 'spring', bounce: 0.4 }
    }
  };

  return (
    <div className="page-container cert-page">
      <h1 className="page-title">Certifications</h1>
      <p className="section-text text-center">
        A showcase of my continuous learning and professional development.
      </p>

      <motion.div 
        className="cert-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certs.map(cert => (
          <motion.div 
            key={cert.id} 
            className={`cert-card ${cert.status === 'available' ? 'clickable' : ''}`}
            variants={cardVariants}
            onClick={() => cert.status === 'available' && setSelectedCert(cert)}
          >
            <div className="cert-header">
              <span className="cert-provider">{cert.provider}</span>
            </div>
            
            <div className="cert-body">
              <h3 className="cert-name">{cert.name}</h3>
              {cert.status === 'available' ? (
                <div className="cert-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span>Click to view</span>
                </div>
              ) : (
                <div className="cert-status">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="status-icon">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Certificate details coming soon</span>
                </div>
              )}
            </div>

            {/* Thumbnail Preview Background */}
            {cert.status === 'available' && (
              <div 
                className="cert-thumbnail-bg" 
                style={{ backgroundImage: `url(${cert.image})` }}
              ></div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="lightbox-close"
                onClick={() => setSelectedCert(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img src={selectedCert.image} alt={selectedCert.name} className="lightbox-image" />
              <div className="lightbox-caption">
                <h4>{selectedCert.name}</h4>
                <p>{selectedCert.provider}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certifications;
