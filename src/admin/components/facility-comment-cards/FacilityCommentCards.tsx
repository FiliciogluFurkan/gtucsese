import { Box } from "@mui/material";
import profile from "src/assets/images/admindashboard/placeholder.png";
import { Review } from "src/interfaces/Review";
import { renderStars } from "@/services/CommentService";

interface FacilityCommentCardsProps {
  readonly review: Review;
}

const FacilityCommentCards = ({
  review,
}: FacilityCommentCardsProps): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "250px",
        minHeight: "250px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "1rem",
          width: "100%",
          flex: 1,
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box sx={{ paddingLeft: "1rem" }}>
            <img
              style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
              src={profile}
              alt="profile"
            />
          </Box>
          <Box
            sx={{
              fontWeight: "600",
              fontFamily: "Barlow",
              fontSize: "1.2rem",
              color: "#464255",
              paddingLeft: "1rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "150px",
            }}
          >
            {review.author}
          </Box>
          <Box
            sx={{
              fontSize: "0.8rem",
              color: "#A3A3A3",
              fontFamily: "Barlow",
              fontWeight: "400",
              paddingLeft: "2rem",
              paddingTop: "0.5rem",
              marginLeft: "auto",
            }}
          >
            {review.createdAt} gün önce
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            textAlign: "left",
            paddingLeft: "1rem",
            paddingTop: "1.5rem",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {review.content}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "1rem",
          marginTop: "auto",
          borderTop: "1px solid #eee",
          paddingTop: "1rem",
        }}
      >
        <Box>{review.rating.toFixed(1)}</Box>
        <Box sx={{ paddingLeft: "0.5rem" }}>{renderStars(review.rating)}</Box>
      </Box>
    </Box>
  );
};

export default FacilityCommentCards;
