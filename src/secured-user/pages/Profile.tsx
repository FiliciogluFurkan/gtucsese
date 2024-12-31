import { Box, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

interface ProfileProps {
  children: React.ReactNode;
}

const Profile = ({ children }: ProfileProps): JSX.Element => {
  const location = useLocation();

  return (
    <div
      style={{
        paddingTop: "4.5rem",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          paddingTop: "4.5rem",
          width: { lg: "80%", sm: "100%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#D9F3EABA",
            padding: "1rem",
            height: { sm: "3rem", md: "4rem" },
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          <Link
            href="/profilim"
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "Barlow",
              color: location.pathname === "/profilim" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Profil Düzenle
          </Link>
          <Link
            href="/rezervasyonlarim"
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              textDecoration: "none",
              color:
                location.pathname === "/rezervasyonlarim"
                  ? "#2E7D32"
                  : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Rezervasyonlarım
          </Link>
          <Link
            href="/degerlendirmelerim"
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              textDecoration: "none",
              fontWeight: 500,
              fontFamily: "Barlow",
              color:
                location.pathname === "/degerlendirmelerim"
                  ? "#2E7D32"
                  : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Değerlendirmelerim
          </Link>
          <Link
            href="/favorilerim"
            variant="h6"
            sx={{
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color:
                location.pathname === "/favorilerim" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Favorilerim
          </Link>
        </Box>

        {children}
      </Box>
    </div>
  );
};

export default Profile;
