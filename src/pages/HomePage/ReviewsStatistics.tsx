import "../../styles/HomePageStyles/ReviewStatistics.css";
import Stars from "./Stars.tsx";

const ReviewsStatistics = () => {
  const reviewsStatisticsData = {
    reviews: 10683,
    "reviews-stats": [7709, 2569, 270, 90, 45],
    text: "Every review matters, helping us improve and provide the best experience. Your feedback shapes our growth - share your thoughts and make a difference!",
  };

  const rating = 4.7;

  return (
    <div>
      <span id="reviews-statistics-title">Customers reviews</span>
      <div id="reviews-statistics">
        <div>
          <div id="rating-description">
            <span id="rating-description-number">{rating}</span>
            <Stars rating={rating} />
            <span id="rating-description-count-reviews">
              {reviewsStatisticsData.reviews} reviews
            </span>
          </div>
          <span id="rating-description-text">{reviewsStatisticsData.text}</span>
        </div>
        <div>
          {reviewsStatisticsData["reviews-stats"].map((item, index) => (
            <div className="review-stats-line">
              <span className="review-stats-line-count">{5 - index}</span>
              <div
                style={{
                  width: `${380 * (item / reviewsStatisticsData.reviews)}px`,
                }}
              ></div>
              <span className="review-stats-line-interest">
                {((item / reviewsStatisticsData.reviews) * 100).toFixed(0)}%
              </span>
              <span className="review-stats-line-count">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsStatistics;
