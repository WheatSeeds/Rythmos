import "../../styles/HomePageStyles/ReviewCard.css";
import Stars from "./Stars.tsx";
type ReviewCardProps = {
  author: string;
  review: string;
  rating: number;
  photo: string;
};

const ReviewCard = ({ author, review, rating, photo }: ReviewCardProps) => {
  console.log(rating);
  return (
    <div className="review-card">
      <img className="review-card-image" src={photo} alt="" />
      <div className="review-card-content">
        <Stars rating={rating} />
        <span className="review-card-review">{review}</span>
        <span className="review-card-author">{author.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
