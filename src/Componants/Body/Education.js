import React from "react";
import { FaUniversity, FaBook, FaAward } from "react-icons/fa"; // Icons
import "./Education.css";

const Education = () => {
  return (
    <div id="education" className="education-container">
      <h2 className="education-heading">
        <FaUniversity className="icon" /> Education and Training
      </h2>

      <div className="education-item">
        <h3><FaBook className="icon" /> Master’s in Information and Communication Technology</h3>
        <p><strong>University of Turku</strong>, Finland (2024 – Present)</p>
        <ul>
          <li>Major: Software Engineering (Agile, DevOps, software design patterns)</li>
          <li>Minor: Cyber Security (network security, threat modeling, cryptography)</li>
          <li><a href="https://www.utu.fi/en" target="_blank" rel="noopener noreferrer">Visit University Website</a></li>
          <li> <a href={`${process.env.PUBLIC_URL}/utu_transcript.pdf`} target="_blank" rel="noopener noreferrer">Get Transcript</a></li>
        </ul>
      </div>

      <div className="education-item">
        <h3><FaAward className="icon" /> Bachelor of Science in Computer Sciences</h3>
        <p><strong>NUCES-FAST</strong>, Pakistan (2018 – 2022)</p>
        <ul>
          <li>Designed and developed solutions for complex computing problems</li>
          <li>Worked on practical projects and assignments</li>
          <li>Final Grade: CGPA 3.58 / 4.00</li>
          <li><a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer">Visit University Website</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
