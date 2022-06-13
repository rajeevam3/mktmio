import React from 'react';
// import { google, slack, atlassian, dropbox, shopify } from './imports';
import { stkr, stin, test, nas10k } from './imports';
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
      <img src={test} />
    </div>
    <div>
      <img src={nas10k} />
    </div>
    {/* <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div> */}
  </div>
);

export default Brand;
