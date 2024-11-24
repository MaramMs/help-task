'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainCard from './mainCard';
function MainCards() {
  return (
    <Container>
    <Row>
         <Col>
         
         <MainCard />
         </Col>
        <Col>
        <MainCard />
        </Col>
        <Col>
        
        <MainCard />
        </Col>
    </Row>
  </Container>
  )
}

export default MainCards