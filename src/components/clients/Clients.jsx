import React from 'react';
import { file, cred, acce, wewo, ktlo, iilo, umlo } from './imports';
import './clients.css';

const Clients = () => (
  <div className="gpt3__clients section__padding">
    <div>
      <img src={ktlo} />
    </div>
    <div>
      <img src={acce} />
    </div>
    <div>
      <img src={file} />
    </div>
    <div>
      <img src={cred} />
    </div>
    <div>
      <img src={iilo} />
    </div>
    <div>
      <img src={umlo} />
    </div>
    <div>
      <img src={wewo} />
    </div>
  </div>
);

export default Clients;
