import React from 'react';
import Custom from '../Components/componentsHomePage/Custom';
import Featured from '../Components/componentsHomePage/Featured';
import Hero from '../Components/componentsHomePage/Hero';
import Newsletter from '../Components/componentsHomePage/Newsletter';

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
