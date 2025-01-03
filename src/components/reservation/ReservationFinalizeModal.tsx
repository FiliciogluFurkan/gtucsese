import { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Button,
  Stack,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useCustomTheme } from "@/themes/Theme";
import { HiOutlineCalendar } from "react-icons/hi2";

import { LuClock } from "react-icons/lu";
import { Court } from "@/interfaces/Court";
import { Facility } from "@/interfaces/Facility";
import { useSearchParams } from "react-router-dom";
import { TimeSlotStatus } from "@/interfaces/TimeSlot";
import {
  getDayString,
  getFormattedDate,
  getMonthString,
  prettyHour,
} from "@/services/TimeServices";
import axios from "axios";

interface ReservationFinalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  facility: Facility;
  courts: Court[];
  selectedCourt: Court;
  selectedDate: Date;
  selectedHour: number;
  setSelectedCourt: (court: Court) => void;
  setSelectedHour: (hour: number) => void;
  handleMakeReservation: (court: Court, date: Date, hour: number) => void;
}

const ReservationFinalizeModal = ({
  isOpen,
  onClose,
  facility,
  courts,
  selectedCourt,
  selectedDate,
  selectedHour,
  setSelectedCourt,
  setSelectedHour,
  handleMakeReservation,
}: ReservationFinalizeModalProps): JSX.Element => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const theme = useCustomTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [timeSlots, setTimeSlots] = useState<TimeSlotStatus[]>([]);
  const [isReservationLoading, setIsReservationLoading] = useState(false);

  const fetchTimeSlots = async (date: string, courtId: string) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/api/v1/reservations/slots/${courtId}/${date}`,
      });
      // Handle the response here
      setTimeSlots(response.data["timeSlots"]);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching data:", error);
    }
  };

  const updateSearchParams = (court: Court, date: Date, hour: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("courtId", court.id.toString());
    newParams.set("date", date.toISOString());
    newParams.set("hour", hour.toString());
    setSearchParams(newParams, { replace: true });
  };

  useEffect(() => {
    const date = getFormattedDate(selectedDate);
    if (selectedCourt) fetchTimeSlots(date, selectedCourt?.id || "");
  }, [selectedCourt, selectedDate]);

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
          width: { xs: "90%", sm: "60%", md: "80%", lg: "60%", xl: "50%" },
          bgcolor: theme.palette.background.primary.w248,
          borderRadius: "3rem",
          boxShadow: 24,
          fontFamily: "Poppins",
          outline: "none",
          padding: { xl: "4rem", lg: "3rem", sm: "2rem" },
          overflow: "auto",
        }}
      >
        <Stack flexDirection="column">
          {/* Header */}
          <Stack flexDirection="row" justifyContent="space-between">
            <Box
              sx={{
                fontSize: {
                  xl: "1.8rem",
                  lg: "1.5rem",
                  md: "1.25rem",
                  sm: "1rem",
                },
                fontWeight: 600,
              }}
            >
              REZERVASYON ONAYI
            </Box>

            <Stack alignItems="flex-end">
              <Box
                sx={{
                  fontSize: {
                    xl: "1.2rem",
                    lg: "1rem",
                    md: "1rem",
                    sm: "0.9rem",
                  },
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
          <Divider
            sx={{ marginTop: { xl: "1rem", lg: "0.5rem", xs: "0.5rem" } }}
          />
          {/* Content Box*/}
          <Stack
            sx={{ marginTop: { xl: "2rem", lg: "1.3rem", xs: "1rem" } }}
            flexDirection="row"
          >
            {/* Court Information */}
            <Stack>
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xl: "1.6rem",
                    lg: "1.3rem",
                    md: "1rem",
                    sm: "0.9rem",
                  },
                  fontWeight: 600,
                  paddingLeft: { xl: "1rem", lg: "0.7rem", sm: "0.5rem" },
                }}
              >
                Rezervasyon Bilgileri
              </Box>
              {/* Info Boxes */}
              <Stack
                fontFamily="Outfit"
                sx={{ marginTop: { xl: "2rem", lg: "1.5rem", xs: "1rem" } }}
                gap={2}
              >
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
                    boxShadow: "0px 0px 12px rgba(190, 190, 190, 0.2)",
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
                      marginTop: { xl: "0.5rem", lg: "0.3rem", xs: "0.2rem" },
                      fontSize: { lg: "1rem", md: "0.9rem", sm: "0.8rem" },
                      color: theme.palette.tx.primary.w100,
                      fontWeight: 300,
                      paddingLeft: {
                        xl: "1rem",
                        lg: "0.8rem",
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
                      fontSize: {
                        xl: "1.3rem",
                        lg: "1rem",
                        md: "0.9rem",
                        sm: "0.8rem",
                      },
                      color: theme.palette.tx.primary.w600,
                      fontWeight: 600,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    {getDayString(selectedDate.getUTCDay())},{" "}
                    {getMonthString(selectedDate.getUTCMonth())}{" "}
                    {selectedDate.getUTCDate()}
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
                    boxShadow: "0px 0px 12px rgba(190, 190, 190, 0.2)",
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
                      fontSize: {
                        xl: "1.3rem",
                        lg: "1rem",
                        md: "0.9rem",
                        sm: "0.8rem",
                      },
                      color: theme.palette.tx.primary.w600,
                      fontWeight: 600,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    {selectedHour === -1
                      ? "Saat Seçilmedi"
                      : `${prettyHour(selectedHour)} - ${prettyHour(
                          selectedHour + 1
                        )}`}
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
                      xl: "0.5rem",
                      md: "0.3rem",
                      sm: "0.2rem",
                    },
                    paddingX: {
                      xl: "1rem",
                      lg: "0.8rem",
                      md: "0.7rem",
                      sm: "0.8rem",
                    },

                    boxShadow: "0px 0px 12px rgba(190, 190, 190, 0.2)",
                    height: {
                      xl: "12rem",
                      lg: "10rem",
                      md: "10rem",
                      sm: "5rem",
                    },
                  }}
                  bgcolor={theme.palette.background.primary.w253}
                >
                  <Box
                    sx={{
                      marginTop: { lg: "0.5rem", xs: "0.5rem" },
                      fontSize: {
                        xl: "1.3rem",
                        lg: "1rem",
                        md: "0.9rem",
                        sm: "0.8rem",
                      },
                      color: theme.palette.tx.primary.w100,
                      fontWeight: 300,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    Saha
                  </Box>
                  <Box
                    sx={{
                      marginTop: { lg: "0.4rem", xs: "0.3rem" },
                      fontSize: {
                        xl: "1.3rem",
                        lg: "1rem",
                        md: "1rem",
                        sm: "0.8rem",
                      },
                      color: theme.palette.tx.primary.w500,
                      fontWeight: 600,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    {selectedCourt.name}
                  </Box>
                  <Divider
                    sx={{
                      marginX: "0.5rem",
                      marginTop: { xl: "0.5rem", lg: "0.3rem", xs: "0.2rem" },
                    }}
                  />
                  <Stack
                    sx={{
                      marginTop: { xl: "1rem", lg: "0.5rem", xs: "0.1rem" },
                      fontSize: {
                        xl: "1rem",
                        lg: "0.9rem",
                        md: "0.9rem",
                        sm: "0.8rem",
                      },
                      color: theme.palette.tx.primary.w100,
                      fontFamily: "Outfit",
                      fontWeight: 300,
                      paddingLeft: {
                        xl: "1rem",
                        md: "0.6rem",
                        sm: "0.4rem",
                      },
                    }}
                  >
                    <Stack flexDirection="row" justifyContent="space-between">
                      <Box>Fiyat:</Box>
                      <Box>{selectedCourt.price}₺/Saat</Box>
                    </Stack>
                    <Stack flexDirection="row" justifyContent="space-between">
                      <Box>Boyut:</Box>
                      <Box>
                        {selectedCourt.height} x {selectedCourt.width} m
                      </Box>
                    </Stack>
                    <Stack flexDirection="row" justifyContent="space-between">
                      <Box>Kapasite:</Box>
                      <Box>{selectedCourt.capacity} Kişi</Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Divider
              sx={{
                minHeight: "100% !important",
                height: "auto",
                marginLeft: { xl: "3rem", lg: "2rem", sm: "1rem" },
                bgcolor: "rgb(250,250,250)",
                marginTop: { xl: "4rem", lg: "3rem", xs: "1rem" },
              }}
              orientation="vertical"
            />

            {/* Date, Court Selection */}
            {/* Court Information */}
            <Stack
              sx={{
                paddingLeft: { xl: "1.5rem", lg: "1rem", sm: "0.6rem" },
                fontFamily: "Outfit",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xl: "1.3rem",
                    lg: "1.1rem",
                    md: "1rem",
                    sm: "0.9rem",
                  },
                  fontWeight: 600,
                }}
              >
                Saha Seçimi
              </Box>
              {/* Pick Court */}
              <Stack
                fontFamily="Outfit"
                sx={{ marginTop: { xl: "2rem", lg: "1rem", xs: "1rem" } }}
                flexDirection="row"
                flexWrap="wrap"
                fontWeight={300}
                gap={1}
              >
                {courts.map((court) => {
                  if (court.id === selectedCourt.id) {
                    return (
                      <Button
                        variant="contained"
                        key={court.id}
                        sx={{
                          padding: "0.8rem",
                          fontWeight: 500,
                          fontSize: {
                            xl: "0.9rem",
                            lg: "0.8rem",
                            md: "0.9rem",
                            sm: "0.8rem",
                          },
                          borderRadius: "0.5rem",
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.tx.secondary.w600,
                        }}
                        onClick={() => setSelectedCourt(court)}
                      >
                        {court.name}
                      </Button>
                    );
                  }
                  return (
                    <Button
                      sx={{
                        padding: "0.8rem",
                        borderRadius: "0.5rem",
                        fontWeight: 400,
                        fontSize: {
                          xl: "0.9rem",
                          lg: "0.8rem",
                          md: "0.9rem",
                          sm: "0.8rem",
                        },
                        transition: "0.2s",
                        backgroundColor: theme.palette.background.primary.w240,
                        color: theme.palette.tx.primary.w500,
                      }}
                      onClick={() => {
                        updateSearchParams(court, selectedDate, selectedHour);
                        setSelectedCourt(court);
                      }}
                      variant="contained"
                      key={court.id}
                    >
                      {court.name}
                    </Button>
                  );
                })}
              </Stack>
              {/* Pick Date */}
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xl: "1.4rem",
                    lg: "1.1rem",
                    md: "1rem",
                    sm: "0.9rem",
                  },
                  marginTop: { xl: "2rem", lg: "1.4rem", xs: "1rem" },
                  fontWeight: 600,
                }}
              >
                Saat Seçimi
              </Box>
              <Stack
                flexDirection="row"
                flexWrap="wrap"
                sx={{ marginTop: { xl: "1rem", lg: "0.8rem", xs: "0.5rem" } }}
              >
                {timeSlots.map((slot, index) => (
                  <TimeSlotRich
                    isSelected={selectedHour === index}
                    key={slot + index}
                    status={slot}
                    setSelectedTimeSlot={setSelectedHour}
                    hour={index}
                  />
                ))}
              </Stack>
              {/* Make Reservation Button */}
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  marginTop: { xl: "2rem", lg: "1.5rem", xs: "1rem" },
                }}
                flexDirection="row"
              >
                <Button
                  onClick={onClose}
                  sx={{
                    color: "rgb(43, 43, 43)",
                    fontWeight: 600,
                    border: "1.5px solid rgb(200, 200, 200)",
                    borderRadius: "0.5rem",
                    width: "40%",
                    boxShadow: "0px 8px 12px rgba(190, 190, 190, 0.2)",
                    paddingY: { lg: "0.5rem", sm: "0.6rem" },
                    backgroundColor: theme.palette.background.primary.w253,
                  }}
                >
                  İptal
                </Button>
                {!isReservationLoading ? (
                  <Button
                    onClick={() => {
                      setIsReservationLoading(true);
                      handleMakeReservation(
                        selectedCourt,
                        selectedDate,
                        selectedHour
                      );
                      setIsReservationLoading(false);
                      onClose();
                    }}
                    sx={{
                      marginLeft: { lg: "1rem", sm: "0.5rem" },
                      color: theme.palette.tx.secondary.w600,
                      fontWeight: 600,
                      borderRadius: "0.5rem",
                      width: "40%",
                      boxShadow: "0px 0px 20px rgba(190, 190, 190, 0.5)",
                      paddingY: { lg: "0.5rem", sm: "0.6rem" },
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    Rezervasyon Yap
                  </Button>
                ) : (
                  <CircularProgress
                    sx={{
                      marginLeft: { xl: "6rem", lg: "1rem" },
                      height: "2rem !important",
                      width: "2rem !important",
                    }}
                  />
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

interface TimeSlotRichProps {
  status: TimeSlotStatus;
  hour: number;
  isSelected: boolean;
  setSelectedTimeSlot: (index: number) => void;
}

const TimeSlotRich = ({
  status,
  hour,
  isSelected,
  setSelectedTimeSlot,
}: TimeSlotRichProps): JSX.Element => {
  const theme = useCustomTheme();
  const selectBackground = (status: TimeSlotStatus) => {
    switch (status) {
      case TimeSlotStatus.PAST_TIME:
        return "rgb(220,220,220)";
      case TimeSlotStatus.CLOSED:
        return "rgb(230,230,230)";
    }
  };

  if (isSelected) {
    return (
      <Button
        sx={{
          width: { lg: "11%", xs: "23%" },
          marginX: { lg: "7%", xs: "1%" },
          marginY: { lg: "1%", xs: "1%" },
          color: "rgb(0,0,0)",
          display: "flex",
          flexDirection: "column",
          fontWeight: "300",
          borderRadius: "5rem",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "0 !important",
          height: { xl: "3.6rem", lg: "3.6rem", xs: "3rem" },
          fontSize: { xl: "0.8rem", xs: "0.8rem" },
          paddingY: { xl: "0.6rem", lg: "0.5rem" },
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Box>{prettyHour(hour)}</Box>
        <Box>{prettyHour(hour + 1)}</Box>
      </Button>
    );
  } else {
    // TODO: Implement a better swith case solution for this
    if (status === TimeSlotStatus.AVAILABLE) {
      return (
        <Button
          onClick={() => {
            setSelectedTimeSlot(hour);
          }}
          sx={{
            width: { lg: "11%", xs: "23%" },
            marginX: { lg: "7%", xs: "1%" },
            marginY: { lg: "1%", xs: "1%" },
            color: "rgb(0,0,0)",
            display: "flex",
            flexDirection: "column",
            fontWeight: "300",
            borderRadius: "5rem",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "0 !important",
            height: { xl: "3.6rem", lg: "3rem", xs: "3rem" },
            fontSize: { xl: "0.8rem", xs: "0.8rem" },
            paddingY: { xs: "0.6rem" },
            bgcolor: selectBackground(status),
          }}
        >
          <Box>{prettyHour(hour)}</Box>
          <Box>{prettyHour(hour + 1)}</Box>
        </Button>
      );
    }
    return (
      <Button
        sx={{
          width: { lg: "11%", xs: "23%" },
          marginX: { lg: "7%", xs: "1%" },
          marginY: { lg: "1%", xs: "1%" },
          color: "black",
          display: "flex",
          flexDirection: "column",
          fontWeight: "300",
          borderRadius: "5rem",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "0 !important",
          height: { xl: "3.6rem", lg: "3.6rem", xs: "3rem" },
          fontSize: { xl: "0.8rem", xs: "0.8rem" },
          paddingY: { xs: "0.6rem" },
        }}
        disabled
      >
        <Box>{prettyHour(hour)}</Box>
        <Box>{prettyHour(hour + 1)}</Box>
      </Button>
    );
  }
};

export default ReservationFinalizeModal;
