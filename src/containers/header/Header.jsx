import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Supercharging Cultures and Communities..</h1>
      <p>Building community is a businesswide goal. We provide tech focused design services and strategies to research, outreach, build, engage and leverage brand communities.</p>

    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
