import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import BrejasContext from '../../BrejasContext';

import './styles.css';

function Sections({ history }) {
    const mapPointerIcon = require('../../assets/map-pointer.svg').default;
    const context = useContext(BrejasContext);
    const deliveryAddress = context.loggedUser ? 'Rua Episcopal, 1700 - São Carlos' : 'Entre para escolher o endereço de entrega!';
  return (
    <Navbar className="sections-bar">
        <Container fluid className="sections-container">
            <Nav className="sections-content" style={{ width: "100%" }}>    
                <Button className="beer-btn" onClick={() => history.push('/cervejas')}>
                    Cervejas
                </Button>
                <Button className="wine-btn">
                    Vinhos
                </Button>
                <Button className="distilled-btn">
                    Destilados
                </Button>
                <Nav.Item className="address-data">
                    <div className="address-data-text">
                        <strong>Quero receber em...</strong><br />
                        {deliveryAddress}
                    </div>
                    <img className="address-pointer-icon" src={mapPointerIcon} alt='Local de entrega' />
                    
                </Nav.Item>
            </Nav>
        </Container>
    </Navbar>
  );
}

export default withRouter(Sections);