import React from 'react';
// import { google, slack, atlassian, dropbox, shopify } from './imports';
import { stkr, stin, elev, nas10k, inno } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={stkr} />
    </div>
    <div>
      <img src={stin} />
    </div>
    <div>
      <img src={elev} />
    </div>
    <div>
      <img src={nas10k} />
    </div>
    <div>
      <img src={inno} />
    </div>
  </div>
);

export default Brand;
