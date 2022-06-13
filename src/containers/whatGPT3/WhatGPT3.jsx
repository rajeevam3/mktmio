import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About" text="Cultures and communities are the new asset class, We build it from the ground up and scale it! We are a multi-disciplinary forward-thinking design studio focused on building a digital presence to gracefully build trusted communities." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Why us?</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Value" text="We deliver value and are true to what we do." />
      <Feature title="Capabilities" text="Market and user research, Brand/service strategy & positioning, and Technology strategy." />
      <Feature title="Social Good" text="Always strive towards positive societal impact." />
    </div>
  </div>
);

export default WhatGPT3;
