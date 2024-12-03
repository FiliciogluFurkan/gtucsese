import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./../css/header/header.css";
//import logo from "/src/assets/images/logo.png";
import { Link } from "@mui/material";
import { useCustomTheme } from "../themes/Theme";

function Header() {
  const location = useLocation();
  const theme = useCustomTheme();
  const [isAtTop, setIsAtTop] = useState(false);


  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsAtTop(true);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Seçili sayfa kontrolü
  const isSelected = (path: string) => location.pathname === path;

  console.log(theme.palette);

  return (
    <div
      className="header"
      style={
        isAtTop
          ? {
              backgroundColor: "rgba(0,0,0,0.8)",
              color: theme.palette.tx.secondary.w400,
              zIndex: 1000,

              boxShadow: "0 0 0",
            }
          : {
              backgroundColor: "#000000",
              color: theme.palette.tx.secondary.w400,
              zIndex: 1000,
              boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",
            }
      }
    >
      <div className="header-image-container">
        <div
          style={
            isAtTop
              ? {
                  color: theme.palette.tx.secondary.w400,
                  borderLeftColor: theme.palette.tx.secondary.w400,
                }
              : {
                  color: theme.palette.tx.secondary.w400,
                  borderLeftColor: theme.palette.tx.secondary.w400,
                }
          }
          className="header-image-container-title"
        >
          SAHAN CEPTE
        </div>
      </div>

      <div className="header-tab-container">
        <div className="header-tab-left">
          <div className={`header-tab ${isSelected("/") ? "selected" : ""}`}>
            <Link
              color={
                isAtTop
                  ? theme.palette.tx.secondary.w400
                  : theme.palette.tx.secondary.w400
              }
              className="header-tab-text"
              href="/"
            >
              ANA SAYFA
            </Link>
          </div>
          <div
            className={`header-tab ${isSelected("/fields") ? "selected" : ""}`}
          >
            <Link
              color={
                isAtTop
                  ? theme.palette.tx.secondary.w400
                  : theme.palette.tx.secondary.w400
              }
              className="header-tab-text"
              href="/fields"
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
              color={
                isAtTop
                  ? theme.palette.tx.secondary.w400
                  : theme.palette.tx.secondary.w400
              }
              className="header-tab-text"
              href="/createteam"
            >
              KADRO KUR
            </Link>
          </div>
          <div
            className={`header-tab  ${isSelected("/about") ? "selected" : ""}`}
          >
            <Link
              color={
                isAtTop
                  ? theme.palette.tx.secondary.w400
                  : theme.palette.tx.secondary.w400
              }
              className="header-tab-text"
              href="/about"
            >
              HAKKIMIZDA
            </Link>
          </div>
          <div className={`header-tab ${isSelected("/help") ? "selected" : ""}`}>
            <Link
              color={
                isAtTop
                  ? theme.palette.tx.secondary.w400
                  : theme.palette.tx.secondary.w400
              }
              className="header-tab-text"
              href="/help"
            >
              DESTEK
            </Link>
          </div>
        </div>

        <div className="header-tab-right">
          <div className="header-tab">
            <Link
              color={isAtTop ? theme.palette.tx.secondary.w400 : theme.palette.tx.secondary.w400}
              className="header-tab-text signup-button"
              href="/signup"
            >
              BİZE KATIL
            </Link>
          </div>
          <div className="header-tab">
            <Link
              color={isAtTop ? theme.palette.tx.secondary.w400 : theme.palette.tx.secondary.w400}
              className="header-tab-text login-button"
              href="/login"
            >
              GİRİŞ YAP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
