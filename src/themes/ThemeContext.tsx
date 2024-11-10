// src/TealThemeContext.tsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { lightTheme, darkTheme } from "./Theme"; // Adjust the import according to your theme file structure
import { ThemeProvider } from "@mui/material/styles";

// Define the context type
interface TealThemeContextType {
  toggleTheme: () => void;
}

// Create the context with a default value of undefined
const TealThemeContext = createContext<TealThemeContextType | undefined>(
  undefined
);

interface AppThemeProviderProps {
  children: ReactNode;
}

// AppThemeProvider component
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const currentTheme = mode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ toggleTheme }), [toggleTheme]);

  return (
    <TealThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </TealThemeContext.Provider>
  );
};

// Custom hook to use the Teal theme context
export const useTealTheme = (): TealThemeContextType => {
  const context = useContext(TealThemeContext);
  if (!context) {
    throw new Error("useTealTheme must be used within a AppThemeProvider");
  }
  return context;
};
