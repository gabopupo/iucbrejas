import React from 'react';

import Header from '../../components/Header';
import Sections from '../../components/Sections';
import Footer from '../../components/Footer';
import Carousel from './components/Carousel';
import PopularItems from './components/PopularItems';

function Home() {
  return (
      <>
        <Header />
        <Sections />
        <Carousel />
        <PopularItems />
        <Footer />
      </>
  );
}

export default Home;