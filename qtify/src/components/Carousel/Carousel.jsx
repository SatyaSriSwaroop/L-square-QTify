// Carousel.js
import React, { useEffect, useRef }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper';
import LeftNavButton from './LeftNavButton';
import RightNavButton from './RightNavButton';
import './Carousel.module.css'

const Carousel = ({ items, renderItem }) => {
    // items = [];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={100}
      slidesPerView={7}
      width={1200}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 7,
        },
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev " ref={prevRef}><LeftNavButton /></div>
      <div className="swiper-button-next " ref={nextRef}><RightNavButton /></div>
    </Swiper>
  );
};

export default Carousel;
