import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import './styles.css';

function Sections() {
    const mapPointerIcon = require('../../assets/map-pointer.svg').default;
    const deliveryAddress = 'Rua Episcopal, 1700 - São Carlos';
  return (
    <Navbar className="sections-bar">
        <Container fluid className="sections-container">
            <Nav className="sections-content" style={{ width: "100%" }}>    
                <Button className="beer-btn">
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

export default Sections;