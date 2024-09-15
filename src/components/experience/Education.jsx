import React from 'react';
import '../../style/Education.css';
import useFetchData from "../hooks/useFetchData";

const Education = () => {
  const { data } = useFetchData('/data/resume.json');
  
  return (
    <div className="education-container">
      {data && data['education-experience'].map((edu, index) => (
        <div className="education-item" key={index}>
            <h3>🎓 {edu.degree}</h3>
            <p>{edu.university}</p>
            <p>{edu['time-period']}</p>
            <p>Grade: {edu.grade}</p>
            <p>{edu.modules}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
