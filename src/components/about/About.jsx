import React from 'react'; 
import '../../style/About.css';
import myImg from "../../assets/my-photo-with-bg.png"
import useFetchData from "../hooks/useFetchData"

const About = () => {
  const { data } = useFetchData('/data/resume.json');

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='about'>
      <div className='intro-page'>
        <div className='left'>
          <div className='intro'>
            <h1>
            Hello, I'm Zifan. 
            <br />
            A <span className='highlight'>Full-Stack Web Developer</span> 
            </h1>
            <p>
              {data && data.summary ? data.summary : ''}
            </p>
            <button className='lets-talk-btn' onClick={handleScrollToContact}>
              Let's talk
            </button>

          </div>
        </div>
        <div className='right'>
          <img src={myImg} className='my-img' loading="lazy" alt="my-photo"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
