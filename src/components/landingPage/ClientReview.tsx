import { ClientImg, ClientReviewImg } from '@/assets/LandingPage/service'
import { clientReviewArr } from '@/utils/landinPage'
import React from 'react'
import ClientReviewCard from '../card/landingPage/ClientReviewCard'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
export default function ClientReview() {
  return (
    <section className='w-full main-container flex flex-col items-start justify-center gap-6 my-24 relative'>
      <div className='w-full flex flex-col items-start justify-between gap-4'>
        <p className='text-lg font-bold text-red-600 uppercase'>testimonials</p>
        <h1 className='text-3xl font-bold capitalize'>our clients said</h1>
      </div>
      <div style={{backgroundImage:`url(${ClientReviewImg.src})`}} className="bg-cover bg-center bg-no-repeat h-[60vh] w-full"></div>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-6'>
            {
                clientReviewArr.map((item)=>(
                  <div key={item.id}>

                    <ClientReviewCard item={item}/>
                  </div>
                ))
            }
      </div>
      <span className='w-96 h-64 bg-white absolute top-0 lg:right-10 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-start justify-between p-4 gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, odio architecto! Cumque excepturi, quam vel eligendi nam molestias, et mollitia odit odio dolor dolorum beatae?</p>
            <div className='w-full flex items-center justify-between'>
                <span className='center gap-3'>
                    <img src={ClientImg.src} alt="" className='w-12 h-12 rounded-full object-cover'/>
                    <span>
                        <h1 className='text-lg font-bold capitalize'>sameer</h1>
                        <p className='text-red-600 capitalize'>client</p>
                    </span>
                </span>
               
                    <FormatQuoteIcon className='!text-red-600 !text-7xl'/>
               
            </div>
      </span>
    </section>
  )
}
