import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function HeroSection() {
  return (
    <section className='w-full main-container flex items-center justify-between gap-6 h-80 my-24'>
      <div className='w-full h-full flex flex-col items-start justify-start gap-4 p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <h1 className='text-3xl font-bold capitalize'>contact info</h1>
        <span className='w-full flex items-center justify-start gap-3'>
            <LocationOnIcon className='!text-red-600'/>
            <h1 className='text-lg text-gray-500 font-medium'>Hayam Wuruk Street PB. 1190 Badung, Bali</h1>
        </span>
        <span className='w-full flex items-center justify-start gap-3'>
        <CallIcon className='!text-red-600'/>
            <h1 className='text-lg text-gray-500 font-medium'>+62 478-2240-190</h1>
        </span>
        <span className='w-full flex items-center justify-start gap-3'>
        <EmailIcon className='!text-red-600'/>
            <h1 className='text-lg text-gray-500 font-medium'>adsboard@support.com</h1>
        </span>
        <span className='w-full flex items-center justify-start gap-3'>
        <WatchLaterIcon className='!text-red-600'/>
            <h1 className='text-lg text-gray-500 font-medium'>Everyday 08:00 AM - 18:00 PM</h1>
        </span>
      </div>

      <div className='w-full h-full flex flex-col items-start justify-start gap-4 p-8 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <h1 className='text-3xl font-bold capitalize'>Stay Connected</h1>
      <p className='text-lg text-gray-500 font-medium'>
      Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt utlabore.
      </p>
      <span className='w-full grid grid-cols-2 gap-2'>
        <span className='flex items-center justify-start gap-2'>
        <FacebookIcon className='!text-red-600'/>
        <p>Facebook</p>
        </span>
        <span className='flex items-center justify-start gap-2'>
        <TwitterIcon className='!text-red-600'/>
        <p>Twitter</p>
        </span>
        <span className='flex items-center justify-start gap-2'>
        <InstagramIcon className='!text-red-600'/>
        <p>Instagram</p>
        </span>
        <span className='flex items-center justify-start gap-2'>
        <YouTubeIcon className='!text-red-600'/>
        <p>Youtube</p>
        </span>
      </span>
      </div>

      <div className='w-full h-full rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937209.947139779!2d77.24439489755821!3d15.488111541751476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17df652ee8bd%3A0xfad4d2e0060724d2!2sdRSTi%20Communications!5e0!3m2!1sen!2sin!4v1676957092438!5m2!1sen!2sin" width="600" height="450"  loading="lazy" ></iframe>
      </div>
    </section>
  )
}
