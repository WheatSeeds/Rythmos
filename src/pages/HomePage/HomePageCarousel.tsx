import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/HomePageStyles/HomePageCarousel.css";
import { Autoplay } from "swiper/modules";
import Slide from "./Slide.tsx";
import { slides } from "../../data/homePageSlides.ts";

const HomePageCarousel = () => {
  return (
    <Swiper
      id="home-page-slides-carousel"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomePageCarousel;
