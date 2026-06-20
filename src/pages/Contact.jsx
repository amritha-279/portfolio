import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import '../css/Contact.css'

function Contact() {
  const [state, handleSubmit, reset] = useForm("xaqzrvzk")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleReset = () => {
    reset()
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="page-container contact-page">
      <h1 className="page-title">Get In Touch</h1>
      <p className="section-text">
        I'd love to hear from you. Feel free to reach out with any questions or opportunities!
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="section-heading">Contact Information</h2>
          <div className="info-items">
            <a href="mailto:amrithasekar27@gmail.com" className="text-link-card info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 5L2 7"></path>
                </svg>
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <p>amrithasekar27@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918807782856" className="text-link-card info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>+91 8807782856</p>
              </div>
            </a>

            <a href="#" className="text-link-card info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-details">
                <h3>Location</h3>
                <p>Tamil Nadu, India</p>
              </div>
            </a>
          </div>
        </div>

        {state.succeeded ? (
          <div className="contact-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1rem' }}>
            <h3 className="section-heading" style={{ marginBottom: 0 }}>Thank you!</h3>
            <p className="section-text" style={{ marginBottom: '1.5rem' }}>
              Your message has been sent successfully. I'll get back to you soon.
            </p>
            <button onClick={handleReset} className="btn-primary" style={{ marginTop: 0 }}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-card" id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.5rem', display: 'block' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.5rem', display: 'block' }}
              />
            </div>

            <button type="submit" className="btn-primary" id="submitBtn" disabled={state.submitting}>
              <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {state.errors && state.errors.length > 0 && (
              <div className="form-status" style={{ background: '#fee2e2', color: '#991b1b', marginTop: '1.5rem', padding: '1rem', borderRadius: '8px', textAlign: 'center', fontWeight: '500' }}>
                Oops! There was an error submitting your form.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact

