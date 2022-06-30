import React from 'react';
import gpt3Logo from '../../logoWhite.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>@2022 BNGLR Studios.</p>
        {/* <p>Bengaluru, Karnataka India <br /> All Rights Reserved</p> */}
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        {/* <p>Crechterwoord K12 182 DK Alknjkcb</p> */}
        <p>+91-8105646516</p>
        <p>gm@bnglr.io</p>
      </div>
    </div>

    {/* <div className="gpt3__footer-copyright">
      <p>@2022 BNGLR Studios.</p>
    </div> */}
  </div>
);

export default Footer;
