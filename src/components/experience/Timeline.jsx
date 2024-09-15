import React, { useState } from 'react';
import '../../style/Timeline.css';
import useFetchData from "../hooks/useFetchData"

const Timeline = () => {
  const { data } = useFetchData('/data/resume.json');
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (index) => {
    setExpandedItems(prevExpandedItems =>
      prevExpandedItems.includes(index)
        ? prevExpandedItems.filter(item => item !== index)
        : [...prevExpandedItems, index]
    );
  };

  if (!data || !data['work-experience']) {
    return <div></div>;
  }

  return (
    <div className="timeline">
      {data['work-experience'].map((exp, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-date">
            <span>{exp['time-period']}</span>
          </div>
          <div className="timeline-content">
            <h3>{exp['job-title']} - {exp['company']}</h3>
            {expandedItems.includes(index) ? (
              <p>{exp['detail'].join(' ')}</p>
            ) : (
              <p>{exp['summary']}</p>
            )}
            <button className="show-more" onClick={() => toggleExpand(index)}>
              {expandedItems.includes(index) ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
