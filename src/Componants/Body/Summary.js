import React, { useState } from "react";
import "./Summary.css";

const Summary = () => {

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate tilt based on mouse position inside the component
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;

    setTilt({ x, y });
  };

  // Reset tilt effect on mouse leave
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div id="summary"
      className="summary-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(0.98)`,
      }}
    >
      <h2 className="summary-heading">Summary</h2>
      <ul className="summary-list">
        <li>Worked as a Software Engineer (Fullstack Developer) for two years</li>
        <li>Currently pursuing Master's in Information and Communication Technology at the University of Turku</li>
        <li>Worked in an Agile Development Team</li>
        <li>Strong Communication Skills</li>
      </ul>
    </div>
  );
};

export default Summary;
