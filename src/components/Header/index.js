import React from 'react';
import { Container, Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './styles.css';

function Header({history, showIndicator = false}) {
    const notLoggedIcon = require('../../assets/not-logged.svg').default;
    const shoppingCartIcon = require('../../assets/shopping-cart.svg').default;
    const accessibiltyIcon = require('../../assets/accessibility.svg').default;

    return (
        <Navbar>
            <Container>
            <Navbar.Brand><Link to="/">Brejas.com</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end"  style={{ width: "100%" }}>
                <Form inline="true" className="navbar-search-bar">
                    <FormControl type="text" placeholder="Faça sua pesquisa" className="mr-sm-2" />
                </Form>
                <Button className="navbar-login-btn" onClick={() => history.push('/login')}>
                    Entrar<img className="navbar-login-icon" src={notLoggedIcon} alt='Não logado'/>
                </Button>
                <div className='navbar-shopping-cart'>
                <Nav.Link href="/checkout"><img className="navbar-shopping-cart-icon" src={shoppingCartIcon} alt='Carrinho'/></Nav.Link>
                {showIndicator && <div className="navbar-shopping-cart-indicator">1</div>}
                </div>
                <Nav.Link href="#home"><img className="navbar-accessibility-icon" src={accessibiltyIcon} alt='Acessibilidade'/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default withRouter(Header);