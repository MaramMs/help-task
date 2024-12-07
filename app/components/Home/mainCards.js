'use client'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainCard from './mainCard';
function MainCards() {
  return (
  
      <Row >
        <Col xs={12} md={6} lg={4}>
          <MainCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <MainCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <MainCard />
        </Col>
      </Row>

  )
}

export default MainCards