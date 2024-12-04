import { Box, Grid } from "@mui/material";
import profile from "src/assets/images/admindashboard/placeholder.png";
import { renderStars } from "@/services/CommentService";

const Comments = (): JSX.Element => {
  const comments = [
    {
      username: "Ahmet Yılmaz",
      comment:
        "Harika bir saha, zemini çok iyi.Yiyecek ve içecek olsa daha iyi olurdu.Maçtan sonra terli terli dışarda yemek yemeden burada yiyip evimize giderdik.",
      daysAgo: 2,
      rating: 5,
    },
    {
      username: "Mehmet Kaya",
      comment: "Işıklandırma yetersizdi.Saat 8 oldu hala ışıklar açılmamıştı.",
      daysAgo: 4,
      rating: 3.5,
    },
    {
      username: "Elif Demir",
      comment: "Çalışanlar çok ilgiliydi, sahada oynamak keyifliydi.",
      daysAgo: 1,
      rating: 4.5,
    },
    {
      username: "Hüseyin Çelik",
      comment: "Saha biraz bakımsız ama yine de keyifliydi.",
      daysAgo: 5,
      rating: 3,
    },
    {
      username: "Ayşe Öztürk",
      comment: "Oldukça ferah ve geniş bir saha. Tavsiye ederim.",
      daysAgo: 7,
      rating: 5,
    },
    {
      username: "Emre Şahin",
      comment: "Otopark sorunluydu, biraz daha iyi olabilirdi.",
      daysAgo: 10,
      rating: 2.4,
    },
    {
      username: "Fatma Aydın",
      comment: "Fiyat performans olarak gayet iyi.",
      daysAgo: 3,
      rating: 4,
    },
    {
      username: "Ali Yıldırım",
      comment: "Saha güzel ama duşlar biraz kirliydi.",
      daysAgo: 6,
      rating: 3,
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <Grid container spacing={3} maxWidth="lg">
        {comments.map((comment, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                fontFamily: "Barlow",
                color: "#464255",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e0f7fa",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <img
                  style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
                  src={profile}
                  alt="profile"
                />
                <Box sx={{ marginLeft: "1rem", textAlign: "left" }}>
                  <Box
                    sx={{
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      color: "#00796b",
                    }}
                  >
                    {comment.username}
                  </Box>
                  <Box sx={{ fontSize: "0.8rem", color: "#A3A3A3" }}>
                    {comment.daysAgo} gün önce
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: "left",
                  marginBottom: "1rem",
                  color: "#004d40",
                }}
              >
                {comment.comment}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ fontWeight: "bold", color: "#00796b" }}>
                  {comment.rating}
                </Box>
                <Box sx={{ marginLeft: "0.5rem" }}>
                  {renderStars(comment.rating)}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Comments;
