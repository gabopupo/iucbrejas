import React from 'react';
import './styles.css';

import GenericBeer from '../../../../../assets/generic-beer.png';
import { Link } from 'react-router-dom';
function PopularItem() {
  return (
    <div className='popular-item'>
        <div className="popular-item-pic">
          <Link to="/cerveja-generica">
            <img src={GenericBeer} alt='Item' />
          </Link>
        </div>
        <p className="popular-item-desc">Cerveja Genérica 300ml</p>
    </div>
  );
}

export default PopularItem;