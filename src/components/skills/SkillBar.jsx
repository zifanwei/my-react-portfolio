import React from 'react';

const SkillBar = ({ skill, level }) => {
    return (
        <div className="skill-item">
            <div className="skill-name">{skill}</div>
            <div className="skill-bar">
                <div className="skill-progress" 
                    style={{ width: `${level * 10}%` }}>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
