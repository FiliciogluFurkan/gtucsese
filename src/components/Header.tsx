import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./../css/header/header.css";
//import logo from "/src/assets/images/logo.png";
import { Button, Divider, Link } from "@mui/material";
import { useCustomTheme } from "../themes/Theme";

interface HeaderProps {
  currentTheme: string;
  toggleTheme: () => void;
}

function Header({ currentTheme, toggleTheme }: HeaderProps) {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Mevcut yolu almak için useLocation kullanılıyor
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Seçili sayfa kontrolü
  const isSelected = (path: string) => location.pathname === path;

  console.log(theme.palette);

  return (
    <div
      className="header"
      style={
        isAtTop
          ? {
              backgroundColor: "rgba(0,0,0,0.45)",
              color: theme.palette.tx.secondary.w400,
              zIndex: 1000,

              boxShadow: "0 0 0",
            }
          : {
              backgroundColor: theme.palette.background.secondary.w250,
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

      <div className="menu-button">
        <div className="menu-button-material-symbols-outlined">
          <span
            className="material-symbols-outlined"
            onClick={toggleMenu}
            style={{  cursor: "pointer",
              marginRight: "10px",
              color: "#ffffff"  }}
          >
            Menu
          </span>
        </div>

        {showMenu && (
          <div className="header-dropdown">
            <div className="header-dropdown-tab">
              <Link
                color={theme.palette.tx.primary.w400}
                href="/login"
                className="header-dropdown-tab-text"
              >
                Giriş Yap
              </Link>
            </div>

            <div className="header-dropdown-tab">
              <Link
                className="header-dropdown-tab-text"
                color={theme.palette.tx.primary.w400}
                href="/signup"
              >
                Kayıt Ol
              </Link>
            </div>
            <Divider />
            <div className="header-dropdown-tab">
              <Button
                color="inherit"
                className="header-dropdown-tab-text"
                variant="text"
                onClick={toggleTheme}
              >
                {currentTheme === "light" ? "Karanlık Mod" : "Aydınlık Mod"}
              </Button>
            </div>
            <Divider />
            <div className="header-dropdown-tab">
              <Link
                color={theme.palette.tx.primary.w400}
                href="/password-reset"
                className="header-dropdown-tab-text"
                onClick={toggleMenu}
              >
                Şifre Yenile
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
