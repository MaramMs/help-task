import TableCustom from '@/app/components/pricing/tableCustom'
import Search from '@/app/components/sharedComponet/search'
import React from 'react'

const Pricing = () => {
  return (
  <section>
    <div className= " md:w-[50%] m-auto flex flex-col justify-center items-center gap-[8px] md:gap-[16px]">
        <h1 className="text-[#1A1A1A] text-[14px] md:text-[32px]">Find the plan that’s right for you</h1>
       <p className='text-[#667085] text-[12px] md:text-[14px] text-center md:text-left'>
       Enjoy the comprehensive plan of your choice with a variety of features tailored to suit your needs.
       </p>
       <div className='flex justify-between p-[5px] w-full border border-[#42538D] rounded-[3px] bg-[#42538D1A]'>

<div className='bg-[#FFFFFF] text-[#42538D] pt-[14px] pb-[12px] px-[8px] lg:px-[79px] text-[14px] lg:text-[16px] font-bold'>
Monthly
</div>

<div className=' text-[#42538D] pt-[14px] pb-[12px] px-[8px] lg:px-[79px] text-[14px] lg:text-[16px] font-bold'>
Monthly
</div>

<div className=' text-[#42538D] pt-[14px] pb-[12px] px-[8px] lg:px-[79px] text-[14px] lg:text-[16px] font-bold'>
Monthly
</div>

</div>
    
      </div>
<div className='mt-[53px]'>
    <TableCustom />
</div>
  </section>
  )
}

export default Pricing