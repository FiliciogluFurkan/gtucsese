import { useState } from "react";
import {
  Bath,
  Utensils,
  CreditCard,
  Toilet,
  SquareParking,
  Wifi,
  Coffee,
  Music,
  ShoppingCart,
  Tv,
  Cross,
  Clock,
  BicepsFlexed,
  PersonStanding,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";

const CourtServices = (): JSX.Element => {
  const [features, setFeatures] = useState([
    { icon: <Bath size={18} />, name: "Duş" },
  ]);

  const [newFeature, setNewFeature] = useState({ icon: "", name: "" });
  const [selectedIcon, setSelectedIcon] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddFeature = () => {
    if (!newFeature.icon || !newFeature.name) {
      setOpenSnackbar(true);
      return;
    }

    const iconMap: Record<string, JSX.Element> = {
      Bath: <Bath size={18} />,
      Utensils: <Utensils size={18} />,
      CreditCard: <CreditCard size={18} />,
      Toilet: <Toilet size={18} />,
      SquareParking: <SquareParking size={18} />,
      Wifi: <Wifi size={18} />,
      Coffee: <Coffee size={18} />,
      Music: <Music size={18} />,
      ShoppingCart: <ShoppingCart size={18} />,
      Tv: <Tv size={18} />,
      Cross: <Cross size={18} />,
      Clock: <Clock size={18} />,
      BicepsFlexed: <BicepsFlexed size={18} />,
      PersonStanding: <PersonStanding size={18} />,
    };

    setFeatures([
      ...features,
      { icon: iconMap[newFeature.icon], name: newFeature.name },
    ]);
    setNewFeature({ icon: "", name: "" });
    setSelectedIcon("");
  };

  const handleIconSelect = (icon: string) => {
    if (selectedIcon === icon) {
      setNewFeature({ ...newFeature, icon: "" });
      setSelectedIcon("");
    } else {
      setNewFeature({ ...newFeature, icon });
      setSelectedIcon(icon);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card>
      <CardHeader
        sx={{
          fontFamily: "Montserrat",
          fontSize: "1.5rem",
          fontWeight: 600,
          paddingLeft: "2rem",
        }}
        title="Tesis Özellikleri"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          fontFamily: "Montserrat",
          fontSize: "1rem",
          paddingLeft: "2rem",
          color: "#333",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "5px",
              width: "calc(33.33% - 1rem)",
            }}
          >
            {feature.icon}
            <Typography sx={{ fontSize: "1rem", color: "#333" }}>
              {feature.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <CardContent sx={{ paddingTop: "2rem", paddingLeft: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <IconButton
                onClick={() => handleIconSelect("Bath")}
                sx={{ color: selectedIcon === "Bath" ? "green" : "inherit" }}
              >
                <Bath size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Utensils")}
                sx={{
                  color: selectedIcon === "Utensils" ? "green" : "inherit",
                }}
              >
                <Utensils size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("CreditCard")}
                sx={{
                  color: selectedIcon === "CreditCard" ? "green" : "inherit",
                }}
              >
                <CreditCard size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Toilet")}
                sx={{ color: selectedIcon === "Toilet" ? "green" : "inherit" }}
              >
                <Toilet size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("SquareParking")}
                sx={{
                  color: selectedIcon === "SquareParking" ? "green" : "inherit",
                }}
              >
                <SquareParking size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Wifi")}
                sx={{ color: selectedIcon === "Wifi" ? "green" : "inherit" }}
              >
                <Wifi size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Coffee")}
                sx={{ color: selectedIcon === "Coffee" ? "green" : "inherit" }}
              >
                <Coffee size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Music")}
                sx={{ color: selectedIcon === "Music" ? "green" : "inherit" }}
              >
                <Music size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("ShoppingCart")}
                sx={{
                  color: selectedIcon === "ShoppingCart" ? "green" : "inherit",
                }}
              >
                <ShoppingCart size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Tv")}
                sx={{ color: selectedIcon === "Tv" ? "green" : "inherit" }}
              >
                <Tv size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Cross")}
                sx={{ color: selectedIcon === "Cross" ? "green" : "inherit" }}
              >
                <Cross size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("Clock")}
                sx={{ color: selectedIcon === "Clock" ? "green" : "inherit" }}
              >
                <Clock size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("BicepsFlexed")}
                sx={{
                  color: selectedIcon === "BicepsFlexed" ? "green" : "inherit",
                }}
              >
                <BicepsFlexed size={24} />
              </IconButton>
              <IconButton
                onClick={() => handleIconSelect("PersonStanding")}
                sx={{
                  color:
                    selectedIcon === "PersonStanding" ? "green" : "inherit",
                }}
              >
                <PersonStanding size={24} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Servis Adı"
              value={newFeature.name}
              onChange={(e) =>
                setNewFeature({ ...newFeature, name: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddFeature}
            >
              Özellik Ekle
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Lütfen bir ikon ve isim seçin!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default CourtServices;
