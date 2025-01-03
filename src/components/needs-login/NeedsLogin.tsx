import { Box, Modal, Button, Stack, Divider } from "@mui/material";
import { useCustomTheme } from "@/themes/Theme";
import { useAuthWithRoles } from "@/hooks/UseAuthWithRoles";

interface NeedsLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const NeedsLoginModal = ({
  isOpen,
  onClose,
  message,
}: NeedsLoginModalProps): JSX.Element => {
  const auth = useAuthWithRoles();
  const theme = useCustomTheme();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-update-review"
      aria-describedby="modal-update-review-description"
      sx={{
        display: "flex",
        backgroundColor: "rgba(0,0,0,0) !important",
        overlay: {
          backgroundColor: "rgba(0,0,0,0) !important",
        },
        alignItems: "center",
        justifyContent: "center",
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0,0,0,0.3) !important",
        },
      }}
    >
      <Box
        component="form"
        sx={{
          width: { xs: "30%", sm: "50%", md: "20%" },
          height: { xs: "30%", sm: "50%", md: "35%" },
          bgcolor: theme.palette.background.primary.w248,
          borderRadius: "1rem",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
          fontFamily: "Poppins",
          outline: "none",
          padding: { xl: "1.5rem", lg: "1.5rem", sm: "1rem" },
          overflow: "auto",
        }}
      >
        <Stack
          fontFamily="Outfit"
          justifyContent="space-between"
          sx={{
            height: "100%",
          }}
          flexDirection="column"
        >
          {/* Header*/}
          <Stack
            fontWeight={600}
            sx={{ fontSize: { lg: "1.6rem", md: "1rem" } }}
          >
            Devam etmeden önce...
            <Divider
              sx={{
                marginTop: { lg: "1rem", xs: "0.5rem" },
              }}
            />
          </Stack>
          <Box
            sx={{
              fontSize: { lg: "1.2rem", md: "1rem" },
            }}
            textAlign="center"
          >
            {message}
          </Box>
          <Stack flexDirection="row" justifyContent="center">
            <Button
              onClick={onClose}
              sx={{
                marginLeft: { lg: "1rem", sm: "0.5rem" },
                color: theme.palette.tx.secondary.w600,
                fontWeight: 600,
                width: "40%",
                boxShadow: "0px 0px 20px rgba(190, 190, 190, 0.5)",
                paddingY: { lg: "0.5rem", sm: "0.6rem" },
                backgroundColor: theme.palette.tx.primary.w400,
              }}
            >
              Geri Dön
            </Button>
            <Button
              onClick={() => {
                auth.signinRedirect({ redirect_uri: window.location.href });
              }}
              sx={{
                marginLeft: { lg: "1rem", sm: "0.5rem" },
                color: theme.palette.tx.secondary.w600,
                fontWeight: 600,
                paddingX: { lg: "4rem", sm: "1rem" },
                boxShadow: "0px 0px 20px rgba(190, 190, 190, 0.5)",
                paddingY: { lg: "0.5rem", sm: "0.6rem" },
                backgroundColor: theme.palette.primary.dark,
              }}
            >
              Giriş Yap
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default NeedsLoginModal;
