import React, { useContext, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sections from '../../components/Sections';

import './styles.css';
import GenericBeer from '../../assets/generic-beer.png';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BrejasContext from '../../BrejasContext';

function Product() {
  const shoppingCartIcon = require('../../assets/shopping-cart.svg').default;
  const backIcon = require('../../assets/back.svg').default;
  const [qtd, changeQtd] = useState(0);

  const context = useContext(BrejasContext);
  const addToCart = () => {
    if (qtd === 0) alert('Insira uma quantidade maior que zero!');
    else {
      context.setItemsOnCart(context.itemsOnCart + qtd);
      alert(`Você adicionou ${qtd} unidade(s) de Cerveja Genérica no carrinho!`)
    }
  };

  return (
      <>
        <Header />
        <Sections />
        <div role="main" className="product-page">
          <div className="product-back">
            <Link className="product-back-btn" to="/">
              <img className="product-back-icon" src={backIcon} alt="Voltar" /> Voltar
            </Link>
          </div>
          <div className="product-container">
            <div className="product-pic">
                <img src={GenericBeer} alt='Item' />
            </div>
            <div className="product-data">
              <div role="region" aria-label="Dados do produto">
                <h2>Cerveja Genérica</h2>
                <h4>R$ 1,99</h4>
                
                <p>★★★★☆</p>
                <p>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at hendrerit quam, eget lacinia dolor.</p>
                <div className="product-qtd">
                  <p><strong>Quantidade: </strong></p>
                  <div className="product-qtd-selector">
                    <Button onClick={() => changeQtd(qtd-1 < 0 ? qtd:qtd-1)}>-</Button>
                    <Form>
                      <FormControl title="Quantidade" type="text" value={qtd} readOnly className="mr-sm-2 product-qtd-selector-input" />
                    </Form>
                    <Button onClick={() => changeQtd(qtd+1)}>+</Button>
                  </div>
                </div>
              </div>
              <Button onClick={addToCart} className="product-add-to-cart">
                <img className="product-add-to-cart-icon" src={shoppingCartIcon} alt="Adicionar ao Carrinho" />
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default Product;