'use client'
import Link from 'next/link';
import React from 'react'
import { Card } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";

const VideoCard = ({item}) => {  
  return (
    <Link href={`/videodetails/${item.id}`} >
    <Card className='border-none '>
    <Card.Img variant="top" src="/images/card1.jpeg" className='img-card'/>
    <Card.Body>
      <Card.Title className='text-[16px] text-[#000] '>
  
      VUE JS SCRATCH COURSE

      </Card.Title>
      <Card.Text className='text-[#666] text-[14px] font-normal mt-[8px]'>
      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...
        </Card.Text>
   
      
    </Card.Body>
  </Card>
    </Link>
  )
}

export default VideoCard
