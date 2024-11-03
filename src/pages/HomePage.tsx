import React from "react";
import "./../css/homepage/homepage.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import logo2 from "/src/assets/images/logo-white.png";
import { Box, Stack, Typography } from "@mui/material";
import { useCustomTheme } from "../themes/Theme";
import { IoBookmarksOutline, IoLocateOutline, IoSearch } from "react-icons/io5";
import { TbSoccerField } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { PiCityLight } from "react-icons/pi";

const Homepage: React.FC = () => {
  const [cities] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<string>("");
  const [towns] = React.useState<string[]>([]);
  const [town, setTown] = React.useState<string>("");
  const [days] = React.useState<string[]>([]);
  const [day, setDay] = React.useState<string>("");

  const theme = useCustomTheme();

  return (
    <Box className="homepage" bgcolor={theme.palette.background.primary.w250}>
      <div className="welcome-container">
        <div>
          <div className="homepage-welcome-content">
            <div className="homepage-welcome-title-container">
              <h1 className="homepage-welcome-header">Şimdi Oyna!</h1>
              <h2 className="homepage-welcome-inner">
                Favori Sahanı Seç, Hemen Randevunu Al
              </h2>
            </div>
            <div className="homepage-welcome-appointment">
              <FormControl fullWidth>
                <InputLabel id="city-select-label">Şehir</InputLabel>
                <Select
                  className="homepage-welcome-appointment-form"
                  labelId="city-select-label"
                  id="city-select"
                  value={city}
                  label="Şehir"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                >
                  {cities.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel
                  className="homepage-welcome-appointment-label"
                  id="town-select-label"
                >
                  İlçe
                </InputLabel>
                <Select
                  className="homepage-welcome-appointment-form"
                  labelId="town-select-label"
                  id="town-select"
                  value={town}
                  label="İlçe"
                  onChange={(event) => {
                    setTown(event.target.value);
                  }}
                >
                  {towns.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="day-select-label">Saha</InputLabel>
                <Select
                  className="homepage-welcome-appointment-form"
                  labelId="day-select-label"
                  id="day-select"
                  value={day}
                  label="Gün"
                  onChange={(event) => {
                    setDay(event.target.value);
                  }}
                >
                  {days.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                  <MenuItem value="Yeni Gün">Yeni Gün</MenuItem>
                  <MenuItem value="Sonraki Gün">Sonraki Gün</MenuItem>
                  <MenuItem value="Son Gün">Son Gün</MenuItem>
                </Select>
              </FormControl>

              <Button
                id="homepage-welcome-appointment-button"
                variant="contained"
                color="success"
              >
                Randevu Al
              </Button>
            </div>
          </div>
        </div>
        <div className="welcome-container-image-container">
          <img
            className="welcome-container-image"
            src={logo2}
            /* style={{ width: "532px", height: "469px" }} */
            style={{ width: "354px", height: "312px" }}
            /*  style={{ width: "425px", height: "390px" }} */
            alt="logo"
          />
        </div>
      </div>

      <Stack
        width="full"
        bgcolor={theme.palette.background.primary.w253}
        direction="column"
        sx={{ padding: { md: "4rem" } }}
      >
        <Box
          className="homepage-howto-header-container"
          width="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            align="center"
            fontFamily="Barlow Condensed"
            color={theme.palette.tx.primary.w300}
            fontWeight={600}
            sx={{ width: { md: "42%" }, fontSize: { md: "2.8rem" } }}
            className="homepage-howto-header-text"
          >
            Sahancepte'ye Hoş Geldin - Saha Kiralamak Şimdi Çok Kolay
          </Typography>
        </Box>
        <Box
          sx={{ marginTop: { md: "2rem" } }}
          width="100%"
          className="homepage-howto-content-container"
        >
          <Stack
            gap={6}
            justifyContent="center"
            alignItems="flex-start"
            direction="row"
            className="homepage-howto-content"
          >
            <div className="homepage-howto-content-box">
              <IoLocateOutline
                color={theme.palette.primary.dark}
                className="homepage-howto-content-box-icon"
              />
              <div
                style={{ color: theme.palette.tx.primary.w300 }}
                className="homepage-howto-content-box-title"
              >
                Bul
              </div>
              <div className="homepage-howto-content-box-title-below">Bul</div>
              <div
                style={{ color: theme.palette.tx.primary.w200 }}
                className="homepage-howto-content-box-desc"
              >
                Çevrendeki halı sahaları bul
              </div>
            </div>
            <Box
              sx={{ marginTop: { md: "2rem" } }}
              className="homepage-howto-content-box"
            >
              <IoSearch
                color={theme.palette.primary.dark}
                className="homepage-howto-content-box-icon"
              />
              <div
                style={{ color: theme.palette.tx.primary.w300 }}
                className="homepage-howto-content-box-title"
              >
                Keşfet
              </div>
              <div className="homepage-howto-content-box-title-below">
                Keşfet
              </div>
              <div
                style={{ color: theme.palette.tx.primary.w200 }}
                className="homepage-howto-content-box-desc"
              >
                Sana yakın halı sahaları karşılaştır, sana en uygun olanı seç!
              </div>
            </Box>
            <div className="homepage-howto-content-box">
              <TbSoccerField
                color={theme.palette.primary.dark}
                className="homepage-howto-content-box-icon"
              />
              <div
                style={{ color: theme.palette.tx.primary.w300 }}
                className="homepage-howto-content-box-title"
              >
                Oyna
              </div>
              <div className="homepage-howto-content-box-title-below">Oyna</div>
              <div
                style={{ color: theme.palette.tx.primary.w200 }}
                className="homepage-howto-content-box-desc"
              >
                Sahanı belirle, rezervasyonunu yap
              </div>
            </div>
          </Stack>
        </Box>
      </Stack>

      <Stack
        sx={{ height: { md: "40rem" } }}
        zIndex="0"
        direction="row"
        justifyContent="center"
        className="homepage-our-services"
      >
        <Box
          component="img"
          sx={{
            backgroundImage: "url('/src/assets/images/black-bg-5.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "40rem",
            width: "100%",
            position: "absolute",
            zIndex: "-10",
          }}
        />
        <Box
          bgcolor="rgba(40,40,40,0)"
          width="40%"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Stack
            /* sx={{ marginTop: { md: "3rem" } }} */
            direction="column"
            width="90%"
            height="100%"
            justifyContent="center"
          >
            <Typography
              textAlign="left"
              sx={{ fontSize: { md: "4rem" }, marginTop: { md: "2rem" } }}
              fontWeight={400}
              fontFamily="Barlow"
              style={{ color: theme.palette.tx.secondary.w200 }}
            >
              Hizmetlerimiz
            </Typography>
            <Typography
              sx={{ fontSize: { md: "1.4rem" }, marginTop: { md: "2rem" } }}
              fontWeight={200}
              fontFamily="Poppins"
              style={{ color: theme.palette.tx.secondary.w100 }}
              textAlign="left"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              perspiciatis omnis, cum commodi quos voluptatem dolorem odit.
              Repudiandae odio maxime veritatis laborum inventore fugit dolorum
              vero quam qui! Nemo, ullam.
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              sx={{ marginTop: { md: "3rem" } }}
            >
              <Button
                style={{
                  fontFamily: "Quicksand",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  backgroundColor: "rgb(24 197 69)",
                }}
                variant="contained"
              >
                <FaLongArrowAltRight
                  style={{ marginRight: "0.7rem", marginTop: 3 }}
                  size="1rem"
                />
                Rezervasyon Yap
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box
          bgcolor="transparent"
          width="40%"
          className="homepage-our-services-section"
        >
          <Stack width="90%" direction="row" flexWrap="wrap">
            <div className="homepage-our-services-section-card">
              <div className="homepage-our-services-section-card-header">
                <div
                  style={{ color: "rgb(72 243 72)" }}
                  className="material-symbols-outlined"
                >
                  Sweep
                </div>
                <div
                  style={{ color: theme.palette.tx.secondary.w400 }}
                  className="homepage-our-services-section-title"
                >
                  Hızlı Ve Kolay Randevu
                </div>
              </div>
              <div
                style={{ color: theme.palette.tx.secondary.w100 }}
                className="homepage-our-services-section-card-text"
              >
                İstediğiniz şehirdeki halı sahaları kolayca bulup anında
                rezervasyon yapın.{" "}
                {/* Tarih ve saat seçiminizi yaparak, en uygun
                sahayı birkaç tıkla seçebilirsiniz. */}
              </div>
            </div>

            <div className="homepage-our-services-section-card">
              <div className="homepage-our-services-section-card-header">
                <div
                  style={{ color: "rgb(72 243 72)" }}
                  className="material-symbols-outlined"
                >
                  Sports_Soccer{" "}
                </div>
                <div
                  style={{ color: theme.palette.tx.secondary.w400 }}
                  className="homepage-our-services-section-title"
                >
                  Kadro Oluşturma
                </div>
              </div>
              <div
                style={{ color: theme.palette.tx.secondary.w100 }}
                className="homepage-our-services-section-card-text"
              >
                Kullanıcılar, sanal oyun tahtası üzerinde takımlarını kurabilir
                ve dizilişlerini belirleyebilir. Maç öncesi stratejinizi kolayca
                planlayın.
              </div>
            </div>

            <div className="homepage-our-services-section-card">
              <div className="homepage-our-services-section-card-header">
                <div
                  style={{ color: "rgb(72 243 72)" }}
                  className="material-symbols-outlined"
                >
                  Sweep
                </div>
                <div
                  style={{ color: theme.palette.tx.secondary.w400 }}
                  className="homepage-our-services-section-title"
                >
                  Hızlı Ve Kolay Randevu
                </div>
              </div>

              <div
                style={{ color: theme.palette.tx.secondary.w100 }}
                className="homepage-our-services-section-card-text"
              >
                Kullanıcılar, deneyimlerini paylaşarak diğerlerine yardımcı
                olur.{" "}
                {/* Sahalar hakkında yapılan yorumları okuyarak en iyi
                seçimleri yapabilirsiniz. */}
              </div>
            </div>

            <div className="homepage-our-services-section-card">
              <div className="homepage-our-services-section-card-header">
                <div
                  style={{ color: "rgb(72 243 72)" }}
                  className="material-symbols-outlined"
                >
                  Redeem
                </div>
                <div
                  style={{ color: theme.palette.tx.secondary.w400 }}
                  className="homepage-our-services-section-title"
                >
                  Çekilişler ve Hediyeler
                </div>
              </div>
              <div
                style={{ color: theme.palette.tx.secondary.w100 }}
                className="homepage-our-services-section-card-text"
              >
                Kullanıcılarımıza düzenlediğimiz çekilişlerle harika hediyeler
                kazanma şansı sunuyoruz. Katılın, şansınızı deneyin!
              </div>
            </div>
          </Stack>
        </Box>
      </Stack>

      <Stack
        direction="column"
        width="100%"
        alignItems="center"
        sx={{ marginTop: { md: "5rem" } }}
      >
        <Typography
          width="40%"
          textAlign="center"
          fontFamily="Rubik"
          fontSize="2em"
          color={theme.palette.tx.primary.w600}
          fontWeight={300}
        >
          Halı sahadan randevu almak şimdi çok daha kolay, sizin için farklı
          şehirlerdeki halısahaları bir araya getirdik
        </Typography>
        <Stack
          marginTop="5rem"
          gap={1}
          width="60%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            bgcolor={theme.palette.background.primary.w253}
            className="homepage-statistics-box"
          >
            <Box
              color={theme.palette.primary.light}
              className="homepage-statistics-box-header"
            >
              <BsPerson className="homepage-statistics-box-header-logo" />
              <Box className="homepage-statistics-box-header-title">Üye</Box>
            </Box>
            <Box
              color={theme.palette.tx.primary.w600}
              className="homepage-statistics-box-content"
            >
              14
            </Box>
          </Stack>
          <Stack
            bgcolor={theme.palette.background.primary.w253}
            className="homepage-statistics-box"
          >
            <Box
              color={theme.palette.primary.light}
              className="homepage-statistics-box-header"
            >
              <IoBookmarksOutline className="homepage-statistics-box-header-logo" />
              <Box className="homepage-statistics-box-header-title">
                Rezervasyon
              </Box>
            </Box>
            <Box
              color={theme.palette.tx.primary.w600}
              className="homepage-statistics-box-content"
            >
              96
            </Box>
          </Stack>
          <Stack
            bgcolor={theme.palette.background.primary.w253}
            className="homepage-statistics-box"
          >
            <Box
              color={theme.palette.primary.light}
              className="homepage-statistics-box-header"
            >
              <GoComment className="homepage-statistics-box-header-logo" />
              <Box className="homepage-statistics-box-header-title">Yorum</Box>
            </Box>
            <Box
              color={theme.palette.tx.primary.w600}
              className="homepage-statistics-box-content"
            >
              52
            </Box>
          </Stack>
          <Stack
            bgcolor={theme.palette.background.primary.w253}
            className="homepage-statistics-box"
          >
            <Box
              color={theme.palette.primary.light}
              className="homepage-statistics-box-header"
            >
              <PiCityLight className="homepage-statistics-box-header-logo" />
              <Box className="homepage-statistics-box-header-title">Şehir</Box>
            </Box>
            <Box
              color={theme.palette.tx.primary.w600}
              className="homepage-statistics-box-content"
            >
              8
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        zIndex="0"
        sx={{ marginTop: { md: "5rem" } }}
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="center"
        height="30rem"
      >
        <Box
          component="img"
          sx={{
            backgroundImage: "url('/src/assets/images/black-bg-12.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "30rem",
            width: "100%",
            position: "absolute",
            zIndex: "-10",
          }}
        />
        <Stack width="40%" height="100%" alignItems="center">
          <Stack
            width="70%"
            height="100%"
            zIndex={1}
            direction="column"
            justifyContent="center"
          >
            <Typography
              fontFamily="Quicksand"
              fontWeight={500}
              color={theme.palette.primary.light}
              sx={{ fontSize: "3.6rem" }}
            >
              Bize Katılın
            </Typography>

            <Typography
              fontFamily="Quicksand"
              fontWeight={300}
              color={theme.palette.tx.secondary.w500}
              sx={{ marginTop: "1rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              perferendis quaerat amet est assumenda incidunt at, aliquid
              blanditiis accusantium expedita, id facilis, ex nulla dignissimos
              illo beatae enim repellendus?
            </Typography>
            <Button
              style={{
                fontFamily: "Quicksand",
                fontSize: "1.2rem",
                fontWeight: 700,
                backgroundColor: "rgb(24 197 69)",
                width: "fit-content",
              }}
              variant="contained"
              sx={{ marginTop: "2rem" }}
            >
              İletişime Geçin
            </Button>
          </Stack>
        </Stack>
        <Stack
          width="40%"
          height="100%"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Stack
            width="70%"
            height="100%"
            zIndex={1}
            direction="column"
            justifyContent="center"
          ></Stack>
        </Stack>
        {/*   <Box
            component="img"
            sx={{
              backgroundImage: "url('/src/assets/images/soccer-1-1.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "30rem",
              width: "100%",
              position: "absolute",
              zIndex: "-10",
            }}
          /> */}
      </Stack>
    </Box>
  );
};
export default Homepage;
