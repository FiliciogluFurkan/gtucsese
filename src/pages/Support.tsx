import { useState } from "react";
import "./../css/support/Support.css";

import PopularQuestions from "../components/supportpagecomponents/PopularQuestions";
import Communication from "../components/supportpagecomponents/Communication";
import Reservation from "../components/supportpagecomponents/Reservation";
import AboutSahanCepte from "../components/supportpagecomponents/AboutSahanCepte";
import AccountManagement from "../components/supportpagecomponents/AccountManagement";
import Campaigns from "../components/supportpagecomponents/Campaigns";
import Security from "../components/supportpagecomponents/Security";
import FootballCourtsSupport from "../components/supportpagecomponents/FootballCourtsSupport";

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
                return <FootballCourtsSupport/>
            default:
                return <PopularQuestions />;
        }
    };

    return (
        <div className="support-page">
            <hr />
            <br />
            <div className="support-page-sections">
                <div className="support-question-titles">
                    <div className="support-question-titles-title"><h2>Yardım</h2></div>
                    <div>
                        <ul>
                            {["Popüler Sorular", "Rezervasyon", "Sahan Cepte Hakkında", "İletişim", "Hesap Yönetimi", "Kampanyalar", "Güvenlik ve Gizlilik", "Sahalar"].map((title) => (
                                <div className="support-question-titles-title-items" key={title}>
                                    <li
                                        className={`support-question-titles-title-item ${selectedTitle === title ? 'selected' : ''}`}
                                        onClick={() => setSelectedTitle(title)}
                                    >
                                        {title}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{ flexGrow: 1, padding: "10px" }}>
                    {renderComponent()}
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Support;
