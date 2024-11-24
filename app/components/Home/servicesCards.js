'use'
import React from 'react'
import ServiceCard from './serviceCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainCard from './mainCard';
function ServicesCards() {
  return (
    <Container>
    <Row>
         <Col>
         
         <ServiceCard />
         </Col>
        <Col>
        <ServiceCard />
        </Col>
        <Col>
        
        <ServiceCard />
        </Col>
    </Row>
    <Row>
         <Col>
         
         <ServiceCard />
         </Col>
        <Col>
        <ServiceCard />
        </Col>
        <Col>
        
        <ServiceCard />
        </Col>
    </Row>
    <Row>
         <Col>
         
         <ServiceCard />
         </Col>
        <Col>
        <ServiceCard />
        </Col>
        <Col>
        
        <ServiceCard />
        </Col>
    </Row>
  </Container>
  )
}

export default ServicesCards
