import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const WeChatPart = () => (
  <div className="email-at">
    <p>
      By the way, I use <b>WeChat</b>. <br />
      Send me an email if you prefer to use instant messaging :)
    </p>
  </div>
);

const EmailPart = () => (
  <div className="email-at">
    <p> <b>Feel free to get in touch!</b></p>
    <p style={{ marginTop: '4%' }}>You can email me at: </p>
    <EmailLink mail="Xingru [at] Los Angeles [dot] net" />
    <p style={{ marginTop: '4%' }}>If it is for academic or professional purposes, preferably: </p>
    <EmailLink mail="Xingru [at] Los Angeles [dot] net" />

  </div>
);

const Contact = () => (
  <Main
    title="Contact"
    description='Contact Xingru"Iris"Long'
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <WeChatPart />
      <EmailPart />
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
