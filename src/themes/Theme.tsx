// src/theme.ts
import { createTheme, PaletteOptions, useTheme } from "@mui/material/styles";
import { Theme, ThemeOptions } from "@mui/material/styles";
import { Palette } from "@mui/material/styles/createPalette";

interface IPalette extends Palette {
  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  background: {
    default: string;
    paper: string;
    w253: string;
    w250: string;
    w248: string;
    w245: string;
    w240: string;
  };
  tx: {
    primary: {
      w100: string;
      w200: string;
      w300: string;
      w400: string;
    };
    secondary: {
      w100: string;
      w200: string;
      w300: string;
      w400: string;
    };
  };
  common: {
    black: string;
    white: string;
    transparent: string;
  };
  border: {
    g240: string;
  };
}

interface ITheme extends Theme {
  palette: IPalette;
}

interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
  typography: {
    button: {
      textTransform: "none";
    };
  };
}

const getThemeColors = (mode: "light" | "dark"): IPalette =>
  ({
    primary: {
      main: mode === "light" ? "#1976d2" : "#90caf9", // Light: blue, Dark: light blue
      light: mode === "light" ? "#63a4ff" : "#90caf9", // Light: light blue, Dark: light blue
      dark: mode === "light" ? "#004ba0" : "#90caf9", // Light: dark blue, Dark: light blue
      contrastText: mode === "light" ? "#fff" : "#000", // Light: white, Dark: black
    },
    secondary: {
      main: mode === "light" ? "#dc004e" : "#f48fb1", // Light: pink, Dark: light pink
      light: mode === "light" ? "#e33371" : "#f48fb1", // Light: light pink, Dark: light pink
      dark: mode === "light" ? "#9a0036" : "#f48fb1", // Light: dark pink, Dark: light pink
      contrastText: mode === "light" ? "#fff" : "#000", // Light: white, Dark: black
    },
    background: {
      default: mode === "light" ? "#rgb(250)" : "#121212", // Light: white, Dark: black
      paper: mode === "light" ? "#rgb(253)" : "#121212", // Light: white, Dark: black
      w253: mode === "light" ? "rgb(253,253,253)" : "#121212", // Light: white, Dark: black
      w250: mode === "light" ? "rgb(250,250,250)" : "rgb(60,60,60)", // Light: white, Dark: black
      w248: mode === "light" ? "rgb(248,248,248)" : "rgb(0,0,0)", // Light: light gray, Dark: dark gray
      w245: mode === "light" ? "rgb(245,245,245)" : "rgb(0,0,0)", // Light: light gray, Dark: dark gray
      w240: mode === "light" ? "rgb(240,240,240)" : "rgb(20,20,20)", // Light: light gray, Dark: dark gray
    },
    tx: {
      primary: {
        w100: mode === "light" ? "rgb(60,60,60)" : "rgb(230,230,230)", // Light: gray, Dark: light gray
        w200: mode === "light" ? "rgb(50,50,50)" : "rgb(240,240,240)", // Light: light gray, Dark: gray
        w300: mode === "light" ? "rgb(40,40,40)" : "rgb(248,248,248)", // Light: light gray, Dark: gray
        w400: mode === "light" ? "rgb(20,20,20)" : "rgb(252,252,252)", // Light: light gray, Dark: black
      },
      secondary: {
        w100: mode === "light" ? "rgb(230,230,230)" : "rgb(60,60,60)",
        w200: mode === "light" ? "rgb(240,240,240)" : "rgb(50,50,50)",
        w300: mode === "light" ? "rgb(248,248,248)" : "rgb(40,40,40)",
        w400: mode === "light" ? "rgb(252,252,252)" : "rgb(20,20,20)",
      },
    },
    common: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
    },
    border: {
      g240: mode === "light" ? "rgb(240, 240, 240)" : "rgb(40, 40, 40)",
    },
  } as IPalette);

const lightTheme = createTheme({
  palette: {
    ...getThemeColors("light"),
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
} as IThemeOptions);

const darkTheme = createTheme({
  palette: {
    ...getThemeColors("dark"),
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
} as IThemeOptions);

export { lightTheme, darkTheme };

const useCustomTheme = () => {
  return useTheme() as ITheme;
};

export { useCustomTheme };
