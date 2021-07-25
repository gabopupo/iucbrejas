import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sections from '../../components/Sections';
import GenericBeer from '../../assets/generic-beer.png';
import { Button, Form, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router';

import './styles.css';

function Checkout({ history }) {
    const mastercardIcon = require('../../assets/mastercard.svg').default;
    const motorcycleIcon = require('../../assets/motorcycle.svg').default;
    const discountTicketIcon = require('../../assets/discount-ticket.svg').default;
    const shoppingCartIcon = require('../../assets/shopping-cart.svg').default;
    const checkoutIcon = require('../../assets/checkout.svg').default;
    const idCardIcon = require('../../assets/id-card.svg').default;

    const [qtd,changeQtd] = useState(3);
    const [itemOnCart, setItemOnCart] = useState(true);
    useEffect(() => { 
        if (qtd === 0)
            if(window.confirm('Você deseja remover o produto \'Cerveja Genérica\' do carrinho?'))
                setItemOnCart(false);
            else changeQtd(1);
    },[qtd]);
  return (
      <>
        <Header />
        <Sections />
        {itemOnCart ? 
        <div className="checkout-page">
            <h2>Confirme a sua compra</h2>
            <div className="checkout-confirm-info">
                <div className="checkout-confirm-product">
                    <div className="checkout-confirm-pic">
                        <img src={GenericBeer} alt='Item' />
                    </div>
                    <div className="checkout-confirm-desc">
                        <h3>Cerveja Genérica 300ml</h3>
                        <p>Cód. Barras: 0xxxxxxxxxxxxx</p>
                    </div>
                </div>
                <div className="checkout-confirm-unit-val">
                    <h3>Valor unit</h3>
                    <h3>R$ 1.99</h3>
                </div>
                <div className="checkout-confirm-qtd">
                    <h3>Quantidade</h3>
                    <div className="checkout-confirm-qtd-selector">
                        <Button onClick={() => changeQtd(qtd-1 < 0 ? qtd:qtd-1)}>-</Button>
                        <Form>
                            <FormControl type="text" value={qtd} readOnly className="mr-sm-2 product-qtd-selector-input" />
                        </Form>
                        <Button onClick={() => changeQtd(qtd+1)}>+</Button>
                    </div>
                </div>
            </div>
            <div className="checkout-confirm-total-val">
                Valor total: <span className="checkout-confirm-total-val-number">R$11.94</span>
            </div>
            <div className="checkout-secondary-info">
                <div className="checkout-payment-method">
                    <img src={mastercardIcon} alt="MasterCard" />
                    <p>MasterCard final 4321 <span className="checkout-change">Trocar</span></p>
                </div>
                <div className="checkout-arrival-time">
                    <img src={motorcycleIcon} alt="Entrega em motocicleta" />
                    <p>Chegará em 20 minutos<br />Entrega em Rua Episcopal, 1700 - São Carlos <span className="checkout-change">Trocar</span></p>
                </div>
                <div className="checkout-cpf">
                    <img src={idCardIcon} alt="CPF" />
                    <p>CPF: 123.456.789-01 <span className="checkout-change">Trocar</span></p>
                </div>
            </div>
            <div className="checkout-opt-buttons">
                <Button><img src={discountTicketIcon} alt="Inserir cupom" /> Inserir cupom</Button>
                <Button onClick={() => history.push('/')}><img src={shoppingCartIcon} alt="Voltar à loja" /> Voltar à loja</Button>
                <Button className="checkout-opt-primary"><img src={checkoutIcon} alt="Fazer pedido" /> Fazer pedido</Button>
            </div>
        </div>
        :
        <div className="checkout-page">
            <h2>Seu carrinho está vazio!</h2>
            <div className="checkout-opt-buttons">
                <Button onClick={() => history.push('/')}><img src={shoppingCartIcon} alt="Voltar à loja" /> Voltar à loja</Button>
            </div>
        </div>
        }
        <Footer />
      </>
  );
}

export default withRouter(Checkout);