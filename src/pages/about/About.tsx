import { Box } from "@mui/material";
import React from "react";
import icon1 from "src/assets/images/about/Ship.png";
import icon2 from "src/assets/images/about/Hourglass.png";
import icon3 from "src/assets/images/about/Handshake.png";
import debruyne from "src/assets/images/about/debruyne.jpg";

const SahanCepte: React.FC = () => {
  return (
    <div style={{ paddingTop: "5rem", paddingLeft: "1.5rem" }}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          paddingLeft: "2rem",
        }}
      >
        <Box
          sx={{
            width: "60vw",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Open Sans",
            fontSize: "2rem",
            color: "#333",
            paddingLeft: "5rem",
          }}
        >
          <Box
            sx={{
              fontFamily: "Roboto",
              fontSize: "2.2rem",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #2d854b, #3a5ba0, #8e44ad)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingTop: "4rem",
            }}
          >
            Sahan Cepte Nasıl Çalışır ?
          </Box>
          <Box
            sx={{
              color: "#252F40",
              fontSize: "2.5rem",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Tek Tık’la Rezervasyon Yap !
          </Box>
          <Box
            sx={{
              width: "40vw",
              fontSize: "1.3rem",
              color: "#67748E",
              fontFamily: "Roboto",
              paddingTop: "2.5rem",
            }}
          >
            <Box>
              Sahan Cepte, tüm spor severler ile spor tesislerini online ortamda
              bir araya getiren rezervasyon yönetim platformudur.
            </Box>
            <Box sx={{ paddingTop: "1rem" }}>
              Müşteriler, Sahan Cepte üzerinden, anlaşmalı spor tesisleri
              rezervasyonlarını 7/24 online olarak yapabilir. Spor Tesisleri ise
              7/24 online ortamda gelen rezervasyon taleplerini platform
              üzerinden sonuçlandırabilir.
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "4rem",
              fontFamily: "Roboto",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", width: "40vw" }}>
              <Box
                sx={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "rgb(0,176,116,1)",
                  alpha: 0.15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  minWidth: "3rem",
                  minHeight: "3rem",
                }}
              >
                <img
                  src={icon1}
                  alt="your image"
                  style={{ width: "60%", height: "60%", objectFit: "contain" }}
                />
              </Box>

              <Box
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  fontFamily: "Roboto",
                  color: "#67748E",
                  paddingTop: "0.4rem",
                  paddingLeft: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "-0.2rem",
                }}
              >
                Spor Severler için: Anlaşmalı tesislere kolayca rezervasyon yapabilir, güncel programları görüntüleyebilirsiniz.
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "40vw",
                paddingTop: "2rem",
              }}
            >
              <Box
                sx={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "rgb(0,176,116,1)",
                  alpha: 0.15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  minWidth: "3rem",
                  minHeight: "3rem",
                }}
              >
                <img
                  src={icon3}
                  alt="your image"
                  style={{ width: "60%", height: "60%", objectFit: "contain" }}
                />
              </Box>

              <Box
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "#67748E",
                  paddingTop: "0.4rem",
                  paddingLeft: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "-0.2rem",
                }}
              >
                Spor Tesisleri için: Rezervasyon taleplerini anında görebilir, yönetebilir ve hizmetlerinizi geniş kitlelere duyurabilirsiniz.
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "40vw",
                paddingTop: "2rem",
              }}
            >
              <Box
                sx={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  backgroundColor: "rgb(0,176,116,1)",
                  alpha: 0.15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  minWidth: "3rem",
                  minHeight: "3rem",
                }}
              >
                <img
                  src={icon2}
                  alt="your image"
                  style={{ width: "60%", height: "60%", objectFit: "contain" }}
                />
              </Box>

              <Box
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "#67748E",
                  paddingTop: "0.4rem",
                  paddingLeft: "1rem",
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "-0.2rem",
                }}
              >
                7/24 Rezervasyon İmkanı:
İster sabah, ister gece; Sahan Cepte ile istediğiniz zaman spor yapma planlarınızı organize edin!
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              fontFamily: "Roboto",
              fontSize: "2.2rem",
              fontWeight: 900,
              color: "#252F40",
              paddingTop: "4rem",
            }}
          >
            Neden Sahan Cepte ?
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "3.2rem",
              paddingBottom: "7rem",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Ücretsiz ve Kolay Üyelik
              </Box>
              <Box
                sx={{
                  paddingTop: "1.5rem",
                  fontSize: "1rem",
                  fontFamily: "Roboto",
                  color: "#67748E",
                  fontWeight: 400,
                  width: "45vw",
                }}
              >
                Dakikalar içinde üye olun, spor dünyasına adım atın! Üstelik üyelik tamamen ücretsiz.
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Tesis Özelliklerine Kolay Erişim
              </Box>
              <Box
                sx={{
                  paddingTop: "1.5rem",
                  fontSize: "1rem",
                  fontFamily: "Roboto",
                  color: "#67748E",
                  fontWeight: 400,
                  width: "45vw",
                }}
              >
                Sevdiğiniz tesislerin açık saatlerinden sundukları hizmetlere kadar tüm detaylara hızlıca ulaşın.
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "1.5rem",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Tesisin Değerlendirilmesi
              </Box>
              <Box
                sx={{
                  paddingTop: "1.5rem",
                  fontSize: "1rem",
                  fontFamily: "Roboto",
                  color: "#67748E",
                  fontWeight: 400,
                  width: "45vw",
                }}
              >
                Rezervasyon yaptığınız tesisleri değerlendirin ve diğer spor severlere fikir verin. Aynı zamanda diğer kullanıcıların yorumlarını okuyarak en iyi seçimi yapabilirsiniz.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ 
          width: "40vw",
          position: "sticky",
          top: "4.5rem",
          height: "calc(100vh - 4.5rem)",
          marginTop: "-2rem",
          alignSelf: "flex-start"
        }}>
          <img
            src={debruyne}
            alt="Sahan Cepte"
            style={{
              width: "100%",
              height: "calc(100vh - 4.4rem)",
              objectFit: "cover",
              position: "relative"
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default SahanCepte;
