import React from 'react';
import './Body.css'; // Import the CSS file for styling

const Picture = ({ imageSrc }) => {
  return (
    <div className="picture-container">
      <div className="circle">
        <img src={process.env.PUBLIC_URL+imageSrc} alt="Arslaan Picture" className="image" />
      </div>
    </div>
  );
};

export default Picture;
