import React, { createContext, useContext, useState, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={severity}
          onClose={handleClose}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
