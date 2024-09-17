import React from 'react';
import '../../style/Skills.css';
import useFetchData from "../hooks/useFetchData";
import SkillBar from './SkillBar';


const Skills = () => {
    const { data } = useFetchData('/data/resume.json');
    if (!data || !data.skills || !data.skillSummary) return null;

    const skillSections = Object.entries(data.skills);
    const skillSummary = data.skillSummary;
    const languageSkills = data.languageSkills;

    return (
        <div className="skills-container">
            <div className='skills-sub-container'>
                <div>
                    <div className="skills-section">
                        {skillSummary.map((item, index) => (
                            <div className="skill-summary-item" key={index}>
                                <img src={process.env.PUBLIC_URL + item.icon}
                                    alt=''
                                    className='skill-item-img'></img>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Technical Skills</h3>
                    <div className="technical-skills">
                        {skillSections.map(([category, skills, index]) => (
                            <div className='skill-category card-with-shadow' key={index}>
                                <h4>{category}</h4>
                                <div className='technical-skill-content'>
                                    {skills.map((skillItem, idx) => (
                                        <SkillBar key={idx}
                                            skill={skillItem.name}
                                            level={skillItem.level} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3>Language Skills</h3>
                    <div className="language-skills">
                        {languageSkills.map((item, index) => (
                            <div className="language-item" key={index}>
                                <h4>{item.language}</h4>
                                <h4 className='lanaguage-level'>{item.level}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
