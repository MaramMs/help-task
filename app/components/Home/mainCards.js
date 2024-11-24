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
    </Container>
  )
}

export default MainCards