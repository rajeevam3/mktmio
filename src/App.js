import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer, Possibility, WhatGPT3, Header } from './containers';
import { Brand, Navbar, Work, Clients } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <title>MKTM</title>
      <link rel="canonical" href="http://mktm.io" />
      <meta name="description" content="MKTM application" />
    </Helmet>
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
