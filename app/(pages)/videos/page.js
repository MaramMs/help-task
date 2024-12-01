import Search from '@/app/components/sharedComponet/search'
import Categories from '@/app/components/videos/categories'
import VideoCardList from '@/app/components/videos/videoCardList'
import '../../styles/home.css'

const Videos = () => {
  return (
    <section>
<div className="flex flex-col justify-center items-center gap-[34px]">
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
