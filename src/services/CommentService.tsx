import { Box } from "@mui/material";

export const renderStars = (rating: number | undefined) => {
  if (rating === undefined || rating === null) return [];

  const stars = [];
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Using a warmer, more vibrant orange
  const starColor = "#FF9933"; // Warm orange

  for (let i = 1; i <= 5; i++) {
    if (i <= filledStars) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill={starColor}
          viewBox="0 0 24 24"
          style={{ marginRight: "5px", transition: "transform 0.2s" }}
          className="star"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
        </svg>
      );
    } else if (i === filledStars + 1 && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          style={{ marginRight: "5px", transition: "transform 0.2s" }}
          className="star"
        >
          <defs>
            <linearGradient
              id={`halfStarGradient-${i}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="50%" style={{ stopColor: starColor }} />
              <stop offset="50%" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
          </defs>
          <path
            d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z"
            fill={`url(#halfStarGradient-${i})`}
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          style={{ marginRight: "5px", transition: "transform 0.2s" }}
          className="star"
        >
          <path
            d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z"
            stroke={starColor}
            strokeWidth="1"
          />
        </svg>
      );
    }
  }

  return <Box>{stars}</Box>;
};
