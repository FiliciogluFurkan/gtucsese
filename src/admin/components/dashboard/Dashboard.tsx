import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Group from "src/assets/images/admindashboard/Group117.png";
import icon from "src/assets/images/admindashboard/Icon.png";
import currentrezervation from "src/assets/images/admindashboard/Group118.png";
import canceledrezervation from "src/assets/images/admindashboard/Group121.png";
import totalprice from "src/assets/images/admindashboard/Group84.png";
import icon2 from "src/assets/images/admindashboard/Icon1.png";
import CourtsCommentsCards from "src/admin/components/court-comment-cards/CourtCommentCard";
import { useAuth } from 'react-oidc-context';
import axios from "axios";
import { Facility } from "src/interfaces/Facility";
import { ConvertedReview  } from "@/interfaces/admin/ConvertedReview";
import { Account } from "@/interfaces/Account";
import { parseJwt } from "@/services/ParseJwt";

const Dashboard = (): JSX.Element => {

  const [currentRezervations, setCurrentRezervations] =
    React.useState<number>(75);
  const [totalRezervations, setTotalRezervations] = React.useState<number>(380);
  const [cancelledRezervations, setCancelledRezervations] =
    React.useState<number>(21);
  const [totalPrice, setTotalPrice] = React.useState<number>(100);
  const apiUrl = import.meta.env.VITE_API_URL;
  const authState = useAuth();
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [reviews, setReview] = useState<ConvertedReview []>([]);
  const [user, setUser] = useState< Account>();

  useEffect(() => {
    setCurrentRezervations(75);
    setTotalRezervations(380);
    setCancelledRezervations(21);
    setTotalPrice(100);
    console.log(totalPrice);
  }, []);

  useEffect(() => {
    console.log(facilities)

    const fetchUser = async () => {
      const userId = parseJwt(authState.user?.access_token).sub;
      console.log("userId:");
      console.log(userId);

      try {
        const response = await axios.get(`${apiUrl}/api/v1/account/${userId}`, {
          headers: {
            Authorization: `Bearer ${authState.user?.access_token}`,
          },
        });
        console.log("User:");
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();

  }, []);



  useEffect(() => {
    const fetchFacilityAndReviews = async () => {
      try {
        // Facilities verisini çek
        const facilityResponse = await axios.get(`${apiUrl}/api/v1/facilities`, {
          headers: {
            Authorization: `Bearer ${authState.user?.access_token}`,
          },
        });

        if (facilityResponse.data && facilityResponse.data.length > 0) {
          const facilitiesData = facilityResponse.data;
          setFacilities(facilitiesData);

          // Reviews verisini çek (ilk facility.id'yi kullanarak)
          const reviewResponse = await axios.get(`${apiUrl}/api/v1/reviews`, {
            headers: {
              Authorization: `Bearer ${authState.user?.access_token}`,
            },
            params: {
              facility: facilitiesData[0]?.id,
            },
          });

          if (reviewResponse.data && reviewResponse.data.length > 0) {
            const reviews = reviewResponse.data;
            console.log("Reviews:");
            console.log(reviews);

            const transformedReviews = reviews.map((review: any) => {

              const createdAtDate = new Date(review.createdAt);
              const today = new Date();
              const daysAgo = Math.floor(
                (today.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60 * 24)
              );


              return {
                fullName: review.author || "Anonim Kullanıcı", // Backend'den gelen "author" alanını kullan
                content: review.content, // Backend'den gelen yorumu al
                day: daysAgo, // Hesaplanan gün farkı
                rating: review.rating, // Backend'den gelen rating
                title: review.title, // Backend'den gelen başlık
                imageSrc: review.profilePicture, // Backend'den gelen profil fotoğrafı
              };
            });
            console.log("Transformed reviews:");
            console.log(transformedReviews);
            setReview(transformedReviews);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchFacilityAndReviews();
  }, []); // Sadece bir kez çalıştır



  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewPerPage = 3;

  const handleNext = () => {
    if (currentIndex + reviewPerPage < reviews.length) {
      setCurrentIndex(currentIndex + reviewPerPage);
    }
  };

  const handlePrevious = () => {

    if (currentIndex - reviewPerPage >= 0) {
      setCurrentIndex(currentIndex - reviewPerPage)

    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F3F2F7",
        display: "flex",
        flexDirection: "column",
        padding: { xs: "1rem", md: "3rem" },
        width: "100%",
        height: "100%",
        flex: 1,
        paddingBottom: "4rem",
        marginBottom: "-1px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "4rem" }}>
        <Box
          sx={{
            fontFamily: "Barlow",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#464255",
          }}
        >
          Admin Paneli !
        </Box>
        <Box
          sx={{
            fontFamily: "Barlow",
            fontWeight: 400,
            fontSize: "1rem",
            color: "#A3A3A3",
            marginTop: "1rem",
          }}
        >
          Merhaba {user?.firstName} {user?.lastName}.Halısahalarını admin olarak yönetebilirsin.
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          marginTop: "2rem",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            minWidth: { md: "250px" },
            height: { xs: "auto", md: "11rem" },
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
              padding: { xs: "1rem", md: "2rem" },
            }}
          >
            <Box
              sx={{
                width: { xs: "4rem", md: "5rem" },
                height: { xs: "4rem", md: "5rem" },
                borderRadius: "50%",
                backgroundColor: "rgb(0,176,116,0.35)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <img
                src={currentrezervation}
                alt="your image"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain"
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontFamily: "Barlow",
                  fontWeight: 700,
                  color: "#464255",
                }}
              >
                {currentRezervations}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "Barlow",
                  fontWeight: 400,
                  color: "#464255",
                }}
              >
                Aktif Randevu
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  src={icon}
                  alt="icon"
                />
                <Box sx={{ color: "#A3A3A3" }}>%4 (30 days)</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            minWidth: { md: "250px" },
            height: { xs: "auto", md: "11rem" },
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
              padding: { xs: "1rem", md: "2rem" },
            }}
          >
            <Box
              sx={{
                width: { xs: "4rem", md: "5rem" },
                height: { xs: "4rem", md: "5rem" },
                borderRadius: "50%",
                backgroundColor: "rgb(0,176,116,0.35)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <img
                src={Group}
                alt="your image"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain"
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontFamily: "Barlow",
                  fontWeight: 700,
                  color: "#464255",
                }}
              >
                {totalRezervations}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "Barlow",
                  fontWeight: 400,
                  color: "#464255",
                }}
              >
                Toplam Randevu
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  src={icon}
                  alt="icon"
                />
                <Box sx={{ color: "#A3A3A3" }}>%15 (30 days)</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            minWidth: { md: "250px" },
            height: { xs: "auto", md: "11rem" },
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
              padding: { xs: "1rem", md: "2rem" },
            }}
          >
            <Box
              sx={{
                width: { xs: "4rem", md: "5rem" },
                height: { xs: "4rem", md: "5rem" },
                borderRadius: "50%",
                backgroundColor: "rgb(0,176,116,0.35)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <img
                src={canceledrezervation}
                alt="your image"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain"
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontFamily: "Barlow",
                  fontWeight: 700,
                  color: "#464255",
                }}
              >
                {cancelledRezervations}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "Barlow",
                  fontWeight: 400,
                  color: "#464255",
                }}
              >
                İptal Randevu
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  src={icon2}
                  alt="icon"
                />
                <Box sx={{ color: "#A3A3A3" }}>%4 (30 days)</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "25%" },
            minWidth: { md: "250px" },
            height: { xs: "auto", md: "11rem" },
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
              padding: { xs: "1rem", md: "2rem" },
            }}
          >
            <Box
              sx={{
                width: { xs: "4rem", md: "5rem" },
                height: { xs: "4rem", md: "5rem" },
                borderRadius: "50%",
                backgroundColor: "rgb(0,176,116,0.35)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <img
                src={totalprice}
                alt="your image"
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain"
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontFamily: "Barlow",
                  fontWeight: 700,
                  color: "#464255",
                }}
              >
                {totalPrice}
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "Barlow",
                  fontWeight: 400,
                  color: "#464255",
                }}
              >
                Toplam Para
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <img
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  src={icon2}
                  alt="icon"
                />
                <Box sx={{ color: "#A3A3A3" }}>%12 (30 days)</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "3rem", marginBottom: "2rem" }}>
        <Box
          sx={{
            fontFamily: "Barlow",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#464255",
          }}
        >
          Kullanıcı Yorumları
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            gap: "1rem",
            paddingRight: "4rem",
          }}
        >
          <Box
            onClick={handlePrevious}
            sx={{
              width: "3rem",
              height: "3rem",
              border: "2px solid white",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#00B074",
              cursor: "pointer",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "white",
                opacity: 0.9
              },
            }}
          >
            &lt;
          </Box>

          <Box
            onClick={handleNext}
            sx={{
              width: "3rem",
              height: "3rem",
              border: "2px solid white",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#00B074",
              cursor: "pointer",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "white",
                opacity: 0.9
              },
            }}
          >
            &gt;
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          overflow: "hidden",
          justifyContent: "flex-start",
          paddingRight: "4rem",
          width: "100%",
        }}
      >
        {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
          <Box
            key={index}
            sx={{
              width: "38%",
              minWidth: "300px",
            }}
          >
            <CourtsCommentsCards review={review} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;