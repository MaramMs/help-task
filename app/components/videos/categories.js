'use client'
import React, { useState } from "react";
import Category from './category'

const Categories = () => {
    const categoryList=[
        {
            id:1,
            name:'All Recommendation'
        },
        {
            id:2,
            name:'Adobe Illustrator'
        },
        {
            id:3,
            name:'Adobe Photoshop'
        },
        {
            id:4,
            name:'UI Design'
        },
        {
            id:5,
            name:'Web Programming'
        },
        {
            id:6,
            name:'Mobile Programming'
        },
        {
            id:7,
            name:'Backend Development'
        }, 
          {
            id:8,
            name:'Backend Development'
        }
    ]
    const [activeCategory, setActiveCategory] = useState(categoryList[0].id);

  
  return (
    <div className='flex gap-[8px] lg:gap-[20px]  md:justify-start overflow-x-auto'>
        {
            categoryList.map((category)=>(
                <Category key={category.id} name={category.name} id={category.id} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            )
        )
        }
   
    </div>
  )
}

export default Categories
