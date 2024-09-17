import React, { useState, useEffect } from 'react';
import '../../style/Menu.css';

const Menu = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`menu ${isShrunk ? 'menu-shrink' : ''}`}>
      <ul className="menu-list">
        <li className="menu-item"><a href="#about">About</a></li>
        <li className="menu-item"><a href="#experience">Experience</a></li>
        <li className="menu-item"><a href="#projects">Projects</a></li>
        <li className="menu-item"><a href="#skills">Skills</a></li>
        <li className="menu-item"><a href="#more">More</a></li>
        <li className="menu-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
