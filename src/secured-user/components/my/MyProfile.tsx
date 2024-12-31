import { Box, Button, Input, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import frieren from "src/assets/images/Profil/frieren.png";
import InputLabel from "@mui/material/InputLabel";
import { Account } from "@/interfaces/Account";
import { useSendAuthenticatedRequest } from "@/services/AuthorizedRequests";
import { useSnackbar } from "@/components/snackbar/Snackbar";
import { formatInstantAsDate } from "@/services/TimeServices";

const MyProfile = (): JSX.Element => {
  const { sendAuthenticatedRequest } = useSendAuthenticatedRequest();
  const [account, setAccount] = useState<Account | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const showSnackbar = useSnackbar();

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchAccount = async () => {
    try {
      const response = await sendAuthenticatedRequest({
        url: apiUrl + "/api/v1/account/my",
        method: "get",
      });
      console.log(response.data);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setMailAddress(response.data.email);
      setPhoneNumber(response.data.phoneNumber);
      const date = formatInstantAsDate(response.data.createdAt);
      setCreatedAt(date);
      setAccount(response.data);
    } catch (err) {
      console.error("Failed to fetch account:", err);
    }
  };

  const updateAccount = async () => {
    try {
      const response = await sendAuthenticatedRequest({
        url: apiUrl + "/api/v1/accounts/my",
        method: "patch",
        data: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to update account");
      }
      showSnackbar("Hesap bilgileriniz başarıyla güncellendi.", "success");
      fetchAccount();
    } catch (err) {
      console.error("Failed to update account:", err);
      showSnackbar(
        "Hesap bilgileriniz güncellenirken bir hata oluştu.",
        "error"
      );
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <Stack
      sx={{
        height: "calc(100vh - 13rem)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: "6rem",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box>
          <img
            src={account?.profilePicture || frieren}
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
            {account?.firstName + " " + account?.lastName}
          </Box>

          <Box
            sx={{
              fontWeight: 400,
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              color: "#000000",
            }}
          >
            {account?.email}
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
            marginLeft: "auto",
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

      <Stack
        gap={4}
        sx={{
          flexDirection: "column",
          paddingTop: "5rem",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "2rem",
          }}
        >
          <Stack
            sx={{
              width: "50%",
            }}
          >
            <InputLabel
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#000000",
                fontWeight: 500,
              }}
            >
              İsim
            </InputLabel>
            <Input
              value={firstName}
              placeholder="İsim"
              onChange={(e) => setFirstName(e.target.value)}
              sx={{
                width: "100%",
                marginTop: "0.5rem",
                backgroundColor: "#F8F8F8",
                borderRadius: "1rem",
                padding: "1rem 1rem",
                fontSize: "1rem",
                color: "#333",
                border: "none",
                outline: "none",
                textDecoration: "none",
                borderBottom: "none",
                boxShadow: "none",
                ":before": {
                  borderBottom: "none",
                },
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
          </Stack>
          <Stack
            sx={{
              width: "50%",
            }}
          >
            <InputLabel
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#000000",
                fontWeight: 500,
              }}
            >
              Soyisim
            </InputLabel>
            <Input
              value={lastName}
              placeholder="Soyisim"
              onChange={(e) => setLastName(e.target.value)}
              sx={{
                width: "100%",
                marginTop: "0.5rem",
                backgroundColor: "#F8F8F8",
                borderRadius: "1rem",
                padding: "1rem 1rem",
                fontSize: "1rem",
                color: "#333",
                border: "none",
                outline: "none",
                textDecoration: "none",
                borderBottom: "none",
                boxShadow: "none",
                ":before": {
                  borderBottom: "none",
                },
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
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "2rem",
          }}
        >
          <Stack
            sx={{
              width: "50%",
            }}
          >
            <InputLabel
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#000000",
                fontWeight: 500,
              }}
            >
              Mail Adresi
            </InputLabel>
            <Input
              value={mailAddress}
              placeholder="Mail Adresi"
              onChange={(e) => setMailAddress(e.target.value)}
              sx={{
                width: "100%",
                marginTop: "0.5rem",
                backgroundColor: "#F8F8F8",
                borderRadius: "1rem",
                padding: "1rem 1rem",
                fontSize: "1rem",
                color: "#333",
                border: "none",
                outline: "none",
                textDecoration: "none",
                borderBottom: "none",
                boxShadow: "none",
                ":before": {
                  borderBottom: "none",
                  content: "none",
                },

                ":disabled": {
                  backgroundColor: "#F8F8F8",
                  color: "#333",
                  border: "none",
                  outline: "none",
                  textDecoration: "none",
                  borderBottom: "none",
                  boxShadow: "none",
                  ":before": {
                    borderBottom: "none",
                  },
                },
                fontFamily: "Arial, sans-serif",
                "&::placeholder": {
                  color: "#9CA3AF",
                },
              }}
              disabled
            />
          </Stack>
          <Stack
            sx={{
              width: "50%",
            }}
          >
            <InputLabel
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#000000",
                fontWeight: 500,
              }}
            >
              Telefon Numarası
            </InputLabel>
            <Input
              value={phoneNumber}
              placeholder="Telefon Numarası"
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                width: "100%",
                marginTop: "0.5rem",
                backgroundColor: "#F8F8F8",
                borderRadius: "1rem",
                padding: "1rem 1rem",
                fontSize: "1rem",
                color: "#333",
                border: "none",
                outline: "none",
                textDecoration: "none",
                borderBottom: "none",
                boxShadow: "none",
                ":before": {
                  borderBottom: "none",
                },
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
          </Stack>
        </Stack>
      </Stack>

      <Box
        sx={{
          marginTop: "1.2rem",
          marginLeft: "0.5rem",
          color: "rgb(100,100,100)",
          fontSize: "0.8rem",
          fontWeight: 400,
          fontFamily: "Poppins",
        }}
      >
        Hesap Oluşturulma Tarihi: {createdAt}
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "3rem", sm: "5rem" },

          color: "#ffffff",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "400",
          fontFamily: "Poppins",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        <Button
          variant="contained"
          onClick={updateAccount}
          sx={{
            backgroundColor: "#36C191",
            color: "#ffffff",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "400",

            paddingX: { xs: "1rem", md: "2rem" },
            fontFamily: "Poppins",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#57AE76",
            },
          }}
        >
          Değişiklikleri Kaydet
        </Button>
      </Box>
    </Stack>
  );
};

export default MyProfile;
