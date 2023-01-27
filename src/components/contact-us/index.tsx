import React from 'react';
import EmailLink from '../email-link';

const ContactUs = () => (
  <div id="contact-us" className="contact-us">
    <h2 className="heading">Get in touch</h2>
    <p className="main-description">
      We’d love to discuss any project you have in mind, whether it’s
      small or big. Drop us a line, or give us a quick call!
    </p>
    <ul className="main-description plain-list">
      <li>
        <EmailLink />
      </li>
      <li>
        <a href="tel:+442035761810">
          020&nbsp;3576&nbsp;1810
        </a>
        {' '}
        or
        {' '}
        <a href="tel:+447803171093">
          07&nbsp;803&nbsp;171&nbsp;093
        </a>
      </li>
    </ul>
  </div>
);

export default ContactUs;
