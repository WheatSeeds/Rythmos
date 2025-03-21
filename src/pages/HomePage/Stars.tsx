import React from "react";
type StarsProps = {
  rating: number;
};

const Stars = ({ rating }: StarsProps) => {
  return (
    <div id="rating-description-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <img
          src={
            i + 1 <= Math.round(rating)
              ? "../../icons/star-fill.svg"
              : "../../icons/star.svg"
          }
          alt="Star"
        />
      ))}
    </div>
  );
};

export default Stars;
