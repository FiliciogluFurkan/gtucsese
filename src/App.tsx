import "./App.css";
import Header from "src/components/header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState } from "react";
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
import DashboardTemplate from "./admin/pages/DashboardTemplate";
import { useAuth } from "react-oidc-context";
import SecuredRoute from "./components/secured-route/SecuredRoute";

const App = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const auth = useAuth();

  React.useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
      auth.signinSilent();
    });
  }, [auth.events, auth.signinSilent]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header
        currentTheme={isDarkMode ? "dark" : "light"}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/fields" Component={FootballCourts}></Route>
        <Route path="/createteam" Component={CreateTeam}></Route>
        <Route path="/help" Component={Support}></Route>
        <Route path="/fields/field-details/:id" element={<CourtDetails />} />
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/password-reset" Component={PasswordReset}></Route>

        <Route path="/reservations" Component={Reservations}></Route>

        <Route element={<SecuredRoute />}>
          <Route path="/profile" element={<Profil />} />
          <Route path="/admin/dashboard" element={<DashboardTemplate />} />
        </Route>
      </Routes>
      {location.pathname !== "/fields" && <Footer />}
    </ThemeProvider>
  );
};

export default App;
