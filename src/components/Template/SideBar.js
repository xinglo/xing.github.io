import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/about" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>XINGRU LONG</h2>
        <p><a href="mailto:longxingru2@gmail.com" target="_blank" rel="noopener noreferrer">xing@proton.me</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Xingru &quot;Iris&quot; Long. <br />
        I am currently majoring <a href="https://viterbigradadmission.usc.edu/programs/masters/msprograms/ms-financial-engineering/">MFE at USC</a>.
        My interests fall in the broad area of AI, Risk Management, Computational Finance,
        focusing and exploring cutting-edge financial strategies and technologies.
        For my leisure, I enjoy being a Video Gamer, Video Editor, and a sports enthusiast. <br />
        🥂 Cheers!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Xingru &quot;Iris&quot; Long.</p>
    </section>
  </section>
);

export default SideBar;
