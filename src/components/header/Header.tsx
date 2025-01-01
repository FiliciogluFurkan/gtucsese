import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "src/components/header/Header.css";
import { Box, Button, Link } from "@mui/material";
import { useAuthWithRoles } from "@/hooks/UseAuthWithRoles";

interface HeaderProps {
  currentTheme: "light" | "dark";
  toggleTheme: () => void;
}

const Header = ({ currentTheme }: HeaderProps): JSX.Element => {
  const auth = useAuthWithRoles();
  console.log(currentTheme);

  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(false);

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsAtTop(true);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location.pathname]);

  const isSelected = (path: string) => location.pathname === path;

  if (location.pathname === "/admin/dashboard") {
    return <div></div>;
  }

  return (
    <div
      className="header"
      style={{
        backgroundColor: isAtTop ? "rgb(12 12 12)" : "rgb(12 12 12)",
        color: "#fff",
        zIndex: 1000,
        boxShadow: location.pathname === "/" && isAtTop ? "none" : "none",
      }}
    >
      <div className="header-image-container">
        <div
          style={{
            color: "#fff",
            borderLeftColor: "#fff",
          }}
          className="header-image-container-title"
        >
          SAHAN CEPTE
        </div>
      </div>

      <Box
        sx={{
          color: "rgb(200,200,200)",
          height: "100%",
          marginLeft: { sm: "5rem", md: "5rem" },
        }}
        className="header-tab-container"
      >
        <div className="header-tab-left">
          <div className={`header-tab ${isSelected("/") ? "selected" : ""}`}>
            <Link color="inherit" className="header-tab-text" href="/">
              ANA SAYFA
            </Link>
          </div>
          <div
            className={`header-tab ${
              isSelected("/facilities") ? "selected" : ""
            }`}
          >
            <Link
              color="inherit"
              className="header-tab-text"
              href="/facilities"
            >
              HALI SAHALAR
            </Link>
          </div>
          <div
            className={`header-tab ${
              isSelected("/createteam") ? "selected" : ""
            }`}
          >
            <Link
              color="inherit"
              className="header-tab-text"
              href="/createteam"
            >
              KADRO KUR
            </Link>
          </div>
          <div
            className={`header-tab ${isSelected("/about") ? "selected" : ""}`}
          >
            <Link color="inherit" className="header-tab-text" href="/about">
              HAKKIMIZDA
            </Link>
          </div>
          <div
            className={`header-tab ${isSelected("/help") ? "selected" : ""}`}
          >
            <Link color="inherit" className="header-tab-text" href="/help">
              DESTEK
            </Link>
          </div>
        </div>
        {true ? (
          <div className="header-tab-right">
            <div
              className={`header-tab ${
                isSelected("/signup") ? "selected" : ""
              }`}
            >
              <Button
                color="inherit"
                sx={{
                  marginRight: { xs: "1rem", sm: "0rem" },
                  marginTop: { xs: "0.5rem", sm: "0.7rem" },
                  textTransform: "none",
                  borderStyle: "solid",
                  fontFamily: "Poppins",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  borderColor: "rgba(200, 200, 200, 0.2)",
                  borderWidth: 1,
                  padding: { xs: "0.5rem 1rem", sm: "0.6rem 1.2rem" },
                  borderRadius: { xs: 0, sm: 16 },
                }}
                className="header-tab-text signup-button"
                onClick={() => {
                  auth.user
                    ? auth.signoutRedirect({
                        post_logout_redirect_uri: import.meta.env.VITE_BASE_URL,
                      })
                    : auth.signinRedirect({
                        redirect_uri: window.location.href,
                      });
                }}
              >
                {auth.isAuthenticated ? "Çıkış Yap" : "Bize Katıl"}
              </Button>
            </div>

            <Button
              color="inherit"
              sx={{
                marginLeft: { xs: "1rem", sm: "2rem" },
                fontWeight: 800,
                textTransform: "none",
                /*  borderStyle: "solid", */
                fontFamily: "Poppins",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                bgcolor: "rgb(0, 163, 57, 0.9)",
                /*  borderWidth: 3, */
                padding: { xs: "0.5rem 1rem", sm: "0.6rem 1.2rem" },
                /* paddingTop: { xs: "0.5rem", sm: "0.5rem" }, */
                borderRadius: { xs: 0, sm: 16 },
              }}
              className="header-tab-text"
              onClick={() => {
                auth.isAuthenticated
                  ? (window.location.href = "/profilim")
                  : auth.signinRedirect({ redirect_uri: window.location.href });
              }}
            >
              {auth.isAuthenticated ? "Profilim" : "Giriş Yap"}
            </Button>
            {auth.isAuthenticated && (
              <Button
                color="inherit"
                sx={{
                  marginLeft: { xs: "1rem", sm: "2rem" },
                  fontWeight: 800,
                  textTransform: "none",
                  /*  borderStyle: "solid", */
                  fontFamily: "Poppins",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  bgcolor: "rgb(0, 163, 57, 0.9)",
                  /*  borderWidth: 3, */
                  padding: { xs: "0.5rem 1rem", sm: "0.6rem 1.2rem" },
                  /* paddingTop: { xs: "0.5rem", sm: "0.5rem" }, */
                  borderRadius: { xs: 0, sm: 16 },
                }}
                className="header-tab-text"
                onClick={() => {
                  window.location.href = "/admin/dashboard";
                }}
              >
                Admin
              </Button>
            )}
          </div>
        ) : (
          <Box></Box>
        )}
      </Box>
    </div>
  );
};
export default Header;
