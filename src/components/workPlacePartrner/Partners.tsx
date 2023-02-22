import { heroArr } from '@/utils/workPlacePartrner';
import React from 'react'
import Slider from 'react-slick'
import PartnersCard from '../card/workPlaccePartners/PartnersCard';
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
export default function Partners() {
  return (
    <section className='w-full main-container my-24'>
        <Slider {...settings}>
        
            {
                
                heroArr.map((item)=>(
                    <div key={item.id
                    }>
                    <PartnersCard item={item}/>
                    </div>
                ))
              
            }
     
        </Slider>
    </section>
  )
}
