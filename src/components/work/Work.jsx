import React from 'react';
// import { mysu,  beng, lo47, chen, indn, } from './imports';
import { mysu, vmnt, mumb, beng, lo47, chen, indn } from './imports';
import './work.css';

const Work = () => (
  <div className="gpt3__work section__padding">
    <div>
      <img src={mysu} />
    </div>
    <div>
      <img src={vmnt} />
    </div>
    <div>
      <img src={mumb} />
    </div>
    <div>
      <img src={beng} />
    </div>
    <div>
      <img src={lo47} />
    </div>
    <div>
      <img src={chen} />
    </div>
    <div>
      <img src={indn} />
    </div>
  </div>
);

export default Work;
