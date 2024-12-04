import { Box } from "@mui/material";
import React from "react";
import frieren from "src/assets/images/Profil/frieren.png";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MyProfile = () => {
  const genders = ["Erkek", "Kadın"];

  const cities = ["İstanbul", "Ankara", "Sakarya", "Burdur", "Ordu", "Sivas"];

  const ages = [
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
  ];

  // Her seçim için ayrı durum değişkenleri
  const [gender, setGender] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");

  // Her seçim için ayrı handleChange işlevleri
  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value);
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setCity(event.target.value);
  };

  const handleAgeChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Box sx={{ display: "flex", paddingTop: "4rem", flexDirection: "row" }}>
        <Box>
          <img
            src={frieren}
            alt="your image"
            style={{ width: "auto", height: "auto", objectFit: "cover" }}
          />
        </Box>

        <Box sx={{ paddingLeft: "2rem", paddingTop: "1.25rem" }}>
          <Box
            sx={{
              fontWeight: 500,
              fontFamily: "Poppins",
              fontSize: "1.1rem",
              color: "#000000",
            }}
          >
            Ömer Faruk ORUÇ
          </Box>

          <Box
            sx={{
              fontWeight: 400,
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              color: "#000000",
            }}
          >
            omerfarukorc@gmail.com
          </Box>
        </Box>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#36C191",
            color: "#ffffff",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "Poppins",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginLeft: "48rem",
            marginTop: "1rem",
            marginBottom: "2rem",
            "&:hover": {
              backgroundColor: "#57AE76",
            },
          }}
        >
          Düzenle
        </Box>
      </Box>

      <Box sx={{ flexDirection: "column", paddingTop: "3rem" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontWeight: 400,
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              color: "#000000",
            }}
          >
            <Box sx={{ paddingBottom: "0.3rem" }}>İsim Soyisim</Box>
            <Box sx={{ paddingLeft: "35rem", paddingBottom: "1rem" }}>
              Kullanıcı Adı
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              component="input"
              placeholder="İsim Soyisim"
              sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "4px",
                padding: "1rem 1rem",
                fontSize: "1rem",
                color: "#333",
                width: "40%",
                border: "none",
                outline: "none",
                fontFamily: "Arial, sans-serif",
                "&::placeholder": {
                  color: "#9CA3AF",
                },
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
                "&:focus": {
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)",
                },
              }}
            />
            <Box
              component="input"
              placeholder="Kullanıcı Adı"
              sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "4px",
                padding: "1rem 1rem",
                marginLeft: "3.7rem",
                fontSize: "1rem",
                color: "#333",
                width: "40%",
                border: "none",
                outline: "none",
                fontFamily: "Arial, sans-serif",
                "&::placeholder": {
                  color: "#9CA3AF",
                },
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
                "&:focus": {
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)",
                },
              }}
            />
          </Box>
        </Box>

        <Box sx={{ paddingTop: "1.5rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontWeight: 400,
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              color: "#000000",
            }}
          >
            <Box sx={{ paddingBottom: "0.3rem" }}>Cinsiyet</Box>
            <Box sx={{ paddingLeft: "36.8rem", paddingBottom: "1rem" }}>
              Şehir
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <FormControl sx={{ width: "40%", backgroundColor: "#F8F8F8" }}>
              <InputLabel
                sx={{
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                }}
                id="gender-select-label"
              >
                Cinsiyet
              </InputLabel>
              <Select
                labelId="gender-select-label"
                id="gender-select"
                value={gender}
                onChange={handleGenderChange}
                input={<OutlinedInput label="Cinsiyet" />}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                    },
                  },
                }}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#3D3838",
                }}
              >
                {genders.map((genderOption) => (
                  <MenuItem
                    key={genderOption}
                    value={genderOption}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1rem",
                      fontWeight: "400",
                      color: "#3D3838",
                    }}
                  >
                    {genderOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              sx={{
                width: "40%",
                backgroundColor: "#F8F8F8",
                marginLeft: "3.8rem",
              }}
            >
              <InputLabel
                sx={{
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                }}
                id="city-select-label"
              >
                Şehir Seçiniz
              </InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                value={city}
                onChange={handleCityChange}
                input={<OutlinedInput label="Şehir Seçiniz" />}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                    },
                  },
                }}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#3D3838",
                }}
              >
                {cities.map((cityOption) => (
                  <MenuItem
                    key={cityOption}
                    value={cityOption}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1rem",
                      fontWeight: "400",
                      color: "#3D3838",
                    }}
                  >
                    {cityOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ paddingTop: "1.5rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontWeight: 400,
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              color: "#000000",
            }}
          >
            <Box sx={{ paddingBottom: "0.3rem" }}>Yaş</Box>
            <Box sx={{ paddingLeft: "39.4rem", paddingBottom: "1rem" }}>
              Email
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <FormControl
              sx={{
                width: "40%",
                backgroundColor: "#F8F8F8",
              }}
            >
              <InputLabel
                sx={{
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                }}
                id="age-select-label"
              >
                Yaşınızı Seçiniz
              </InputLabel>
              <Select
                labelId="age-select-label"
                id="age-select"
                value={age}
                onChange={handleAgeChange}
                input={<OutlinedInput label="Yaşınızı Seçiniz" />}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                    },
                  },
                }}
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "#3D3838",
                }}
              >
                {ages.map((ageOption) => (
                  <MenuItem
                    key={ageOption}
                    value={ageOption}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1rem",
                      fontWeight: "400",
                      color: "#3D3838",
                    }}
                  >
                    {ageOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box
              component="input"
              placeholder="ornekemail@gmail.com"
              sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "4px",
                padding: "1rem 1rem",
                marginLeft: "3.7rem",
                fontSize: "1rem",
                color: "#333",
                width: "40%",
                border: "none",
                outline: "none",
                fontFamily: "Arial, sans-serif",
                "&::placeholder": {
                  color: "#9CA3AF",
                },
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
                "&:focus": {
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#36C191",
          color: "#ffffff",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "6rem",
          paddingRight: "6rem",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "400",
          fontFamily: "Poppins",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginLeft: "27.5rem",
          marginTop: "4rem",
          "&:hover": {
            backgroundColor: "#57AE76",
          },
        }}
      >
        Değişiklikleri Kaydet
      </Box>
    </div>
  );
};

export default MyProfile;
