// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
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
          <div
            className='hero md:h-[1000px] mx-auto w-full object-cover '
            style={{
              backgroundImage:
                "url(https://i.ibb.co/1vjKKmJ/Cm-Dr5-EYVYAE6n3-P.jpg)",
            }}
          >
            <div className='hero-overlay bg-opacity-15'></div>
            <div className='hero-content text-center text-neutral-content'>
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold text-white'>
                  Hello there
                </h1>
                <p className='mb-5 text-white'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link to='/all-items'>
                  <button className='bg-orange-400 text-white md:px-7 md:py-3 border text-lg rounded-xl mr-3  hover:bg-amber-400'>
                    Explore All Crafts
                  </button>
                </Link>
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
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
                <p className='mb-5'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
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
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
                <p className='mb-5'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
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
              <div className='max-w-md'>
                <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
                <p className='mb-5'>
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
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
