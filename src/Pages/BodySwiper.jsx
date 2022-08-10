import React from 'react'
import img1 from '../Images/body/bd1.png'
import img2 from '../Images/body/bd2.png'
import img3 from  '../Images/body/bd3.png'
import img4 from '../Images/body/bd4.png'

import d1 from '../Images/dress/d1.png'
import d2 from '../Images/dress/d2.png'
import d3 from '../Images/dress/d3.png'
import d4 from '../Images/dress/d4.png'

import e1 from '../Images/eye/e1.png'
import e2 from '../Images/eye/e2.png'
import e3 from '../Images/eye/e3.png'
import e4 from '../Images/eye/e4.png'


import h1 from '../Images/hat/h1.png'
import h2 from '../Images/hat/h2.png'
import h3 from '../Images/hat/h3.png'
import h4 from '../Images/hat/h4.png'

import f1 from '../Images/face/f1.png'
import f2 from '../Images/face/f2.png'
import f3 from '../Images/face/f3.png'
import f4 from '../Images/face/f4.png'


// Import Swiper React components
import SwiperCore,{Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import zIndex from '@mui/material/styles/zIndex'

SwiperCore.use([Autoplay])

const BodySwiper = () => {


  return (
    <>
    <div className='swiper-container'>
     
   
       <Swiper 
        
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        speed={1000}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><img src={img1} alt="abc"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="abc"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="abc"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="abc"/></SwiperSlide>
        </Swiper>

    <Swiper 

      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      speed={2000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={e1} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={e2} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={e3} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={e4} alt="abc" /></SwiperSlide>
    </Swiper>
    
    <Swiper 
      
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      speed={2000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={h1} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={h2} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={h3} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={h4} alt="abc" /></SwiperSlide>
    </Swiper>

    <Swiper 
      
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      speed={2500}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={f1} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={f2} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={f3} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={f4} alt="abc" /></SwiperSlide>
    </Swiper>
    
    <Swiper 

      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      speed={2000}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={d1} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={d2} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={d3} alt="abc" /></SwiperSlide>
      <SwiperSlide><img src={d4} alt="abc" /></SwiperSlide>
    </Swiper>
    </div>
    </>  
   );
};

export default BodySwiper;