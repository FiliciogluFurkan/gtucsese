import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import "@/pages/court-details/CourtDetails.css";
import locationSymbol from "src/assets/images/CourtDetails/locationSymbol.png";
import cafe from "src/assets/images/CourtDetails/cafe.png";
import court1 from "src/assets/images/CourtDetails/court1.png";
import bag from "src/assets/images/CourtDetails/bag.png";
import like from "src/assets/images/CourtDetails/like.png";
import ball from "src/assets/images/CourtDetails/ball.png";
import court4 from "src/assets/images/CourtDetails/court4.png";
import Map from "src/assets/images/CourtDetails/Map.png";
import { Review } from "@/interfaces/Review";
import axios from "axios";
import Reservation from "@/components/reservation/Reservation";
import { useCustomTheme } from "@/themes/Theme";
import { useParams } from "react-router-dom";
import { Facility } from "@/interfaces/Facility";
import { Court } from "@/interfaces/Court";
import { useAuthWithRoles } from "@/hooks/UseAuthWithRoles";
import { formatInstantAsDate } from "../../services/TimeServices";

const CourtDetails: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [facility, setFacility] = useState<Facility | null>();
  const [courts, setCourts] = useState<Court[]>([]);
  const theme = useCustomTheme();
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const handleRatingChange = (newValue: any) => {
    setRating(newValue); // Update rating state
  };
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: apiUrl + "/api/v1/facilities/" + uuid,
        });
        // Handle the response here
        console.log(response.data);
        setFacility(response.data);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchFacility();
  }, []);

  const makeReservation = async (courtId: string, date: Date, hour: number) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/reservations`,
        {
          courtId,
          date,
          hour,
          userId: auth.user?.profile.sub
        },
        {
          headers: {
            Authorization: `Bearer ${auth.user?.access_token}`,
          },
        }
      );
      
      if (response.status === 201) {
        // Başarılı rezervasyon
        alert('Rezervasyon başarıyla oluşturuldu!');
      }
    } catch (error) {
      console.error('Rezervasyon oluşturulurken hata:', error);
      alert('Rezervasyon oluşturulurken bir hata oluştu.');
    }
  };

  useEffect(() => {
    if (facility != null) {
      const fetchCourts = async () => {
        try {
          const response = await axios.get(apiUrl + "/api/v1/courts", {
            params: { facility: uuid },
          });

          console.log("Courts fetched successfully:", response.data);
          if (response.status === 200) {
            const courts = response.data as Court[];
            console.log("200 alındı");
            setCourts(courts);
          }
        } catch (error) {
          console.error("Error fetching courts:", error);
        }
      };

      fetchCourts();

      console.log("courts: printed");
      console.log(courts);
    }
  }, [facility]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: apiUrl + "/api/v1/reviews",
          params: {
            facility: uuid,
          },
        });

        console.log(response.data);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchReviews();
  }, []);

  const auth = useAuthWithRoles();
  const [newReview, setNewReview] = useState("");
  const [author, setAuthor] = useState(
    auth ? auth.user?.access_token : "Guest"
  ); // Default to "Guest" if no current user
  console.log(author);

  const handleReviewChange = (event: any) => {
    setNewReview(event.target.value);
  };

  const handleSubmit = async () => {
    if (newReview) {
      console.log("Author:", auth.user?.access_token);
      console.log("Facility ID:", facility?.id);
      console.log("User ID:", auth.user?.profile.sub);
      console.log("New Review:", newReview);
      try {
        const response = await axios.post(
          apiUrl + "/api/v1/reviews",
          {
            userId: auth.user?.profile.sub,
            facilityId: facility?.id,
            title: "New Review",
            content: newReview,
            rating: rating,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.user?.access_token}`,
            },
          }
        );

        console.log("Review submitted successfully:", response.data);
        setNewReview(""); // Reset the input field
      } catch (error) {
        // Log the error
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        marginTop: "4.3rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to right,rgb(255, 255, 255),rgb(241, 241, 241))",
      }}
    >
      <Box
        sx={{
          width: { xl: "75%", lg: "80%", sm: "80%", xs: "90%" },
          maxWidth: { xl: "75%", lg: "80%", sm: "80%", xs: "90%" },
          marginTop: { xl: "3rem", lg: "2rem" },
          gap: { xl: "2rem", lg: "1.5rem", xs: "1rem" },
          display: "flex",
          flexDirection: { xl: "row", sm: "row" },
        }}
      >
        {facility ? (
          <>
            <Box
              sx={{
                display: "flex",

                flexDirection: { md: "column", xs: "column" },
                gap: "1rem",
                width: { xl: "60%", lg: "60%", sm: "60%" },
              }}
            >
              {/* Sol Box */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* İlk İçerik Kutusu */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    height: { xl: "10rem", lg: "9rem", md: "8rem", sm: "7rem" },
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1.5rem",
                      color: "#1A1A1A",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      overflowWrap: "break-word",
                    }}
                  >
                    {facility.name}
                  </Box>

                  {/* Yıldız ve İnceleme */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#4F4F4F",
                        fontWeight: "300",
                        fontFamily: "Poppins",
                      }}
                    >
                      {facility.rating} ({facility.reviewCount})
                    </Box>
                  </Box>

                  {/* Konum */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={locationSymbol}
                      alt="location"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        color: "#333333",
                        fontWeight: "400",
                        marginLeft: "0.7rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      {facility.location}
                    </Box>
                  </Box>
                </Box>

                {/* Halısahamız Hakkında Box */}
                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    padding: { xl: "2rem", lg: "1rem", sm: "1rem" },
                    backgroundColor: "#FFFFFF",
                    marginTop: 0,
                    width: "100%",
                  }}
                >
                  {/* Halısahamız Hakkında Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      fontSize: { xl: "1.2rem", lg: "1.2rem", sm: "1rem" },
                      color: "#1A1A1A",
                    }}
                  >
                    Halısahamız Hakkında
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333333",
                      fontFamily: "Poppins",
                      marginTop: { xl: "2rem", xs: "1rem" },
                      fontSize: { xl: "0.9rem", lg: "0.8rem", xs: "0.7rem" },
                    }}
                  >
                    {facility.description}
                  </Typography>

                  {/* Tesis Özellikleri */}
                  <Box
                    sx={{
                      borderTop: "1px solid #E0E0E0",
                      paddingTop: "1.5rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        fontSize: { xl: "1.2rem", lg: "1.2rem", sm: "1rem" },
                        color: "#1A1A1A",

                        marginBottom: "1rem",
                      }}
                    >
                      Tesis Özellikleri
                    </Typography>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr 1fr",
                          sm: "1fr 1fr 1fr 1fr",
                        },
                        gap: "1rem",
                        color: "#4F4F4F",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        {facility.amenities.map(
                          (amenity: {
                            name: string;
                            id: string;
                            imageUrl: string;
                          }) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                                marginLeft: "1rem",
                              }}
                            >
                              <img
                                src={
                                  amenity.imageUrl || "/images/placeholder.png"
                                }
                                style={{
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  borderRadius: "0.3rem",
                                  objectFit: "cover",
                                  margin: "0.3rem 0.3rem 0.3rem 0.3rem",
                                }}
                              />
                              <Typography variant="body2">
                                {amenity.name}
                              </Typography>
                            </Box>
                          )
                        )}
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={cafe}
                          alt="cafe"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Kafe</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                {courts.map((court: Court) => (
                  <Box
                    sx={{
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                      backgroundColor: "#FFFFFF",
                      marginTop: "2rem",
                      minHeight: "300px",
                      width: "32%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={court1}
                      alt="court1"
                      style={{
                        width: "100%",
                        height: "50%",
                        objectFit: "cover",
                        borderRadius: "8px",
                        paddingBottom: "1rem",
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "500",
                        fontFamily: "Inter",
                        colo: "#1A1A1A",
                        paddingLeft: "1rem",
                      }}
                    >
                      {court.name}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.75rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <img
                        src={bag}
                        alt="bag"
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: "400",
                          fontFamily: "Inter",
                          color: "#4F4F4F",
                        }}
                        variant="body2"
                      >
                        {court.capacity / 2}+{court.capacity / 2}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.75rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <img
                        src={ball}
                        alt="ball"
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: "400",
                          fontFamily: "Inter",
                          color: "#4F4F4F",
                        }}
                        variant="body2"
                      >
                        {court.width} x {court.height} metre
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.75rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      <img
                        src={like}
                        alt="like"
                        style={{
                          width: "auto",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: "400",
                          fontFamily: "Inter",
                          color: "#4F4F4F",
                        }}
                        variant="body2"
                      >
                        {court.price} TL/Saat
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  padding: "2rem",
                  backgroundColor: "#FFFFFF",
                  marginTop: "2rem",
                  minHeight: "300px",
                  marginBottom: "8rem",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    fontFamily: "Roboto",
                    color: "#000000",
                    marginBottom: "1rem",
                  }}
                >
                  Reviews
                </Typography>

                {reviews.map((review, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderBottom:
                        index < reviews.length - 1
                          ? "1px solid #E0E0E0"
                          : "none",
                      paddingY: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          fontFamily: "Roboto",
                          color: "#000000",
                        }}
                      >
                        {review.author}
                      </Box>
                      <Box
                        sx={{
                          fontWeight: "300",
                          fontSize: "1rem",
                          fontFamily: "Roboto",
                          color: "#000000",
                        }}
                      >
                        {formatInstantAsDate(review.createdAt)}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontWeight: "300",
                        fontSize: "1rem",
                        fontFamily: "Roboto",
                        color: "#000000",
                      }}
                    >
                      {review.content}
                    </Box>
                    <Box
                      sx={{
                        marginTop: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "1rem",
                          fontFamily: "Roboto",
                          color: "#000000",
                          marginRight: "0.5rem",
                        }}
                      >
                        Rating:
                      </Typography>
                      <Rating name="read-only" value={review.rating} readOnly />
                    </Box>
                  </Box>
                ))}

                {/* Add a new review section */}
                <Box
                  sx={{
                    marginTop: "2rem",
                    borderTop: "1px solid #E0E0E0",
                    paddingTop: "1rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "1.125rem",
                      fontFamily: "Roboto",
                      color: "#000000",
                      marginBottom: "1rem",
                    }}
                  >
                    Add a Review
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={
                      auth
                        ? (auth.decodedJwt?.getPayload().name as string)
                        : "Anonim Kullanıcı"
                    }
                    onChange={(e) => setAuthor(e.target.value)}
                    sx={{
                      marginBottom: "1rem",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                    disabled
                  />
                  <TextField
                    label="Write your review"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    value={newReview}
                    onChange={handleReviewChange}
                    sx={{
                      marginBottom: "1.5rem",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      marginBottom: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "1rem",
                        fontFamily: "Roboto",
                        color: "#000000",
                        marginRight: "0.5rem",
                      }}
                    >
                      Rating:
                    </Typography>
                    <Rating
                      name="rating"
                      value={rating}
                      onChange={(e, newValue) => {
                        handleRatingChange(newValue);
                        console.log(e);
                      }}
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#4CAF50",
                        },
                        "& .MuiRating-iconEmpty": {
                          color: "#E0E0E0",
                        },
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      padding: "0.5rem 2rem",
                      backgroundColor: "#4CAF50",
                      "&:hover": {
                        backgroundColor: "#388E3C",
                      },
                    }}
                  >
                    Submit Review
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* Sağ Box  COLUMN*/}
            <Box
              sx={{
                display: "flex",
                marginTop: { xl: "10rem", lg: "8rem", sm: "7rem" },
                flexDirection: "column",
                width: { md: "30%", sm: "40%" },
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "0.5rem",
                  paddingLeft: "0",
                  fontFamily: "Poppins",
                  color: theme.palette.tx.primary.w500,
                  fontSize: { xl: "0.9rem", xs: "0.8rem" },
                }}
              >
                Tüm Görselleri İncele <Box>&rarr;</Box>
              </Button>
              <Divider sx={{ borderColor: "rgb(240,240,240) !important" }} />
              <Box sx={{ marginBottom: "1rem" }}>
                <img
                  src={court4}
                  alt="court4"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    marginTop: "0.3rem",
                    borderRadius: "0.5rem",
                  }}
                />
              </Box>

              <Reservation
                courts={courts}
                handleMakeReservation={makeReservation}
              />

              <Box sx={{ marginTop: { xl: "2rem", xs: "1rem" } }}>
                <img
                  src={Map}
                  alt="court4"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>
          </>
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
};

export default CourtDetails;
