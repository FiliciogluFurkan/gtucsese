import { Box, Button, Divider, Stack } from "@mui/material";
import { TimeSlotStatus } from "@/interfaces/TimeSlot";
import {
  getDayString,
  getFormattedDate,
  prettyHour,
} from "@/services/TimeServices";

import { useEffect, useState } from "react";
import { Court } from "@/interfaces/Court";
import axios from "axios";
import ReservationFinalizeModal from "./ReservationFinalizeModal";
import { Facility } from "@/interfaces/Facility";
import { useSearchParams } from "react-router-dom";
import NeedsLoginModal from "../needs-login/NeedsLogin";
import { useAuthWithRoles } from "@/hooks/UseAuthWithRoles";
import { useCustomTheme } from "@/themes/Theme";
import PickerWithButtonField from "../date-picker-button/DatePickerButton";

interface ReservationProps {
  facility: Facility;
  courts: Court[];
  handleMakeReservation: (court: Court, date: Date, hour: number) => void;
}

const Reservation = ({
  facility,
  courts,
  handleMakeReservation,
}: ReservationProps): JSX.Element => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [searchParams, setSearchParams] = useSearchParams();
  const auth = useAuthWithRoles();
  const [timeSlots, setTimeSlots] = useState<TimeSlotStatus[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(-1);
  const [isNeedsLoginModalOpen, setIsNeedsLoginModalOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const theme = useCustomTheme();
  const onDatePickerClose = () => {
    setDatePickerOpen(false);
  };
  const closeNeedsLoginModal = () => {
    setIsNeedsLoginModalOpen(false);
  };
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(() => {
    if (courts.length > 0) {
      return courts[0];
    }
    console.log("No courts found", courts);
    return null;
  });

  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const date = new Date();
    date.setHours(date.getHours());
    return date;
  });

  const [isFinalizeModalOpen, setIsFinalizeModalOpen] = useState(false);

  const closeFinalizeModal = () => {
    setSearchParams({}, { replace: true });
    setIsFinalizeModalOpen(false);
  };

  const handleOpenFinalizeModal = () => {
    if (!auth.isAuthenticated) {
      setIsNeedsLoginModalOpen(true);
      return;
    }
    const params = new URLSearchParams();
    params.set("courtId", selectedCourt?.id ?? "");
    params.set("date", getFormattedDate(selectedDate));
    params.set("hour", selectedTimeSlot.toString());
    setSearchParams(params, { replace: true });
    setIsFinalizeModalOpen(true);
  };

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

  const withModalSelected = {
    courtId: searchParams.get("courtId"),
    date: searchParams.get("date"),
    hour: searchParams.get("hour"),
  };

  useEffect(() => {
    if (courts.length > 0) {
      setSelectedCourt(courts[0]);
    }
  }, [courts]);

  useEffect(() => {
    const currentDate = getFormattedDate(selectedDate);
    if (selectedCourt) fetchTimeSlots(currentDate, selectedCourt?.id || "31");
  }, [selectedCourt, selectedDate]);

  useEffect(() => {
    console.log(withModalSelected);

    if (
      withModalSelected.courtId &&
      withModalSelected.date &&
      withModalSelected.hour
    ) {
      const court = courts.find(
        (court) => court.id === withModalSelected.courtId
      );
      console.log("Found court", court);

      if (court) {
        setSelectedCourt(court);
        setSelectedTimeSlot(parseInt(withModalSelected.hour));
        setSelectedDate(new Date(withModalSelected.date));
        setIsFinalizeModalOpen(true);
      }
    }
  }, [courts]);

  if (courts.length === 0 || selectedCourt === null) {
    return <Box sx={{ color: "black" }}>Saha bulunamadı.</Box>;
  }
  return (
    <Stack
      sx={{
        bgcolor: "transparent",
      }}
    >
      <Stack
        sx={{
          bgcolor: theme.palette.background.primary.w253,
          borderRadius: "2rem",
          width: "100%",
        }}
        flexDirection="row"
        fontFamily="Quicksand"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {courts.map((court: Court) => {
          return (
            <Box
              key={court.id}
              onClick={() => setSelectedCourt(court)}
              sx={{
                width: "31%",
                cursor: "pointer",
                minWidth: "33%",
                fontWeight: 600,
                textAlign: "center",
                fontSize: { xl: "1.1rem", lg: "1rem", xs: "0.8rem" },
                color:
                  court.id === selectedCourt.id
                    ? "rgb(17, 201, 94) !important"
                    : "rgb(20,20,20)",
                padding: { xl: "0.8rem", lg: "1rem", xs: "0.5rem" },
              }}
            >
              {court.name}
            </Box>
          );
        })}
      </Stack>
      <Stack
        sx={{
          backgroundColor: "white",
          fontFamily: "Poppins",
          boxShadow: "0px 4px 12px rgba(200, 200, 200, 0.45)",
          borderRadius: "0.5rem",
          marginTop: { xl: "1rem", lg: "1rem", xs: "0.5rem" },
          padding: { lg: "2rem", xs: "0.5rem" },
        }}
      >
        {/* Header */}
        <Stack
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{}}
          width="100%"
        >
          <Stack
            sx={{
              fontFamily: "Poppins",

              borderRadius: "0.5rem",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              fontSize: { lg: "1.4rem", xs: "0.8rem" },
            }}
          >
            <Stack
              sx={{
                zIndex: 10,
                display: "flex",
                outline: 0,

                fontFamily: "Inter",
                fontWeight: 600,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "49%",
                position: "relative",
                fontSize: { lg: "0.8rem", xs: "0.6rem" },
              }}
            >
              <Box
                sx={{
                  fontSize: { xl: "0.9rem", lg: "0.8rem", xs: "0.6rem" },
                }}
              >
                Seçili Gün
              </Box>
              <Box
                sx={{
                  marginTop: { xl: "0.3rem", lg: "0.3rem", xs: "0.2rem" },
                  fontSize: { xl: "1.3rem", lg: "1rem", xs: "0.6rem" },
                }}
              >
                {getDayString(selectedDate.getUTCDay())}
              </Box>
            </Stack>
            <PickerWithButtonField
              selectedDate={selectedDate}
              datePickerOpen={datePickerOpen}
              onDatePickerClose={onDatePickerClose}
              setDatePickerOpen={setDatePickerOpen}
              setSelectedDate={setSelectedDate}
            />
          </Stack>
        </Stack>
        <Divider
          sx={{
            bgcolor: "rgb(253, 253, 253) !important",
            marginTop: { xl: "1.6rem", lg: "1rem", xs: "0.5rem" },
          }}
        />
        {/* Reservation Part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            sx={{
              width: { xl: "96%", lg: "96%", sm: "100%" },
              marginTop: { xl: "1rem", xs: "0.1rem" },
            }}
          >
            {timeSlots.map((slot, index) => (
              <TimeSlot
                isSelected={selectedTimeSlot === index}
                key={slot + index}
                status={slot}
                setSelectedTimeSlot={setSelectedTimeSlot}
                hour={index}
              />
            ))}
          </Stack>
        </Box>
        {/* Footer */}
        <Stack
          sx={{
            marginTop: { xl: "1.6rem", lg: "1rem", xs: "0.5rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.tx.secondary.w500,
              width: "60%",
            }}
            onClick={() => {
              handleOpenFinalizeModal();
            }}
          >
            Rezervasyon Yap
          </Button>
        </Stack>
        <ReservationFinalizeModal
          isOpen={isFinalizeModalOpen}
          onClose={closeFinalizeModal}
          facility={facility}
          courts={courts}
          selectedCourt={selectedCourt}
          selectedDate={selectedDate}
          selectedHour={selectedTimeSlot}
          setSelectedCourt={setSelectedCourt}
          setSelectedHour={setSelectedTimeSlot}
          handleMakeReservation={handleMakeReservation}
        />
        <NeedsLoginModal
          isOpen={isNeedsLoginModalOpen}
          onClose={closeNeedsLoginModal}
          message="Rezervasyon yapabilmek için giriş yapmalısınız."
        />
      </Stack>
    </Stack>
  );
};

interface TimeSlotProps {
  status: TimeSlotStatus;
  hour: number;
  isSelected: boolean;
  setSelectedTimeSlot: (index: number) => void;
}

const TimeSlot = ({
  status,
  hour,
  isSelected,
  setSelectedTimeSlot,
}: TimeSlotProps): JSX.Element => {
  const theme = useCustomTheme();

  if (isSelected) {
    return (
      <Button
        sx={{
          width: { lg: "15%", xs: "23%" },
          marginX: { lg: "5%", xs: "1%" },
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
            width: { lg: "15%", xs: "23%" },
            marginX: { lg: "5%", xs: "1%" },
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
            paddingY: { xs: "0.6rem" },
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
          width: { lg: "15%", xs: "23%" },
          marginX: { lg: "5%", xs: "1%" },
          marginY: { lg: "1%", xs: "1%" },
          color: "black",
          display: "flex",
          flexDirection: "column",
          fontWeight: "300",
          borderRadius: "6rem",
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

export default Reservation;
