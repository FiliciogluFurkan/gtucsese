import React, { createContext, useContext, useState, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useCustomTheme } from "@/themes/Theme";
import success from "src/assets/images/success.svg";
import error from "src/assets/images/error.svg";

// Define the types for the Snackbar context
type SnackbarContextType = (
  msg: string,
  severity?: "success" | "error" | "warning" | "info"
) => void;

// Define the props for the SnackbarProvider component
interface SnackbarProviderProps {
  children: ReactNode;
}

// Create the Snackbar context with a default value of undefined
const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

// Custom hook to use Snackbar context
export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

// SnackbarProvider component to provide the Snackbar context
export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const theme = useCustomTheme();
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  // Function to show the Snackbar
  const showSnackbar: SnackbarContextType = (msg, severity = "success") => {
    setMessage(msg);
    setSeverity(severity);
    setOpen(true);
  };

  // Function to close the Snackbar
  const handleClose = () => {
    setOpen(false);
  };

  if (severity === "success") {
    return (
      <SnackbarContext.Provider value={showSnackbar}>
        {children}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            slots={{
              closeIcon: () => (
                <img style={{ width: "24px", height: "24px" }} src={success} />
              ),
            }}
            icon={false}
            closeText=""
            sx={{
              backgroundColor: theme.palette.background.primary.w250,
              borderRadius: "0.4rem",
              borderWidth: "2px",
              fontWeight: 500,
              borderColor: "rgba(204, 204, 204, 0.35)",
              fontFamily: "Outfit",
              paddingX: "2rem",
              display: "flex",
              alignItems: "center",
              color: theme.palette.tx.primary.w500,
            }}
            elevation={6}
            variant="outlined"
            onClose={handleClose}
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </SnackbarContext.Provider>
    );
  }

  if (severity === "error") {
    return (
      <SnackbarContext.Provider value={showSnackbar}>
        {children}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            slots={{
              closeIcon: () => (
                <img style={{ width: "24px", height: "24px" }} src={error} />
              ),
            }}
            icon={false}
            closeText=""
            sx={{
              backgroundColor: theme.palette.background.primary.w250,
              borderRadius: "0.4rem",
              borderColor: "rgba(204, 204, 204, 0.35)",
              borderWidth: "1px",
              fontWeight: 500,
              fontFamily: "Outfit",
              paddingX: "2rem",
              display: "flex",
              alignItems: "center",
              color: "rgb(99, 11, 11)",
            }}
            elevation={6}
            variant="outlined"
            onClose={handleClose}
          >
            {message}
          </MuiAlert>
        </Snackbar>
      </SnackbarContext.Provider>
    );
  }

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose}>
          {message}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
