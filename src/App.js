import React from 'react';

import { Footer, Possibility, WhatGPT3, Header } from './containers';
import { Brand, Navbar, Work, Clients } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Work />
    {/* <Features /> */}
    <Possibility />
    {/* <CTA /> */}
    {/* <Blog /> */}
    <Clients />
    <Footer />
  </div>
);

export default App;
