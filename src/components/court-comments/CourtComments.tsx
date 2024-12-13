import { Box, Typography } from "@mui/material";
import { renderStars } from "@/services/CommentService";
import { Review } from "@/interfaces/Review";

interface CommentOfCourtsProps {
  readonly review: Review;
}

const CommentOfCourts = ({ review }: CommentOfCourtsProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "1rem",
        width: "40vw",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "1rem",
            color: "#333",
            fontWeight: "600",
          }}
        >
          {review.author}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "#666",
            width: "11ch",
          }}
        >
          {review.createdAt} gün önce
        </Typography>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", paddingTop: "1rem" }}
      >
        <Typography sx={{ width: "30vw" }}>{review.content}</Typography>

        <Typography sx={{ paddingTop: "0.5rem" }}>
          {renderStars(review.rating)}
        </Typography>
        <hr style={{ marginTop: "1rem", width: "40vw" }} />
      </Box>
    </Box>
  );
};

export default CommentOfCourts;
