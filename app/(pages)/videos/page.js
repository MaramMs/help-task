import React from 'react'
import '../../styles/home.css'
import Search from '@/app/components/Home/search'
import VideoCardList from '@/app/components/videos/videoCardList'
import Categories from '@/app/components/videos/categories'

const Videos = () => {
  return (
    <section className='mt-[40px]'>
<div className="flex flex-col justify-center items-center">
        <h1 className="mainTitle">We are happy to Help you</h1>
        <Search />
      </div>

      <div className='mt-[40px]'>
        <Categories />
      </div>

      <div className='mt-[32px]'>
        <VideoCardList />
      </div>


    
    </section>
  )
}

export default Videos
