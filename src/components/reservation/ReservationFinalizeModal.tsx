import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Rating,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { useCustomTheme } from "@/themes/Theme";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineCalendar } from "react-icons/hi2";

import { LuClock } from "react-icons/lu";
import { Court } from "@/interfaces/Court";
import { Facility } from "@/interfaces/Facility";
import { IoCalendarClearOutline } from "react-icons/io5";

interface ReservationFinalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  facility: Facility;
  courts: Court[];
  initialCourt: Court;
  initialDate: Date;
  initialHour: number;
  handleMakeReservation: (court: Court, date: Date, hour: number) => void;
}

const ReservationFinalizeModal = ({
  isOpen,
  onClose,
  facility,
  courts,
  initialCourt,
  initialDate,
  initialHour,
  handleMakeReservation,
}: ReservationFinalizeModalProps): JSX.Element => {
  const theme = useCustomTheme();

  const [selectedCourt, setSelectedCourt] = useState<Court>(initialCourt);
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
  const [selectedHour, setSelectedHour] = useState<number>(initialHour);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-update-review"
      aria-describedby="modal-update-review-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          width: { xs: "90%", sm: "60%", md: "50%" },
          bgcolor: theme.palette.background.primary.w248,
          borderRadius: "3rem",
          boxShadow: 24,
          fontFamily: "Poppins",
          outline: "none",
          padding: { xl: "3rem", lg: "1.5rem", sm: "1rem" },
          overflow: "auto",
        }}
      >
        <Stack flexDirection="column">
          {/* Header */}
          <Stack flexDirection="row" justifyContent="space-between">
            <Box
              sx={{
                fontSize: { lg: "1.8rem", md: "1.25rem", sm: "1rem" },
                fontWeight: 600,
              }}
            >
              REZERVASYON ONAYI
            </Box>

            <Stack alignItems="flex-end">
              <Box
                sx={{
                  fontSize: { lg: "1.2rem", md: "1rem", sm: "0.9rem" },
                  fontWeight: 400,
                }}
              >
                {facility.name}
              </Box>
              <Box
                sx={{
                  color: theme.palette.tx.primary.w100,
                }}
              >
                {facility.city}/{facility.district}
              </Box>
            </Stack>
          </Stack>
          <Divider sx={{ marginTop: { lg: "1rem", xs: "0.5rem" } }} />
          <Stack
            sx={{ marginTop: { lg: "2rem", xs: "1rem" } }}
            flexDirection="row"
          >
            {/* Court Information */}
            <Stack>
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { lg: "1.6rem", md: "1rem", sm: "0.9rem" },
                  fontWeight: 600,
                  paddingLeft: { lg: "1rem", sm: "0.6rem" },
                }}
              >
                Rezervasyon Bilgileri
              </Box>
              {/* Info Boxes */}
              <Stack sx={{ marginTop: { lg: "2rem", xs: "1rem" } }} gap={2}>
                <Stack
                  sx={{
                    justifyContent: "center",
                    borderRadius: "1.5rem",
                    width: {
                      xl: "24rem",
                      lg: "20rem",
                      md: "18rem",
                      sm: "16rem",
                    },
                    padding: {
                      xl: "1.2rem",
                      md: "0.6rem",
                      sm: "0.4rem",
                    },
                    /* paddingTop: {
                      xl: "3rem",
                      md: "1rem",
                      sm: "0.5rem",
                    }, */
                    boxShadow: "0px 10px 20px rgba(100, 100, 100, 0.2)",
                    height: {
                      xl: "11rem",
                      lg: "8rem",
                      md: "7rem",
                      sm: "5rem",
                    },
                  }}
                  bgcolor={theme.palette.background.primary.w253}
                >
                  <HiOutlineCalendar
                    color="rgb(150
                  150
                  150)"
                    size={24}
                  />
                  <Box
                    sx={{
                      marginTop: { lg: "0.5rem", xs: "0.5rem" },
                      fontSize: { lg: "1rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w100,
                      fontWeight: 300,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    Gün
                  </Box>
                  <Box
                    sx={{
                      marginTop: { lg: "0.2rem", xs: "0.1rem" },
                      fontFamily: "Poppins",
                      fontSize: { lg: "1.3rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w600,
                      fontWeight: 600,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    Perşembe, Ocak 2
                  </Box>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "center",
                    borderRadius: "1.5rem",
                    width: {
                      xl: "24rem",
                      lg: "20rem",
                      md: "18rem",
                      sm: "16rem",
                    },
                    padding: {
                      xl: "1.2rem",
                      md: "0.6rem",
                      sm: "0.4rem",
                    },
                    /* paddingTop: {
                      xl: "3rem",
                      md: "1rem",
                      sm: "0.5rem",
                    }, */
                    boxShadow: "0px 10px 20px rgba(100, 100, 100, 0.2)",
                    height: {
                      xl: "11rem",
                      lg: "8rem",
                      md: "7rem",
                      sm: "5rem",
                    },
                  }}
                  bgcolor={theme.palette.background.primary.w253}
                >
                  <LuClock
                    color="rgb(150
                  150
                  150)"
                    size={24}
                  />
                  <Box
                    sx={{
                      marginTop: { lg: "0.5rem", xs: "0.5rem" },
                      fontSize: { lg: "1rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w100,
                      fontWeight: 300,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    Saat
                  </Box>
                  <Box
                    sx={{
                      marginTop: { lg: "0.2rem", xs: "0.1rem" },
                      fontSize: { lg: "1.3rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w600,
                      fontWeight: 600,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    9:00 - 10:00
                  </Box>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "center",
                    borderRadius: "1.5rem",
                    width: {
                      xl: "24rem",
                      lg: "20rem",
                      md: "18rem",
                      sm: "16rem",
                    },
                    padding: {
                      xl: "1.2rem",
                      md: "0.6rem",
                      sm: "0.4rem",
                    },
                    /* paddingTop: {
                      xl: "3rem",
                      md: "1rem",
                      sm: "0.5rem",
                    }, */
                    boxShadow: "0px 10px 20px rgba(100, 100, 100, 0.2)",
                    height: {
                      xl: "11rem",
                      lg: "8rem",
                      md: "7rem",
                      sm: "5rem",
                    },
                  }}
                  bgcolor={theme.palette.background.primary.w253}
                >
                  <LuClock
                    color="rgb(150
                  150
                  150)"
                    size={24}
                  />
                  <Box
                    sx={{
                      marginTop: { lg: "0.5rem", xs: "0.5rem" },
                      fontSize: { lg: "1rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w100,
                      fontWeight: 300,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    Saat
                  </Box>
                  <Box
                    sx={{
                      marginTop: { lg: "0.2rem", xs: "0.1rem" },
                      fontSize: { lg: "1.3rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w600,
                      fontWeight: 600,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    9:00 - 10:00
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            {/* Date, Court Selection */}
            <Stack></Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ReservationFinalizeModal;
