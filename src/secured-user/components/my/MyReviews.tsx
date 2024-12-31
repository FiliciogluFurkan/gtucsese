import { Box, Button, Stack } from "@mui/material";

import frieren from "src/assets/images/MyComments/frieren.png";
import pencil from "src/assets/images/MyComments/pencil.png";
import arrow_down from "src/assets/images/MyComments/arrow-down.png";
import { useEffect, useState } from "react";
import { Review } from "@/interfaces/Review";
import { useSendAuthenticatedRequest } from "@/services/UseSendAuthenticatedRequest";
import { useSnackbar } from "@/components/snackbar/Snackbar";
import { formatInstantAsDate } from "@/services/TimeServices";
import { renderStars } from "@/services/CommentService";
import { useCustomTheme } from "@/themes/Theme";
import UpdateReview from "../update-review/UpdateReview";

const MyReviews = (): JSX.Element => {
  const limiter = 3;
  const [limitx, setLimitx] = useState(1);
  const theme = useCustomTheme();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [onViewReviews, setOnViewReviews] = useState<Review[]>([]);
  const [updateReview, setUpdateReview] = useState<Review | null>(null);
  const [isUpdateReviewOpen, setIsUpdateReviewOpen] = useState(false);
  const closeUpdateReview = () => {
    setIsUpdateReviewOpen(false);
  };

  const apiUrl = import.meta.env.VITE_API_URL as string;
  const showSnackbar = useSnackbar();
  const { sendAuthenticatedRequest } = useSendAuthenticatedRequest();

  const fetchReviews = async () => {
    try {
      const response = await sendAuthenticatedRequest({
        url: apiUrl + "/api/v1/reviews",
        method: "get",
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch reviews");
      }
      setReviews(response.data);
      setOnViewReviews(response.data.slice(0, limiter * limitx));
    } catch (error) {
      console.error(error);
      showSnackbar("Failed to fetch reviews", "error");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const openReviewUpdate = (review: Review) => {
    setUpdateReview(review);
    setIsUpdateReviewOpen(true);
  };

  const updateReviewCallback = (updatedReview: Partial<Review>) => {
    if (!updateReview) {
      return;
    }

    const response = sendAuthenticatedRequest({
      url: apiUrl + "/api/v1/review/" + updateReview.id,
      method: "patch",
      data: updatedReview,
    });

    response.then((response) => {
      if (response.status === 200) {
        showSnackbar("Review updated successfully", "success");
        fetchReviews();
      } else {
        showSnackbar("Failed to update review", "error");
      }
    });
  };

  const viewAllReviews = () => {
    console.log("Total Reviews: " + reviews.length);

    setLimitx(limitx + 1);
    console.log(limitx);

    setOnViewReviews(reviews.slice(0, limiter * (limitx + 1)));
  };

  return (
    <Stack width="100%">
      <UpdateReview
        review={updateReview}
        onSubmit={updateReviewCallback}
        isOpen={isUpdateReviewOpen}
        onClose={closeUpdateReview}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          marginTop: { xs: "2rem", md: "3rem" },
        }}
      >
        {onViewReviews.map((review) => (
          <Box
            sx={{
              width: "100%",
              marginTop: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <Box
              onClick={() => openReviewUpdate(review)}
              sx={{
                display: "flex",
                cursor: "pointer",
                padding: "1rem",
                transition: "0.3s",
                backgroundColor: theme.palette.background.primary.w253,
                ":hover": {
                  backgroundColor: theme.palette.background.primary.w253,
                  transform: "translateY(-0.5rem)",
                },
                boxShadow: "0px 4px 4px rgba(200, 200, 200, 0.25)",
                borderRadius: "0.5rem",
                alignItems: "flex-start",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <Box
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={review.profilePicture || frieren}
                  alt="your image"
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "scale-down",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  paddingLeft: "1.5rem",
                }}
              >
                <Box
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    fontSize: "0.9rem",
                    color: "#000000",
                  }}
                >
                  {review.title}
                </Box>

                <Box
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Poppins",
                    paddingTop: "0.1rem",
                    fontSize: "0.7rem",
                    color: "#B1ABAB",
                  }}
                >
                  {review.author} &bull; {formatInstantAsDate(review.createdAt)}
                </Box>

                <Box
                  sx={{
                    fontWeight: "300",
                    fontFamily: "Quicksand",
                    fontSize: "0.9rem",
                    color: theme.palette.tx.primary.w500,
                    paddingTop: "0.7rem",
                    width: "100%",
                  }}
                >
                  {review.content}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    marginTop: "1rem",
                    flexDirection: "row",
                  }}
                >
                  {renderStars(review.rating)}

                  <Box
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Barlow",
                      fontSize: "0.9rem",
                      color: "#464255",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    {review.rating}
                    {".0"}
                  </Box>
                </Box>
              </Box>

              <Button
                sx={{
                  minWidth: "35px",

                  padding: "0.5rem",
                }}
              >
                <img
                  src={pencil}
                  alt="your image"
                  style={{ width: "16px", height: "16px", objectFit: "cover" }}
                />
              </Button>
            </Box>
          </Box>
        ))}
        {limiter * limitx <= reviews.length && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "4rem",
              gap: "1rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              onClick={viewAllReviews}
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                cursor: "pointer",
                minWidth: "0",
                fontSize: "1rem",
                color: "#000000",
              }}
            >
              Daha Fazla Göster
            </Button>

            <Box>
              <img
                src={arrow_down}
                alt="your image"
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
            </Box>
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default MyReviews;
