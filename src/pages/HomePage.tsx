import React from "react";
import "./../css/homepage/homepage.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import logo2 from "/src/assets/images/logo2.png";
import pana from "/src/assets/images/pana.png";
import darklogo from "/src/assets/images/logo-dark.png";

function Homepage() {
  const [cities, setCities] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<string>("");
  const [towns, setTowns] = React.useState<string[]>([]);
  const [town, setTown] = React.useState<string>("");
  const [days, setDays] = React.useState<string[]>([]);
  const [day, setDay] = React.useState<string>("");

  const [members, setMembers] = React.useState<number>(150);
  const [rezervations, setRezervations] = React.useState<number>(2300);
  const [sharings, setSharings] = React.useState<number>(770);
  const [comments, setComments] = React.useState<number>(93);

  const donothing = () => {
    setMembers(150);
    setRezervations(2300);
    setSharings(770);
    setComments(93);
    setCities(["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"]);
    setTowns(["Kadıköy", "Çankaya", "Bornova", "Osmangazi", "Muratpaşa"]);
    setDays(["Gün", "Sonraki Gün", "Son Gün"]);
  };

  return (
    <div className="homepage">
      <div className="welcome-container">
        <div className="welcome-container-image-container">
          <img
            className="welcome-container-image"
            src={logo2}
            style={{ width: "270px", height: "117px" }}
            alt="logo"
          />
        </div>
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
                <InputLabel style={{ color: "black" }} id="town-select-label">
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
      </div>

      <div className="homepage-our-services-title">
        <p>Hizmetlerimiz</p>
      </div>

      <div className="homepage-our-services-section">
        <div className="homepage-our-services-section-card">
          <div className="homepage-our-services-section-card-header">
            <div
              style={{ color: "green" }}
              className="material-symbols-outlined"
            >
              Sweep
            </div>
            <div className="homepage-our-services-section-title">
              Hızlı Ve Kolay Randevu
            </div>
          </div>
          <div>
            <p className="homepage-our-services-section-card-text">
              İstediğiniz şehirdeki halı sahaları kolayca bulup anında
              rezervasyon yapın. Tarih ve saat seçiminizi yaparak, en uygun
              sahayı birkaç tıkla seçebilirsiniz.
            </p>
          </div>
        </div>

        <div className="homepage-our-services-section-card">
          <div className="homepage-our-services-section-card-header">
            <div
              style={{ color: "green" }}
              className="material-symbols-outlined"
            >
              Sports_Soccer{" "}
            </div>
            <div className="homepage-our-services-section-title">
              Kadro Oluşturma
            </div>
          </div>
          <div>
            <p className="homepage-our-services-section-card-text">
              Kullanıcılar, sanal oyun tahtası üzerinde takımlarını kurabilir ve
              dizilişlerini belirleyebilir. Maç öncesi stratejinizi kolayca
              planlayın.
            </p>
          </div>
        </div>

        <div className="homepage-our-services-section-card">
          <div className="homepage-our-services-section-card-header">
            <div
              style={{ color: "green" }}
              className="material-symbols-outlined"
            >
              Sweep
            </div>
            <div className="homepage-our-services-section-title">
              Hızlı Ve Kolay Randevu
            </div>
          </div>

          <p className="homepage-our-services-section-card-text">
            Kullanıcılar, deneyimlerini paylaşarak diğerlerine yardımcı olur.
            Sahalar hakkında yapılan yorumları okuyarak en iyi seçimleri
            yapabilirsiniz.
          </p>
        </div>

        <div className="homepage-our-services-section-card">
          <div className="homepage-our-services-section-card-header">
            <div
              style={{ color: "green" }}
              className="material-symbols-outlined"
            >
              Redeem
            </div>
            <div className="homepage-our-services-section-title">
              Çekilişler ve Hediyeler
            </div>
          </div>
          <div>
            <p className="homepage-our-services-section-card-text">
              Kullanıcılarımıza düzenlediğimiz çekilişlerle harika hediyeler
              kazanma şansı sunuyoruz. Katılın, şansınızı deneyin!
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-statistics-section">
        <div style={{ paddingLeft: "3.125rem", paddingTop: "3.75rem" }}>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "30px",
              color: "#4D4D4D",
              fontWeight: "600",
            }}
          >
            Halı Sahadan
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "30px",
              color: "#4CAF4F",
              fontWeight: "600",
            }}
          >
            Randevu almak şimdi çok kolay
          </div>
          <div
            style={{ fontFamily: "Inter", fontSize: "15px", color: "#18191F" }}
          >
            Sizin için farklı şehirlerdeki halısahaları bir araya getirdik
          </div>
        </div>

        <div style={{ paddingLeft: "31.25rem", paddingTop: "3.75rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  className="material-symbols-outlined"
                  style={{ color: "green" }}
                >
                  Group
                </div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "24px",
                    }}
                  >
                    {members.toString()}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "11px",
                      color: "#717171",
                    }}
                  >
                    Üyeler
                  </div>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "6.25rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  className="material-symbols-outlined"
                  style={{ color: "green" }}
                >
                  Calendar_Month
                </div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "24px",
                    }}
                  >
                    {rezervations.toString()}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "11px",
                      color: "#717171",
                    }}
                  >
                    Rezervasyonlar
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "0.625rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  className="material-symbols-outlined"
                  style={{ color: "green" }}
                >
                  tooltip_2
                </div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "24px",
                    }}
                  >
                    {comments.toString()}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "11px",
                      color: "#717171",
                    }}
                  >
                    Yorumlar
                  </div>
                </div>
              </div>
              <div
                style={{
                  paddingLeft: "6rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  className="material-symbols-outlined"
                  style={{ color: "green" }}
                >
                  Share
                </div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "700",
                      fontSize: "24px",
                    }}
                  >
                    {sharings.toString()}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "11px",
                      color: "#717171",
                    }}
                  >
                    Paylaşımlar
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="homepage-about-section">
        <div style={{ paddingLeft: "6.25rem", paddingTop: "3.75rem" }}>
          <img
            src={pana}
            alt="logo"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div style={{ paddingLeft: "9.375rem", paddingTop: "0rem" }}>
          <section className="homepage-about-us-highlight">
            <div className="homepage-about-us-container">
              <h2
                onClick={donothing}
                style={{ fontFamily: "Inter", fontWeight: "700" }}
              >
                Futbol Tutkunları için En İyi Sahaları Sunuyoruz!
              </h2>
              <p>
                Sahan Cepte ile en yakın halı sahaları zahmetsizce keşfedin,
                rezervasyonunuzu yapın ve oyunun tadını çıkarın. Sporseverlere
                özel kampanyalarla her zaman en iyi hizmeti sunuyoruz!
              </p>
              <a href="/about" className="homepage-btn-learn-more">
                Bizi Daha Yakından Tanıyın
              </a>
            </div>
          </section>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default Homepage;
