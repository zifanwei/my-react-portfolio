import React, { useEffect } from 'react';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import More from './components/more/More';
import Contact from './components/contact/Contact';
import './style/App.css';

const App = () => {
  useEffect(() => {
    // Function to update the hash based on which section is visible
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.6, // Adjust this value to determine when the section is considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          window.history.replaceState(null, null, `#${sectionId}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Ensure page scrolls to the correct section if refreshed with a hash in the URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className='app'>
      <Menu />
      <div className='content'>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <h3 className='app-subtitles'>My Experience</h3>
          <Experience />
        </section>
        <section id="projects">
          <h3 className='app-subtitles'>My Projects</h3>
          <Projects />
        </section>
        <section id="more">
          <h3 className='app-subtitles'>More About Me ..</h3>
          <More />
        </section>
        <section id="contact">
          <h3 className='app-subtitles'>Contact Me</h3>
          <Contact />
        </section>
      </div>
      <footer className='footer'>
        © 2024 Zifan Wei. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
