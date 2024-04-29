// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Banner = () => {
  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count);
  // };

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`);
  // };

  return (
    <div className=' w-full'>
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
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
          <div
            className='hero md:h-[1000px] mx-auto w-full object-cover '
            style={{
              backgroundImage:
                "url(https://i.ibb.co/1vjKKmJ/Cm-Dr5-EYVYAE6n3-P.jpg)",
            }}
          >
            <div className='hero-overlay bg-opacity-15'></div>
            <div className='hero-content text-center text-neutral-content'>
              {/* <div className='max-w-md'>
                <h1 className='mb-5 text-lg md:text-5xl font-bold text-white'>
                  Hello there
                </h1>
                <p className='text-sm md:mb-5 text-white'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link to='/all-items'>
                  <button className='bg-orange-400 text-white px-7 py-3 border md:text-lg rounded-xl mr-3  hover:bg-amber-400'>
                    Explore All Crafts
                  </button>
                </Link>
              </div> */}
              <div className='App'>
                <h1
                  className=' mx-auto font-bold md:text-4xl text-white py-16'
                  // style={{
                  //   paddingTop: "5rem",
                  //   margin: "auto 0",
                  //   fontWeight: "bold",
                  //   fontSize: "md:4rem",
                  //   color: "white",
                  // }}
                >
                  {" "}
                  Resurrecting time tested skills
                  <p className='text-yellow-300 font-bold'>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Pursue",
                        "your",
                        "passion",
                        "create",
                        "your",
                        "life!",
                      ]}
                      loop={10}
                      cursor
                      cursorStyle='_'
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={3000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </p>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero md:h-[1000px] mx-auto w-full object-cover '
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gP8CGft/v1-txt2img-50f1a01c-e2b6-426a-9a19-0c24174c9b7c.png)",
            }}
          >
            <div className='hero-overlay bg-opacity-30'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-xl'>
                <h1 className='mb-5 text-4xl font-bold'>
                  A Legendary Community
                </h1>
                <p className='mb-5'>
                  My favorite part of my day is talking to students; it’s so
                  exciting as each student is completely unique with their own
                  story and their own motivations for taking art classes.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero md:h-[1000px] mx-auto w-full object-cover '
            style={{
              backgroundImage:
                "url(https://i.ibb.co/64H3mnX/shutterstock-410271079-1024x1024.webp)",
            }}
          >
            <div className='hero-overlay bg-opacity-30'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-lg'>
                <h1 className='mb-5 text-4xl font-bold text-white'>
                  Experience for the artist in you
                </h1>
                {/* <p className='mb-5'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className='hero md:h-[1000px] mx-auto w-full object-cover '
            style={{
              backgroundImage:
                "url(https://i.ibb.co/xC6tXzB/81z-Ym-WDc8e-L-AC-UF894-1000-QL80.jpg)",
            }}
          >
            <div className='hero-overlay bg-opacity-30'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-xl text-white'>
                <h1 className='mb-5 text-4xl font-bold'>
                  Founded by artists & supporting artists since 1980
                </h1>
                <p className='mb-5'>
                  At Crown Art School we are teaching different art techniques
                  to students of all ages. During my lessons I try to bring out
                  the inner artists of students to help build their skills.
                </p>
              </div>
            </div>
          </div>
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
