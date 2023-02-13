import React from 'react';

import Custom from '../components/Custom';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Custom />
      <Newsletter />
    </>
  );
};

export default Home;
