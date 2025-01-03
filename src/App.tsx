import "src/App.css";
import Header from "src/components/header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "src/themes/Theme";
import HomePage from "src/pages/homepage/HomePage";
import About from "src/pages/about/About";
import FootballCourts from "src/pages/facilities/Facilities";
import CreateTeam from "src/pages/create-team/CreateTeam";
import Footer from "src/components/footer/Footer";
import CourtDetails from "src/pages/court-details/CourtDetails";
import Login from "src/pages/login/Login";
import SignUp from "src/pages/register/Register";
import PasswordReset from "src/pages/password-reset/PasswordReset";
import Support from "src/pages/support/Support";
import Profil from "src/secured-user/pages/Profile";
import Reservations from "src/pages/reservations/Reservations";
import DashboardTemplate from "src/admin/pages/DashboardTemplate";
import SecuredRoute from "src/components/secured-route/SecuredRoute";
import MyProfile from "./secured-user/components/my/MyProfile";
import MyReservations from "./secured-user/components/my/MyReservations";
import MyComments from "./secured-user/components/my/MyReviews";
import MyFavorites from "./secured-user/components/my/MyFavorites";
import { SnackbarProvider } from "./components/snackbar/Snackbar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { tr } from "date-fns/locale/tr";

const App = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={tr}>
        <SnackbarProvider>
          <Header
            currentTheme={isDarkMode ? "dark" : "light"}
            toggleTheme={toggleTheme}
          />
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/hakkimizda" Component={About}></Route>
            <Route path="/halisahalar" Component={FootballCourts}></Route>
            <Route path="/kadro-olustur" Component={CreateTeam}></Route>
            <Route path="/destek" Component={Support}></Route>
            <Route path="/halisaha/:uuid" Component={CourtDetails} />
            <Route path="/giris-yap" Component={Login}></Route>
            <Route path="/kayit-ol" Component={SignUp}></Route>
            <Route path="/sifre-degistirme" Component={PasswordReset}></Route>

            <Route path="/reservasyonlar" Component={Reservations}></Route>

            <Route element={<SecuredRoute />}>
              <Route
                path="/profilim"
                element={
                  <Profil>
                    <MyProfile />
                  </Profil>
                }
              />
              <Route
                path="/rezervasyonlarim"
                element={
                  <Profil>
                    <MyReservations />
                  </Profil>
                }
              />
              <Route
                path="/degerlendirmelerim"
                element={
                  <Profil>
                    <MyComments />
                  </Profil>
                }
              />
              <Route
                path="/favorilerim"
                element={
                  <Profil>
                    <MyFavorites />
                  </Profil>
                }
              />

              <Route path="/admin/dashboard" element={<DashboardTemplate />} />
            </Route>
          </Routes>
          {location.pathname !== "/profilim" &&
            location.pathname !== "/rezervasyonlarim" &&
            location.pathname !== "/degerlendirmelerim" &&
            location.pathname !== "/favorilerim" &&
            location.pathname !== "/admin/dashboard" && <Footer />}
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
