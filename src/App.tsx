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

const App = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SnackbarProvider>
        <Header
          currentTheme={isDarkMode ? "dark" : "light"}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/facilities" Component={FootballCourts}></Route>
          <Route path="/createteam" Component={CreateTeam}></Route>
          <Route path="/help" Component={Support}></Route>
          <Route path="/facility/:uuid" Component={CourtDetails} />
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={SignUp}></Route>
          <Route path="/password-reset" Component={PasswordReset}></Route>

          <Route path="/reservations" Component={Reservations}></Route>

          <Route element={<SecuredRoute />}>
            <Route
              path="/profilim"
              element={<Profil children={<MyProfile />} />}
            />
            <Route
              path="/rezervasyonlarim"
              element={<Profil children={<MyReservations />} />}
            />
            <Route
              path="/degerlendirmelerim"
              element={<Profil children={<MyComments />} />}
            />
            <Route
              path="/favorilerim"
              element={<Profil children={<MyFavorites />} />}
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
    </ThemeProvider>
  );
};

export default App;
