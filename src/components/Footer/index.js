import React from 'react';

import './styles.css';

function Footer() {
  const facebookIcon = require('../../assets/fb.svg').default;
  const instagramIcon = require('../../assets/insta.svg').default;
  const twitterIcon = require('../../assets/twitter.svg').default;

  return (
      <div className='footer'>
          <div className="footer-row footer-primary">
            <a href="#home">Início</a>
            <a href="#home">Sobre nós</a>
            <a href="#home">Contato</a>
            <a href="#home">Parcerias</a>
            <a href="#home">Ajuda</a>
            <div className="footer-socials">
              <a href="#home"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#home"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#home"><img src={twitterIcon} alt="Twitter" /></a>
            </div>
          </div>
          <div className="footer-row">
            <a href="#home">Termos de Uso</a>
            <a href="#home">Política de Privacidade</a>
          </div>
      </div>
  );
}

export default Footer;