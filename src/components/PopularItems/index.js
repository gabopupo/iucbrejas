import React from 'react';
import PopularItem from './PopularItem';

import './styles.css';

function PopularItems() {
  return (
      <div className="popular-items">
          <h2>Populares no Brejas.com</h2>
          <div className="popular-items-table">
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
          </div>
      </div>
  );
}

export default PopularItems;