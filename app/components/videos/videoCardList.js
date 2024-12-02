import React from 'react'
import VideoCard from './videoCard'
import { Col, Container, Row } from 'react-bootstrap'

const  VideoCardList = () => {
  const videoCardItems = [
    {
      id:1,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    },
    {
      id:2,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    },
    {
      id:3,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    },
    {
      id:4,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    },
    {
      id:5,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    },
    {
      id:6,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    }
    ,  {
      id:7,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    }
    ,  {
      id:8,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    }
    ,  {
      id:9,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    }
    ,  {
      id:10,
      title:'VUE JS SCRATCH COURSE',
      des:'      More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
    }
  ]
  
  return (
 
      <Row className=' gap-y-[32px]'>
        {
          videoCardItems.map((item)=>(
            <Col xs={12} md={6} lg={3} key={item.id}>
            <VideoCard item={item}/>
          </Col>
          ))
        }
      

        
      </Row>

  )
}

export default VideoCardList
