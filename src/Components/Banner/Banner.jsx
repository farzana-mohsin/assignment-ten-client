import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='my-8 h-min'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          {" "}
          <img
            className='mx-auto w-full h-1/4'
            src='https://i.ibb.co/GRnRZYP/istockphoto-1436217023-612x612.webp'
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='mx-auto w-full h-1/4'
            src='https://i.ibb.co/GRnRZYP/istockphoto-1436217023-612x612.webp'
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className='mx-auto w-full h-1/4'
            src='https://i.ibb.co/QJJQwN2/02C.jpg'
          ></img>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <div
          className='autoplay-progress'
          slot='container-end'
        >
          <svg
            viewBox='0 0 48 48'
            ref={progressCircle}
          >
            <circle
              cx='24'
              cy='24'
              r='20'
            ></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
