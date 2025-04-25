import React, { useState, useRef, useEffect } from "react";
import "./Summary.css";

const Summary = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frame = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();

      const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 20;

      setTilt({ x, y });
    });
  };

  const handleMouseLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      id="summary"
      ref={containerRef}
      className="summary-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(0.98)`,
        willChange: "transform",
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
