import React from 'react';
import { Link } from 'react-router-dom';

import GenericBeer from '../../../assets/generic-beer.png';
import './styles.css';

function Item() {
    return (
        <div className='cat-item'>
            <div className="cat-item-pic">
                <Link to="/cerveja-generica">
                    <img src={GenericBeer} alt='Item' />
                </Link>
            </div>
            <p className="cat-item-title">Cerveja Genérica</p>
            <p className="cat-item-desc">Lata 300ml</p>
            <p className="cat-item-price">R$ 1,99</p>
        </div>
      );
}

export default Item;