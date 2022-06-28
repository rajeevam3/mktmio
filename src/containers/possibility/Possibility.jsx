import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond ones imagination</h1>
      <p>We would love to listen to your vision and share your excitement, to explore the possibilities. </p>
      <h4>Reach us at gm@bnglr.io</h4>
    </div>
  </div>
);

export default Possibility;
