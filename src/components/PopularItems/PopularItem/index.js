import React from 'react';
import './styles.css';

import GenericBeer from '../../../assets/generic-beer.png';
function PopularItem() {
  return (
    <div className='popular-item'>
        <div className="popular-item-pic">
            <img src={GenericBeer} alt='Item' />
        </div>
        <p className="popular-item-desc">Cerveja Genérica 300ml</p>
    </div>
  );
}

export default PopularItem;