import React from 'react';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import More from './components/more/More';
import Contact from './components/contact/Contact';
import './style/App.css';

const App = () => {
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
