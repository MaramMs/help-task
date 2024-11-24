'use client'

import React from 'react'
import Card from 'react-bootstrap/Card';
import { IoIosArrowForward } from "react-icons/io";
import '../../styles/home.css'

function ServiceCard({item}) {
  console.log(item ,'item');
  
 
  return (
    <Card className='service-card'>
    <Card.Header className='card-header'>
      <img src={item.icon} />
      
    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z" fill="#405189"/>
<path d="M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z" fill="#405189"/>
<path d="M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z" fill="#405189"/>
<path d="M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z" fill="#405189"/>
</svg> */}
<h5 className='card-title' >
{item.title}
    </h5>


    </Card.Header>
    <Card.Body>
    <div className='service-title'>
    Fake caption title     
    
    <IoIosArrowForward />



      </div>


      <div className='service-title'>
    Fake caption title     
    
    <IoIosArrowForward />


      </div>

      <div className='service-title'>
    Fake caption title     
    
    <IoIosArrowForward />


      </div>


      <div className='service-title'>
    Fake caption title     
    
    <IoIosArrowForward />


      </div>


      <div className='service-title'>
    Fake caption title     
    
    <IoIosArrowForward />


      </div>

 
    </Card.Body>
  </Card>
  )
}

export default ServiceCard