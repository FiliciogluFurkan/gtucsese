import { Box } from "@mui/material";
import { useState } from "react";
import Dashboard from "src/admin/components/dashboard/Dashboard";
import MyCourts from "src/admin/components/my-courts/MyCourts";
import Reservations from "src/admin/components/reservations/Reservations";
import Analyzes from "src/admin/components/analyzes/Analyzes";
import Comments from "src/admin/components/comments/Comments";
import AdminAccount from "src/admin/components/account/Account";
import Calendar from "src/admin/components/calendar/Calendar";
import Logo from "src/assets/images/logo-dark.png";
import { useAuthWithRoles } from "@/hooks/Auth";
import ManageFacility from "../components/manage-facility/ManageFacility";

const DashboardTemplate = (): JSX.Element => {
  const [selectedTitle, setSelectedTitle] = useState("Admin Paneli");
  const auth = useAuthWithRoles();

  const renderComponent = () => {
    switch (selectedTitle) {
      case "Admin Paneli":
        return <Dashboard />;
      case "Tesis Detayları":
        return < ManageFacility/>;
      case "Rezervasyon Durumu":
        return <MyCourts />;
      case "Rezervasyonlarım":
        return <Reservations />;
      case "Analizler":
        return <Analyzes />;
      case "Yorumlar":
        return <Comments />;
      case "Hesabım":
        return <AdminAccount />;
      case "Takvim":
        return <Calendar />;
    }
  };

  return (
    <Box sx={{ width: "100vw", display: "flex", flexDirection: "row" }}>
      <Box sx={{ width: "15vw" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "2rem",
          }}
        >
          <Box>
            <img
              style={{ height: "8rem", width: "13rem" }}
              src={Logo}
              alt="merhaba"
            />
          </Box>

          <Box
            onClick={() => setSelectedTitle("Admin Paneli")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              marginTop: "0.8rem",
              color: selectedTitle === "Admin Paneli" ? "#00B074" : "#464255",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">home</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Admin Paneli
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Tesis Detayları")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color:
                selectedTitle === "Tesis Detayları" ? "#00B074" : "#464255",
              marginTop: "0.8rem",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">article</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Tesis Detayları
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Rezervasyon Durumu")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color: selectedTitle === "Rezervasyon Durumu" ? "#00B074" : "#464255",
              borderRadius: "4px",
              marginTop: "0.8rem",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">menu</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Rezervasyonlar
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Rezervasyonlarım")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color:
                selectedTitle === "Rezervasyonlarım" ? "#00B074" : "#464255",
              marginTop: "0.8rem",
              borderRadius: "4px",

              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">
                supervisor_account
              </span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Rezervasyonlarım
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Analizler")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              marginTop: "0.8rem",
              color: selectedTitle === "Analizler" ? "#00B074" : "#464255",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">monitoring</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Analizler
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Yorumlar")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color: selectedTitle === "Yorumlar" ? "#00B074" : "#464255",
              marginTop: "0.8rem",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">edit</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Yorumlar
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Hesabım")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color: selectedTitle === "Hesabım" ? "#00B074" : "#464255",
              marginTop: "0.8rem",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">person</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Hesabım
            </Box>
          </Box>

          <Box
            onClick={() => setSelectedTitle("Takvim")}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color: selectedTitle === "Takvim" ? "#00B074" : "#464255",
              marginTop: "0.8rem",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">edit_calendar</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Takvim
            </Box>
          </Box>

          <Box
            onClick={() => {
              auth.signoutRedirect({
                post_logout_redirect_uri: import.meta.env.VITE_BASE_URL,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "0.5rem 1rem",
              color: "#464255",
              marginTop: "0.8rem",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#DFFFD6",
                color: "#00B074",
                cursor: "pointer",
              },
            }}
          >
            <Box>
              <span className="material-symbols-outlined">logout</span>
            </Box>
            <Box
              sx={{
                fontFamily: "barlow",
                fontWeight: 700,
                fontsize: "1.5rem",
                paddingLeft: "1rem",
                marginTop: "0.2rem",
              }}
            >
              Çıkış Yap
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "85vw" }}>{renderComponent()}</Box>
    </Box>
  );
};

export default DashboardTemplate;
