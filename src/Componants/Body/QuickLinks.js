import React from 'react';
import './QuickLinks.css';

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <h2 className="quick-links-heading">Quick Links</h2>

      <p className="quick-links-item">Visit my LinkedIn</p>
      <button 
        className="quick-link-button"
        onClick={() => window.open('https://www.linkedin.com/in/arslaan-asad-8663101b4/', '_blank')}
      >
        🌐 Open LinkedIn
      </button>

      <p className="quick-links-item">Visit my Code Repositories</p>
      <button 
        className="quick-link-button"
        onClick={() => window.open('https://github.com/W44?tab=repositories', '_blank')}
      >
        💻 Open GitHub
      </button>

      <p className="quick-links-item">Get my Resume</p>
      <button 
        className="quick-link-button"
        onClick={() => window.open(process.env.PUBLIC_URL+'/My_Resume.pdf', '_blank')}
      >
        📄 Open Resume
      </button>
    </div>
  );
};

export default QuickLinks;
