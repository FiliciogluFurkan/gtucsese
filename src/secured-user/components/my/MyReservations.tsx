import { Box, Stack, Typography } from "@mui/material";
import fieldImage2 from "src/assets/images/reservations/fieldImage2.webp";
import calendar from "src/assets/images/reservations/calendar.png";
import arrowdown from "src/assets/images/reservations/arrow-down.png";
import Reservation from "@/components/reservation/Reservation";
import { useEffect, useState } from "react";
import { ReservationResponse } from "@/interfaces/admin/Reservation";
import axios from "axios";
import { useAuthWithRoles } from "@/hooks/UseAuthWithRoles";
import { getIdFromToken } from "@/services/DecodedJwt";
import { useSnackbar } from "@/components/snackbar/Snackbar";
import { useSendAuthenticatedRequest } from "@/services/UseSendAuthenticatedRequest";
import { ImagedReservation } from "@/secured-user/interfaces/ImagedReservation";
import { ImageResponse } from "@/secured-user/interfaces/ImageResponse";
import { useCustomTheme } from "@/themes/Theme";
import { getMonthString, prettyHour } from "@/services/TimeServices";
import { getReservationStatusString } from "@/services/ReservationService";

const MyReservations = (): JSX.Element => {
  const [reservations, setReservations] = useState<ReservationResponse[]>([]);
  const [richReservations, setRichReservations] = useState<ImagedReservation[]>(
    []
  );
  const [pendingReservations, setPendingReservations] = useState<
    ImagedReservation[]
  >([]);
  const [restOfReservations, setRestOfReservations] = useState<
    ImagedReservation[]
  >([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const auth = useAuthWithRoles();
  const theme = useCustomTheme();
  const { sendAuthenticatedRequest } = useSendAuthenticatedRequest();
  const showSnackbar = useSnackbar();
  const fetchReservations = async () => {
    try {
      const response = await sendAuthenticatedRequest({
        url: `${apiUrl}/api/v1/reservations`,
        method: "GET",
      });
      const reservations = response.data as ReservationResponse[];
      setReservations(reservations);
    } catch (error) {
      console.error(error);
      showSnackbar("Rezervasyonlar yüklenirken bir hata oluştu.", "error");
    }
  };

  const addImagesToReservations = async () => {
    const updatedReservations = await Promise.all(
      reservations.map(async (reservation) => {
        const response = await axios.get(
          `${apiUrl}/api/v1/images?relation=${reservation.courtId}`
        );
        const images = response.data as ImageResponse[];
        let imageUrls = images.map((image) => image.url);
        return {
          reservation: reservation,
          images: imageUrls,
        } as ImagedReservation;
      })
    );
    setRichReservations(updatedReservations);
  };

  const filterReservation = (reservations: ImagedReservation[]) => {
    const pendingReservations = reservations.filter(
      (reservation) => reservation.reservation.status === "PENDING"
    );
    setPendingReservations(pendingReservations);

    const restOfReservations = reservations.filter(
      (reservation) => reservation.reservation.status !== "PENDING"
    );
    setRestOfReservations(restOfReservations);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    addImagesToReservations();
  }, [reservations]);

  useEffect(() => {
    filterReservation(richReservations);
  }, [richReservations]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: "90%",
        }}
      >
        <Box
          sx={{
            marginTop: "4rem",
            marginLeft: "0.7rem",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              fontFamily: "Inter",
              fontSize: { xl: "1.5rem", lg: "1.2rem", xs: "1rem" },
              fontWeight: 600,
              color: theme.palette.tx.primary.w400,
              paddingLeft: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            Aktif Rezervasyonlarım
          </Box>
          <Box
            sx={{
              fontFamily: "Inter",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#A3A3A3",
              paddingLeft: "1rem",
              paddingBottom: "1.5rem",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing
          </Box>
          <Stack
            sx={{
              width: "100%",
              gap: { xl: "1rem", lg: "0.8rem" },
            }}
          >
            {pendingReservations.map((reservation) => (
              <ReservationCard
                key={reservation.reservation.id}
                imagedReservation={reservation}
              />
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            marginTop: "4rem",
            marginLeft: "0.7rem",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Stack>
                  <Box
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#464255",
                      paddingLeft: "1rem",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    Geçmiş Rezervasyonlarım
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "1rem",
                      fontWeight: "400",
                      color: "#A3A3A3",
                      paddingLeft: "1rem",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing
                  </Box>
                </Stack>
                <Box
                  onClick={() => {
                    console.log("clicked");
                  }}
                  sx={{
                    cursor: "pointer",
                    paddingRight: "2rem",
                    paddingTop: "1rem",
                  }}
                >
                  <img
                    src={arrowdown}
                    alt="your image"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                sx={{
                  width: "100%",
                  gap: { xs: "1rem", lg: "0.5rem" },
                }}
              >
                {restOfReservations.map((reservation) => (
                  <ReservationCard
                    key={reservation.reservation.id}
                    imagedReservation={reservation}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

interface ReservationCardProps {
  imagedReservation: ImagedReservation;
}

const ReservationCard = ({
  imagedReservation,
}: ReservationCardProps): JSX.Element => {
  const theme = useCustomTheme();
  const date = new Date(imagedReservation.reservation.date);
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: "3rem",
        display: "flex",
        flexDirection: "row",
        padding: { xl: "1rem", lg: "1rem", xs: "0.5rem" },
        alignItems: "center",
      }}
    >
      <Stack>
        <img
          src={imagedReservation.images[0]}
          alt="your image"
          style={{
            width: "15rem",
            height: "10rem",
            objectFit: "cover",
            borderRadius: "2rem",
          }}
        />
        {/*  <Box
          sx={{
            position: "absolute",
            height: "10rem",
            width: "10rem",
            zIndex: 1,
            borderTopLeftRadius: "2rem",
            borderBottomLeftRadius: "2rem",
            backgroundColor: "rgba(0,0,0, 0.1)",
          }}
        /> */}
      </Stack>

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginLeft: { xl: "1.4rem", lg: "1rem", xs: "0.5rem" },
          height: "10rem",
          minHeight: "100%",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Quicksand",
              marginTop: { xl: "0.5rem", lg: "0.3rem", xs: "0.2rem" },
              fontSize: { xl: "1rem", lg: "0.8rem", xs: "0.6rem" },
              fontWeight: 500,
              color: theme.palette.tx.primary.w400,
            }}
          >
            Aymos Halısaha
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xl: "1.9rem", lg: "1.5rem", xs: "1rem" },
              fontWeight: 600,

              color: theme.palette.tx.primary.w500,
            }}
          >
            {prettyHour(imagedReservation.reservation.hour)} -{" "}
            {prettyHour(imagedReservation.reservation.hour + 1)}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
              marginTop: { xl: "0.2rem", lg: "0.8rem", xs: "0.6rem" },
            }}
          >
            <Box>
              <img
                src={calendar}
                alt="your image"
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xl: "1.3rem", lg: "0.8rem", xs: "0.6rem" },
                fontWeight: "400",
                color: " #757575",
              }}
            >
              {getMonthString(date.getMonth())} {date.getDate()},{" "}
              {date.getFullYear()}
            </Typography>
          </Box>
        </Box>
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#36C191",
              color: "#ffffff",
              width: "123px",
              height: "30px",
              padding: "0.5rem 3rem",
              borderRadius: "7.5px",
              fontSize: "13px",
              fontWeight: "400",
              fontFamily: "Poppins",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              marginRight: { xl: "1.4rem", lg: "1rem", xs: "0.5rem" },
              marginTop: "1rem",
              "&:hover": {
                backgroundColor: "#57AE76",
              },
            }}
          >
            Değerlendir
          </Box>

          <Box
            sx={{
              fontFamily: "Quicksand",
              fontSize: { xl: "1.1rem", lg: "1rem", xs: "0.9rem" },
              fontWeight: 600,
              color: theme.palette.tx.primary.w200,
              textAlign: "center",
            }}
          >
            {getReservationStatusString(imagedReservation.reservation.status)}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyReservations;
