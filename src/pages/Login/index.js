import React, { useContext } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import BrejasContext from '../../BrejasContext';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sections from '../../components/Sections';

import './styles.css';

function Login({ history }) {
    const beerRedIcon = require('../../assets/beer-red.svg').default;
    const facebookIcon = require('../../assets/fb.svg').default;
    const context = useContext(BrejasContext);

    const login = () => {
        context.setLoggedUser(true);
        history.push('/');
    }

  return (
      <>
        <Header />
        <Sections />
        <div role="main" className="login-page">
            <img className="login-beer-icon" src={beerRedIcon} alt="Faça seu login" />
            <Button role="region" aria-label="Entrar com Facebook" onClick={login} className="login-fb-btn">
                <img src={facebookIcon} alt="Facebook" className="login-fb-icon" /> Continuar com Facebook
            </Button>
            ou
            <div role="region" aria-label="Entrar com email">
                <Form>
                    <FormControl title="Login" type="text" placeholder="Email" className="mr-sm-2 login-input" />
                    <FormControl title="Senha" type="password" placeholder="Senha" className="mr-sm-2 login-input" />

                    <Button className="login-submit-btn" onClick={login}>ENTRAR</Button>
                </Form>
                <div className="login-controls">
                    <Link to="/"><strong>Esqueci a Senha</strong></Link><br />
                    <span>Ainda não possui uma conta? <Link to="/"><strong>Crie uma conta</strong></Link></span>
                </div>
            </div>
        </div>
        <Footer />
      </>
  );
}

export default withRouter(Login);