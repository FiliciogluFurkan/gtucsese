import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./../css/header/header.css";
import { Link } from "@mui/material";

interface HeaderProps {
  currentTheme: "light" | "dark";
  toggleTheme: () => void;
}

export function Header({ currentTheme, toggleTheme }: HeaderProps) {
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

  return (
    <div
      className="header"
      style={{
        backgroundColor: isAtTop ? "rgba(0,0,0,0.8)" : "#000000",
        color: "#fff",
        zIndex: 1000,
        boxShadow: isAtTop ? "0 0 0" : "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)",
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

      <div className="header-tab-container">
        <div className="header-tab-left">
          <div className={`header-tab ${isSelected("/") ? "selected" : ""}`}>
            <Link
              color="inherit"
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
              color="inherit"
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
            <Link
              color="inherit"
              className="header-tab-text"
              href="/about"
            >
              HAKKIMIZDA
            </Link>
          </div>
          <div className={`header-tab ${isSelected("/help") ? "selected" : ""}`}>
            <Link
              color="inherit"
              className="header-tab-text"
              href="/help"
            >
              DESTEK
            </Link>
          </div>
        </div>

        <div className="header-tab-right">
          <div className="header-tab theme-toggle-button">
            <Link
              color="inherit"
              className="header-tab-text theme-button"
              onClick={toggleTheme}
              component="button"
              sx={{
                fontSize: '0.6rem',         // Daha da küçük font
                padding: '2px 6px',         // Minimal padding
                minWidth: 'auto',
                opacity: 0.8,               // Biraz saydam
                '&:hover': {
                  opacity: 1                // Hover'da tam opaklık
                }
              }}
            >
              {currentTheme === "dark" ? "☀️" : "🌙"}  {/* Emoji ile minimal görünüm */}
            </Link>
          </div>
          <div className={`header-tab ${isSelected("/signup") ? "selected" : ""}`}>
            <Link
              color="inherit"
              className="header-tab-text signup-button"
              href="/signup"
            >
              Bize Katıl
            </Link>
          </div>
          <div className={`header-tab ${isSelected("/login") ? "selected" : ""}`}>
            <Link
              color="inherit"
              className="header-tab-text login-button"
              href="/login"
            >
              Giriş
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

