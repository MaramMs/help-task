'use client'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa6";

function MainCard() {
  return (
    <Card className='border-none '>
    <Card.Img variant="top" src="/images/card1.jpeg" className='img-card'/>
    <Card.Body className='py-[32px]'>
      <Card.Title className='d-flex justify-between items-center text-[22px] text-[#242424] '>
      konin store overview
      <FaArrowRight />


      </Card.Title>
   
      
    </Card.Body>
  </Card>
  )
}

export default MainCard