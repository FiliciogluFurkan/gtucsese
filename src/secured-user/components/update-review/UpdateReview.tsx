import React, { useEffect, useState } from "react";
import { Box, Modal, Typography, Rating, Button, Stack } from "@mui/material";
import { Review } from "@/interfaces/Review";
import { useCustomTheme } from "@/themes/Theme";

interface UpdateReviewProps {
  isOpen: boolean;
  onClose: () => void;
  review: Review | null;

  onSubmit: (updatedReview: Partial<Review>) => void;
}

const UpdateReview = ({
  isOpen,
  onClose,
  review,
  onSubmit,
}: UpdateReviewProps): JSX.Element => {
  const theme = useCustomTheme();
  const [formData, setFormData] = useState({
    rating: review?.rating,
    title: review?.title,
    content: review?.content,
  });
  console.log(formData);

  useEffect(() => {
    if (review) {
      setFormData({
        rating: review.rating,
        title: review.title,
        content: review.content,
      });
    }
  }, [review]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-update-review"
      aria-describedby="modal-update-review-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%" },
          bgcolor: theme.palette.background.primary.w248,
          borderRadius: "1rem",
          boxShadow: 24,
          outline: "none",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          fontWeight={300}
          fontFamily="Outfit"
          sx={{
            width: "100%",
            marginBottom: 0,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            color: theme.palette.tx.secondary.w500,
            padding: { xs: "1.3rem", sm: "1.1rem" },

            paddingLeft: { xs: "1rem", sm: "2rem" },
            backgroundColor: theme.palette.primary.dark,
          }}
          gutterBottom
        >
          Değerlendirmeyi Güncelle
        </Typography>

        <Stack
          sx={{
            padding: { xs: "1rem", sm: "2rem" },
          }}
          spacing={3}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "0.8rem",
              }}
              component="legend"
            >
              Başlık
            </Typography>

            <Box
              component="input"
              sx={{
                backgroundColor: theme.palette.background.primary.w250,
                ":after": {
                  borderBottom: "none",
                },
                ":before": {
                  borderBottom: "none",
                  content: "none",
                },
                borderRadius: "0.5rem",
                boxShadow: "0px 4px 12px rgba(100, 100, 100, 0.15)",
                border: "none",
                padding: "0.8rem",
                ":focus-visible": {
                  outlineStyle: "solid",
                  outlineWidth: "1.5px",
                  outlineColor: "rgb(40 210 40)",
                },

                marginTop: { sm: "0.3rem", md: "0.5rem" },
                width: "100%",
              }}
              name="title"
              value={formData.title}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  title: e.target.value || "",
                }));
              }}
            />
          </Box>

          <Box
            sx={{
              ":focus": {
                borderColor: "blue !important",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "0.8rem",
              }}
              component="legend"
            >
              İçerik
            </Typography>

            <Box
              component="textarea"
              sx={{
                backgroundColor: theme.palette.background.primary.w250,
                ":after": {
                  borderBottom: "none",
                },
                ":before": {
                  borderBottom: "none",
                },
                ":focus-visible": {
                  outlineStyle: "solid",
                  outlineWidth: "1.5px",
                  outlineColor: "rgb(40 210 40)",
                },
                height: "auto",
                fontFamily: "Poppins",
                minHeight: "10rem",

                margin: 0,
                borderRadius: "0.5rem",
                boxShadow: "0px 4px 12px rgba(100, 100, 100, 0.15)",
                border: "none",
                padding: "0.8rem",

                marginTop: { sm: "0.3rem", md: "0.5rem" },
                width: "100%",
              }}
              name="content"
              value={formData.content}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  content: e.target.value || "",
                }));
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "0.8rem",
                marginTop: { sm: "0.5rem", md: "0.5rem" },
              }}
              component="legend"
            >
              Değerlendirme Puanı
            </Typography>

            <Rating
              sx={{ marginTop: { sm: "0.3rem", md: "0.5rem" } }}
              name="rating"
              value={formData?.rating || 0}
              onChange={(_, newValue) => {
                setFormData((prev) => ({ ...prev, rating: newValue || 0 }));
              }}
              precision={1}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              sx={{
                backgroundColor: theme.palette.tx.primary.w500,
              }}
              variant="contained"
              onClick={onClose}
            >
              İptal
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: theme.palette.primary.main,
              }}
            >
              Güncelle
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default UpdateReview;
