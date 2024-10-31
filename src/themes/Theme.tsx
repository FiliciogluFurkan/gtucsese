// src/theme.ts
import { createTheme } from "@mui/material/styles";

const getThemeColors = (mode: "light" | "dark") => ({
  primary: {
    main: mode === "light" ? "#1976d2" : "#90caf9", // Light: blue, Dark: light blue
  },
  secondary: {
    main: mode === "light" ? "#dc004e" : "#f48fb1", // Light: pink, Dark: light pink
  },
  background: {
    default: mode === "light" ? "#fff" : "#121212", // Light: white, Dark: black
    paper: mode === "light" ? "#f5f5f5" : "rgb(0,0,0)", // Light: light gray, Dark: dark gray
  },
  text: {
    primary: mode === "light" ? "rgb(40, 40, 40, 1)" : "#fff",
    secondary: mode === "light" ? "rgb(100, 100, 100, 1)" : "#fff",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...getThemeColors("light"),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...getThemeColors("dark"),
  },
});

export { lightTheme, darkTheme };
