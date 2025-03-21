import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../styles/HomePageStyles/ReviewsCarousel.css";
import ReviewCard from "./ReviewCard.tsx";
import { reviews } from "../../data/reviews.ts";
import { Autoplay } from "swiper/modules";

const ReviewsCarousel = () => {
  return (
    <div>
      <span id="reviews-statistics-title">What’s our customer says?</span>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        id="reviews-statistics-carousel"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <ReviewCard
              author={review.author}
              review={review.review}
              photo={review.photo}
              rating={review.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
