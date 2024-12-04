import { useState } from "react";
import "src/pages/support/Support.css";

import PopularQuestions from "../../components/support/PopularQuestions";
import Communication from "../../components/support/Communication";
import Reservation from "../../components/support/Reservation";
import AboutSahanCepte from "../../components/support/AboutSahanCepte";
import AccountManagement from "../../components/support/AccountManagement";
import Campaigns from "../../components/support/Campaigns";
import Security from "../../components/support/Security";
import FootballCourtsSupport from "../../components/support/FootballCourtsSupport";
import { Box } from "@mui/material";

const Support = () => {
  const [selectedTitle, setSelectedTitle] = useState("Popüler Sorular");

  const renderComponent = () => {
    switch (selectedTitle) {
      case "Popüler Sorular":
        return <PopularQuestions />;
      case "Rezervasyon":
        return <Reservation />;
      case "Sahan Cepte Hakkında":
        return <AboutSahanCepte />;
      case "İletişim":
        return <Communication />;
      case "Hesap Yönetimi":
        return <AccountManagement />;
      case "Kampanyalar":
        return <Campaigns />;
      case "Güvenlik ve Gizlilik":
        return <Security />;
      case "Sahalar":
        return <FootballCourtsSupport />;
      default:
        return <PopularQuestions />;
    }
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <div style={{ paddingTop: "4rem" }}> </div>
      <hr />
      <br />
      <div className="support-page-sections">
        <div className="support-question-titles">
          <div className="support-question-titles-title">
            <h2>Yardım</h2>
          </div>
          <div>
            <ul>
              {[
                "Popüler Sorular",
                "Rezervasyon",
                "Sahan Cepte Hakkında",
                "İletişim",
                "Hesap Yönetimi",
                "Kampanyalar",
                "Güvenlik ve Gizlilik",
                "Sahalar",
              ].map((title) => (
                <div
                  className="support-question-titles-title-items"
                  key={title}
                >
                  <li
                    className={`support-question-titles-title-item ${
                      selectedTitle === title ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTitle(title)}
                  >
                    {title}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ flexGrow: 1, padding: "10px" }}>{renderComponent()}</div>
      </div>
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Support;
