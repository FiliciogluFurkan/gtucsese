import { Box } from "@mui/material";
import profile from "src/assets/images/admindashboard/placeholder.png";
import { Review } from "src/interfaces/Review";
import { renderStars } from "@/services/CommentService";

interface CourtCommentCardsProps {
  readonly review: Review;
}

const CourtCommentCards = ({ review }: CourtCommentCardsProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "30%",
        padding: "1rem",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Barlow",
        fontSize: "1rem",
        color: "#464255",
        textAlign: "center",
        height: "auto",
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "1rem",
          width: "100%",
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
              paddingLeft: "2rem",
            }}
          >
            {review.fullName}
          </Box>
          <Box
            sx={{
              fontSize: "0.8rem",
              color: "#A3A3A3",
              fontFamily: "Barlow",
              fontWeight: "400",
              paddingLeft: "6rem",
              paddingTop: "0.5rem",
            }}
          >
            {review.day} gün önce
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
          {review.review}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "1rem",
            paddingLeft: "1rem",
          }}
        >
          <Box>{review.rating}</Box>
          <Box sx={{ paddingLeft: "1rem", paddingTop: "0.1rem" }}>
            {renderStars(review.rating)}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourtCommentCards;
