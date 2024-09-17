import React from 'react';
import '../../style/Education.css';
import useFetchData from "../hooks/useFetchData";

const Education = () => {
  const { data } = useFetchData('/data/resume.json');

  return (
    <div className="education-container">
      {data && data['education-experience'].map((edu, index) => (
        <div className="education-item" key={index}>
          <div className='education-time'>
            <span>{edu['time-period']}</span>
          </div>
          <div className='education-content card-with-shadow'>
            <h2>🎓 {edu.degree}</h2>
            <p>
              <img src={process.env.PUBLIC_URL + "/icon/icons8-university-48.png"} alt="" class="img-icon"></img>
            {edu.university}</p>
            <ul>
              <li>
                Grade: {edu.grade}
              </li>
              <li>
                {edu.modules}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
