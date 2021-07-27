import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sections from '../../components/Sections';
import Item from './Item';

import './styles.css';

function BeerCategory() {
  return (
      <>
      <Header />
      <Sections />
      <div role="main" className="cat-page">
        <h1>CERVEJAS</h1>
        <div className="cat-grid">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Footer />
      </>
  );
}

export default BeerCategory;