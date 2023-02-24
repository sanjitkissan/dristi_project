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
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  
  };
export default function Partners() {
  return (
    <section className='w-full main-container my-24'>
        <Slider {...settings}>
        
            {
                
                heroArr.map((item)=>(
                    <div key={item.id}>
                    <PartnersCard item={item}/>
                    </div>
                ))
              
            }
     
        </Slider>
    </section>
  )
}
