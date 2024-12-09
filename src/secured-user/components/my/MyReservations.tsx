import { Box, Typography } from "@mui/material";
import fieldImage2 from "src/assets/images/reservations/fieldImage2.webp";
import calendar from "src/assets/images/reservations/calendar.png";
import arrowdown from "src/assets/images/reservations/arrow-down.png";

const MyReservations = (): JSX.Element => {
  return (
    <div>
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
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#464255",
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

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            padding: "15px",
            border: "1px solid #E0E0E0",
            borderRadius: "45px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <Box>
            <img
              src={fieldImage2}
              alt="your image"
              style={{
                width: "14rem",
                height: "10rem",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Box>

          <Box sx={{ 
            flexDirection: "column",
            paddingTop: "0.5rem"
          }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "1rem",
                fontWeight: "400",
                color: " #757575",
              }}
            >
              Aymos Halısaha
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "2rem",
                fontWeight: "600",
                color: " #404040",
              }}
            >
              22:00 - 23:00
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
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
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  color: " #757575",
                }}
              >
                Aralık 24, 2024
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              paddingTop: "6.8rem",
              fontFamily: "Inter",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#404040",
              marginRight: "2rem"
            }}
          >
            2500 TL
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "4rem",
          marginLeft: "0.7rem",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box sx={{ 
          display: "flex", 
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}>
          <Box>
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
          </Box>

          <Box sx={{ 
            paddingRight: "2rem",
            paddingTop: "1rem" 
          }}>
            <img
              src={arrowdown}
              alt="your image"
              style={{ width: "auto", height: "auto", objectFit: "cover" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            padding: "15px",
            border: "1px solid #E0E0E0",
            borderRadius: "45px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <Box>
            <img
              src={fieldImage2}
              alt="your image"
              style={{
                width: "14rem",
                height: "10rem",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </Box>

          <Box sx={{ 
            flexDirection: "column",
            paddingTop: "0.5rem"
          }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "1rem",
                fontWeight: "400",
                color: " #757575",
              }}
            >
              Aymos Halısaha
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "2rem",
                fontWeight: "600",
                color: " #404040",
              }}
            >
              18:00 - 19:00
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
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
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  color: " #757575",
                }}
              >
                Aralık 18, 2024
              </Typography>
            </Box>
          </Box>

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "2rem"
          }}>
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
                marginLeft: "auto",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "#57AE76",
                },
              }}
            >
              Değerlendir
            </Box>

            <Box sx={{
              marginLeft: "auto",
              marginTop: "4rem",
              fontFamily: "Inter",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#404040",
            }}>
              2500 TL
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyReservations;
