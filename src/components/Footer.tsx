//import React from 'react'
import logo2 from "/src/assets/images/logo-white.png";
import "./../css/footer/Footer.css";
import { Box, Icon, Link, Stack } from "@mui/material";
import { useCustomTheme } from "../themes/Theme";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const theme = useCustomTheme();
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={{ padding: { sm: "3rem", md: "3rem", xxl: "3rem" } }}
      bgcolor={theme.palette.background.secondary.w253}
      className="footer"
    >
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ width: { sm: "90%", md: "80%", xxl: "90%" } }}
      >
        <Stack flexDirection="column" alignItems="center">
          <img
            src={logo2}
            alt="logo"
            style={{ width: "340px", height: "auto" }}
          />
          <Stack
            sx={{ marginTop: { sm: "1rem", xxl: "3rem" } }}
            gap={2}
            flexDirection="row"
          >
            <Icon
              sx={{
                height: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
                width: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
              }}
            >
              <FaInstagram
                size="100%"
                color={theme.palette.tx.secondary.w600}
              />
            </Icon>
            <Icon
              sx={{
                height: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
                width: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
              }}
            >
              <FaLinkedin size="100%" color={theme.palette.tx.secondary.w600} />
            </Icon>
            <Icon
              sx={{
                height: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
                width: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
              }}
            >
              <FaXTwitter size="100%" color={theme.palette.tx.secondary.w600} />
            </Icon>
            <Icon
              sx={{
                height: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
                width: { sm: "2rem", md: "2.4rem", xxl: "2.6rem" },
              }}
            >
              <FaYoutube size="100%" color={theme.palette.tx.secondary.w600} />
            </Icon>
          </Stack>
        </Stack>
        <Stack
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="row"
          sx={{ gap: { sm: "4rem", md: "5rem", xxl: "6rem" } }}
        >
          <Stack flexDirection="column" alignItems="flex-start">
            <Box
              color={theme.palette.tx.secondary.w400}
              sx={{ fontSize: { sm: "1.4rem", md: "1.4rem", xxl: "1.8rem" } }}
              className="footer-header"
            >
              Sahan Cepte
            </Box>
            <Stack gap={1} sx={{ marginTop: "0.5rem" }}>
              <Link
                href="/about"
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                className="footer-link"
              >
                Hakkımızda
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/contact"
                className="footer-link"
              >
                İletişim
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/privacy"
                className="footer-link"
              >
                Gizlilik Politikası
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/terms"
                className="footer-link"
              >
                Kullanım Şartları
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/faq"
                className="footer-link"
              >
                Sıkça Sorulan Sorular
              </Link>
            </Stack>
          </Stack>
          <Stack flexDirection="column" alignItems="flex-start">
            <Box
              color={theme.palette.tx.secondary.w400}
              sx={{ fontSize: { sm: "1.4rem", md: "1.4rem", xxl: "1.8rem" } }}
              className="footer-header"
            >
              Bize Ulaşın
            </Box>
            <Stack gap={1} sx={{ marginTop: "0.5rem" }}>
              <Link
                href="/about"
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                className="footer-link"
              >
                Hakkımızda
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/contact"
                className="footer-link"
              >
                İletişim
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/privacy"
                className="footer-link"
              >
                Gizlilik Politikası
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/terms"
                className="footer-link"
              >
                Kullanım Şartları
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/faq"
                className="footer-link"
              >
                Sıkça Sorulan Sorular
              </Link>
            </Stack>
          </Stack>

          <Stack flexDirection="column" alignItems="flex-start">
            <Box
              color={theme.palette.tx.secondary.w400}
              sx={{ fontSize: { sm: "1.4rem", md: "1.4rem", xxl: "1.8rem" } }}
              className="footer-header"
            >
              Ortak Ol
            </Box>
            <Stack gap={1} sx={{ marginTop: "0.5rem" }}>
              <Link
                href="/about"
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                className="footer-link"
              >
                Hakkımızda
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/contact"
                className="footer-link"
              >
                İletişim
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/privacy"
                className="footer-link"
              >
                Gizlilik Politikası
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/terms"
                className="footer-link"
              >
                Kullanım Şartları
              </Link>
              <Link
                color={theme.palette.tx.secondary.w300}
                sx={{ fontSize: { sm: "1rem", md: "1rem", xxl: "1.1rem" } }}
                href="/faq"
                className="footer-link"
              >
                Sıkça Sorulan Sorular
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
