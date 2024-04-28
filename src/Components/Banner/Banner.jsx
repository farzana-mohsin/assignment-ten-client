import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className=' w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            className='md:h-[1000px] mx-auto w-full object-cover'
            src='https://i.ibb.co/1vjKKmJ/Cm-Dr5-EYVYAE6n3-P.jpg'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='md:h-[1000px] mx-auto w-full object-cover'
            src='https://i.ibb.co/gP8CGft/v1-txt2img-50f1a01c-e2b6-426a-9a19-0c24174c9b7c.png'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='md:h-[1000px] mx-auto w-full object-cover'
            src='https://i.ibb.co/64H3mnX/shutterstock-410271079-1024x1024.webp'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className='md:h-[1000px] mx-auto w-full object-cover'
            src='https://i.ibb.co/xC6tXzB/81z-Ym-WDc8e-L-AC-UF894-1000-QL80.jpg'
            alt=''
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
