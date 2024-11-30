import { Box, Typography } from "@mui/material";
import { useState } from "react"; 
import MyProfile from "../components/UserAccount/MyProfile";
import MyReservations from "../components/UserAccount/MyReservations";
import MyFavorites from "../components/UserAccount/MyFavorites";
import MyComments from "../components/UserAccount/MyComments";

const Profil = () => {
  
  const [activeTab, setActiveTab] = useState("profil");

  // Tıklama handler'ı
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch(activeTab){
      case "profil": return <MyProfile/>
      case "rezervasyonlar": return <MyReservations/>
      case "degerlendirmeler": return <MyComments/>
      case "favoriler": return <MyFavorites/>
      
    }
  }

  return (
    <div
      style={{
        paddingTop: "8rem",
        paddingLeft: "8.5rem",
        paddingRight: "8.5rem",
      }}
    >
      <Box sx={{ width: "100vw", paddingBottom: "8rem" }}>
        <Box
          sx={{
            width: "82%",
            backgroundColor: "#D9F3EABA",
            padding: "1rem",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10.5rem",
          }}
        >
          <Typography
            variant="h6"
            onClick={() => handleTabClick("profil")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "profil" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Profil Düzenle
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick("rezervasyonlar")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "rezervasyonlar" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Rezervasyonlarım
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick("degerlendirmeler")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "degerlendirmeler" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Değerlendirmelerim
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick("favoriler")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "favoriler" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Favorilerim
          </Typography>
        </Box>

        {/* Buradan sonraki kodlar aynı kalacak */}

        {
          renderComponent()
        }


      </Box>
    </div>
  );
};

export default Profil;
