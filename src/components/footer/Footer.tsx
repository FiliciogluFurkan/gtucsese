import logo2 from "src/assets/images/logo-white.png";
import "src/components/footer/Footer.css";
import {
  Box,
  Link,
  Stack,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import { useCustomTheme } from "src/themes/Theme";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const theme = useCustomTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.secondary.w253,
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          {/* Üst Kısım - Logo ve Sosyal Medya */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <img
              src={logo2}
              alt="logo"
              style={{
                width: "150px",
                height: "auto",
              }}
            />

            {/* Sosyal Medya İkonları */}
            <Stack direction="row" spacing={2}>
              {[
                { icon: <FaInstagram size={24} />, link: "#" },
                { icon: <FaLinkedin size={24} />, link: "#" },
                { icon: <FaXTwitter size={24} />, link: "#" },
                { icon: <FaYoutube size={24} />, link: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  sx={{
                    color: theme.palette.tx.secondary.w600,
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      color: theme.palette.tx.secondary.w300,
                      transform: "scale(1.2)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* Alt Kısım - Linkler */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", sm: "flex-start" }}
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.tx.secondary.w400,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                fontWeight: 500,
              }}
            >
              Sahan Cepte
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 4 }}
              alignItems={{ xs: "center", sm: "flex-start" }}
            >
              {[
                { text: "Hakkımızda", href: "/hakkimizda" },
                { text: "İletişim", href: "/iletisim" },
                { text: "Gizlilik Politikası", href: "/gizlilik" },
                { text: "Kullanım Şartları", href: "/sartlar" },
                { text: "Sıkça Sorulan Sorular", href: "/sik-sorulan-sorular" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: theme.palette.tx.secondary.w300,
                    textDecoration: "none",
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    "&:hover": {
                      color: theme.palette.tx.secondary.w600,
                      textDecoration: "none",
                      transform: "translateY(-2px)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Stack>

          {/* Telif Hakkı */}
          <Typography
            variant="body2"
            align="center"
            sx={{
              color: theme.palette.tx.secondary.w300,
              fontSize: "0.75rem",
              mt: 3,
            }}
          >
            © {new Date().getFullYear()} Sahan Cepte. Tüm hakları saklıdır.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
