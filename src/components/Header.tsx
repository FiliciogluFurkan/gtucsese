import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../css/header/header.css";
//import logo from "/src/assets/images/logo.png";
import darklogo from "/src/assets/images/logo-white-3.png";
import { Divider } from "@mui/material";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Mevcut yolu almak için useLocation kullanılıyor

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Seçili sayfa kontrolü
  const isSelected = (path: string) => location.pathname === path;

  return (
    <div className="header">
      <div className="header-image-container">
        {/* <img
          className="header-image"
          style={{ width: "12px", height: "100px" }}
          src={darklogo}
          alt="logo"
        /> */}
        <div className="header-image-container-title">SAHAN CEPTE</div>
      </div>

      <div className="header-tab-container">
        <div className={`header-tab ${isSelected("/") ? "selected" : ""}`}>
          <Link className="header-tab-text" to="/">
            Ana Sayfa
          </Link>
        </div>
        <div
          className={`header-tab ${isSelected("/fields") ? "selected" : ""}`}
        >
          <Link className="header-tab-text" to="/fields">
            Halı Sahalar
          </Link>
        </div>
        <div
          className={`header-tab ${
            isSelected("/createteam") ? "selected" : ""
          }`}
        >
          <Link className="header-tab-text" to="/createteam">
            Kadro Kur
          </Link>
        </div>
        <div
          className={`header-tab  ${isSelected("/about") ? "selected" : ""}`}
        >
          <Link className="header-tab-text" to="/about">
            Hakkımızda
          </Link>
        </div>
        <div className={`header-tab ${isSelected("/help") ? "selected" : ""}`}>
          <Link className="header-tab-text" to="/help">
            Destek
          </Link>
        </div>
      </div>

      <div className="menu-button">
        <div className="menu-button-material-symbols-outlined">
          <span
            className="material-symbols-outlined"
            onClick={toggleMenu}
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            Menu
          </span>
        </div>

        {showMenu && (
          <div className="header-dropdown">
            <div className="header-dropdown-tab">
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontFamily: "Roboto",
                }}
              >
                Giriş Yap
              </Link>
            </div>

            <div className="header-dropdown-tab">
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontFamily: "Roboto",
                }}
              >
                Kayıt Ol
              </Link>
            </div>
            <Divider />
            <div className="header-dropdown-tab">
              <Link
                to="/password-reset"
                onClick={toggleMenu}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontFamily: "Roboto",
                }}
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
