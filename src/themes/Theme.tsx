// src/theme.ts
import { createTheme, useTheme } from "@mui/material/styles";
import { Theme, ThemeOptions } from "@mui/material/styles";
import { Palette } from "@mui/material/styles/createPalette";

interface IPalette extends Palette {
  primary: {
    light: string;
    main: string;
    dark: string;
    dark100: string;
    dark200: string;
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
    primary: {
      w253: string;
      w250: string;
      w248: string;
      w245: string;
      w240: string;
    };
    secondary: {
      w253: string;
      w250: string;
      w248: string;
      w245: string;
      w240: string;
    };
  };
  tx: {
    primary: {
      w100: string;
      w200: string;
      w300: string;
      w400: string;
      w500: string;
      w600: string;
    };
    secondary: {
      w100: string;
      w200: string;
      w300: string;
      w400: string;
      w500: string;
      w600: string;
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
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}

const getThemeColors = (mode: "light" | "dark"): IPalette =>
  ({
    primary: {
      main: mode === "light" ? "rgb(105 209 105)" : "#90caf9", // Light: blue, Dark: light blue
      light: mode === "light" ? "rgb(133 231 133)" : "#90caf9", // Light: light blue, Dark: light blue
      dark: mode === "light" ? "rgb(70 153 70)" : "#90caf9",
      dark100: mode === "light" ? "#004ba0" : "#90caf9",
      dark200: mode === "light" ? "#004ba0" : "#90caf9",
      contrastText: mode === "light" ? "#fff" : "#000", // Light: white, Dark: black
    },
    secondary: {
      main: mode === "light" ? "#dc004e" : "#f48fb1", // Light: pink, Dark: light pink
      light: mode === "light" ? "#e33371" : "#f48fb1", // Light: light pink, Dark: light pink
      dark: mode === "light" ? "rgb(57 119 33)" : "#f48fb1", // Light: dark pink, Dark: light pink
      contrastText: mode === "light" ? "#fff" : "#000", // Light: white, Dark: black
    },
    background: {
      default: mode === "light" ? "#rgb(250)" : "#121212", // Light: white, Dark: black
      paper: mode === "light" ? "#rgb(253)" : "#121212", // Light: white, Dark: black
      primary: {
        w253: mode === "light" ? "rgb(253,253,253)" : "rgb(20,20,20)",
        w250: mode === "light" ? "rgb(250,250,250)" : "rgb(30,30,30)",
        w248: mode === "light" ? "rgb(248,248,248)" : "rgb(40,40,40)",
        w245: mode === "light" ? "rgb(245,245,245)" : "rgb(60,60,60)",
        w240: mode === "light" ? "rgb(240,240,240)" : "rgb(80,80,80)",
      },
      secondary: {
        w253: mode === "light" ? "rgb(20,20,20)" : "rgb(253,253,253)",
        w250: mode === "light" ? "rgb(30,30,30)" : "rgb(250,250,250)",
        w248: mode === "light" ? "rgb(40,40,40)" : "rgb(248,248,248)",
        w245: mode === "light" ? "rgb(60,60,60)" : "rgb(245,245,245)",
        w240: mode === "light" ? "rgb(80,80,80)" : "rgb(240,240,240)",
      },
    },
    tx: {
      primary: {
        w100: mode === "light" ? "rgb(130,130,130)" : "rgb(210,210,210)", // Light: gray, Dark: light gray
        w200: mode === "light" ? "rgb(90,90,90)" : "rgb(220,220,220)", // Light: light gray, Dark: gray
        w300: mode === "light" ? "rgb(70,70,70)" : "rgb(236,236,236)", // Light: light gray, Dark: gray
        w400: mode === "light" ? "rgb(40,40,40)" : "rgb(242,242,242)", // Light: light gray, Dark: black
        w500: mode === "light" ? "rgb(20,20,20)" : "rgb(248,248,248)", // Light: light gray, Dark: gray
        w600: mode === "light" ? "rgb(10,10,10)" : "rgb(252,252,252)", // Light: light gray, Dark: black
      },
      secondary: {
        w100: mode === "light" ? "rgb(210,210,210)" : "rgb(130,130,130)",
        w200: mode === "light" ? "rgb(220,220,220)" : "rgb(90,90,90)",
        w300: mode === "light" ? "rgb(236,236,236)" : "rgb(70,70,70)",
        w400: mode === "light" ? "rgb(242,242,242)" : "rgb(40,40,40)",
        w500: mode === "light" ? "rgb(248,248,248)" : "rgb(20,20,20)",
        w600: mode === "light" ? "rgb(252,252,252)" : "rgb(10,10,10)",
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
  breakpoints: {
    values: {
      xs: 360,
      sm: 540,
      md: 900,
      lg: 1200,
      xl: 1536,
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
