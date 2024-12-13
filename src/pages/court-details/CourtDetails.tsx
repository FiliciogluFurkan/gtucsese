import * as React from "react";
import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import "../index.css";

import stars from "/src/assets/images/CourtDetails/stars.png";
import locationSymbol from "/src/assets/images/CourtDetails/locationSymbol.png";
import cafe from "/src/assets/images/CourtDetails/cafe.png";
import market from "/src/assets/images/CourtDetails/market.png";
import otopark from "/src/assets/images/CourtDetails/otopark.png";
import pool from "/src/assets/images/CourtDetails/pool.png";
import wifi from "/src/assets/images/CourtDetails/wifi.png";
import wind from "/src/assets/images/CourtDetails/wind.png";
import court1 from "/src/assets/images/CourtDetails/court1.png";
import court2 from "/src/assets/images/CourtDetails/court2.png";
import court3 from "/src/assets/images/CourtDetails/court3.png";
import bag from "/src/assets/images/CourtDetails/bag.png";
import like from "/src/assets/images/CourtDetails/like.png";
import ball from "/src/assets/images/CourtDetails/ball.png";
import court4 from "/src/assets/images/CourtDetails/court4.png";
import Map from "/src/assets/images/CourtDetails/Map.png";

const SahanCepte: React.FC = () => {
  const reviews = [
    {
      author: "Muhammet Taha Aydoğdu",
      content: "İnternet çekmiyo, maçta attığım golü paylaşamadım.",
      date: "21 gün önce",
    },
    {
      author: "Emre Öztürk",
      content:
        "Zemin süper, tavsiye ederim. Fiyat biraz daha uygun olabilir. Konum iyi.",
      date: "4 ay önce",
    },
    {
      author: "Muhammet Taha Aydoğdu",
      content: "İnternet çekmiyo, maçta attığım golü paylaşamadım.",
      date: "21 gün önce",
    },
    {
      author: "Emre Öztürk",
      content:
        "Zemin süper, tavsiye ederim. Fiyat biraz daha uygun olabilir. Konum iyi.",
      date: "4 ay önce",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Ana İçerik */}
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "8rem",
          paddingLeft: "3rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
          backgroundColor: "#FAFAFA",
        }}
      >
        {/* Sol Box */}
        <Box
          sx={{
            width: { xs: "100%", sm: "60%" },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* İlk İçerik Kutusu */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              padding: "1rem",
              borderRadius: "8px",
              backgroundColor: "#FAFAFA",
            }}
          >
            <Box
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.5rem",
                color: "#1A1A1A",
                wordWrap: "break-word",
                whiteSpace: "normal",
                overflowWrap: "break-word",
              }}
            >
              Aymoose Halısaha
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
              <img
                src={stars}
                alt="stars"
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
              <Box sx={{ color: "#4F4F4F", fontWeight: "100" }}>
                4.5 (1200 Reviews)
              </Box>
            </Box>

            {/* Konum */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <img
                src={locationSymbol}
                alt="location"
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
              <Box sx={{ color: "#333333", fontWeight: "100" }}>
                1234 Example Street, City
              </Box>
            </Box>
          </Box>

          {/* Halısahamız Hakkında */}
          <Box
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: "8px",
              padding: "2rem",
              backgroundColor: "#FFFFFF",
              marginTop: "2rem",
              minHeight: "300px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#1A1A1A",
                marginBottom: "1.5rem",
              }}
            >
              Halısahamız Hakkında
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#333333",
                marginBottom: "2rem",
                lineHeight: "1.8",
              }}
            >
              Tesisimiz Mustafa Kemal Paşa metrobüs durağının yanında
              bulunmaktadır. Detaylı konum bilgisine sayfanın en altındaki
              "Konum" bölümünden ulaşabilirsiniz.
              <br />
              <br />
              Rezervasyon yapmak için sayfanın en üst kısmındaki "Rezervasyon
              Yap" bölümünden istediğiniz tarih ve saati seçip rezervasyon
              oluşturabilirsiniz. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
              <br />
              <br />
              Lorem Ipsum has been the industry's standard dummy text.
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
                  fontWeight: "bold",
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={wifi}
                    alt="wifi"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="body2">Free Wifi</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={wind}
                    alt="wind"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="body2">Duş</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={otopark}
                    alt="otopark"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="body2">Park Alanı</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={market}
                    alt="market"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="body2">Dükkan</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src={pool}
                    alt="pool"
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="body2">Yüzme Sahası</Typography>
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

          <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
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
                Saha 1
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
                  6+6
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
                  25 x 40 metre
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
                  2500 TL/Saat
                </Typography>
              </Box>
            </Box>

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
                src={court2}
                alt="court2"
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
                Saha 2
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
                  7+7
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
                  30 x 50 metre
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
                  4000 TL/Saat
                </Typography>
              </Box>
            </Box>

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
                src={court3}
                alt="court3"
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
                Saha 3
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
                  7+7
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
                  30 x 50 metre
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
                  4000 TL/Saat
                </Typography>
              </Box>
            </Box>
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
            {reviews.map((review, index) => (
              <Box
                key={index}
                sx={{
                  borderBottom:
                    index < reviews.length - 1 ? "1px solid #E0E0E0" : "none",
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
                    {review.date}
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
              </Box>
            ))}
          </Box>
        </Box>

        {/* Sağ Box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "11.5rem",
            marginLeft: "2rem",
            marginRight: "2rem",
            width: { xs: "100%", sm: "40%" },
          }}
        >
          <Box sx={{ marginBottom: "1rem" }}>
            <img
              src={court4}
              alt="court4"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "8px",
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            {["Saha 1", "Saha 2", "Saha 3"].map((saha, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  color: "#1A1A1A",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  fontFamily: "Inter",
                  cursor: "pointer",
                }}
              >
                {saha}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              marginBottom: "2rem",
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              "& .MuiPaper-root": {
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
                width: "100%",
              },
              "& .MuiPickersLayout-root": {
                backgroundColor: "#FFFFFF",
                width: "100%",
              },

              "& .MuiTypography-root": {
                fontSize: "1.1rem",
              },
              "& .MuiDayCalendar-weekDayLabel": {
                fontSize: "1rem",
                margin: "4px 0",
              },
              "& .MuiPickersDay-root": {
                fontSize: "1.1rem",
                margin: "8px 2px",
                height: "40px",
                width: "40px",
              },
              "& .MuiDayCalendar-header": {
                marginBottom: "8px",
              },
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "1.4rem",
              },
              "& .MuiPickersDay-today": {
                fontSize: "1.1rem",
              },
              "& .MuiDatePickerToolbar-title": {
                fontSize: "2rem",
              },
              "& .MuiTypography-overline": {
                fontSize: "1rem",
              },

              "& .MuiDayCalendar-monthContainer": {
                rowGap: "8px",
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker defaultValue={dayjs("2024-04-02")} />
            </LocalizationProvider>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
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
      </Box>
    </div>
  );
};

export default SahanCepte;
