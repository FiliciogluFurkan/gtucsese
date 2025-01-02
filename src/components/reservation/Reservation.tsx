import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { TimeSlotStatus } from "@/interfaces/TimeSlot";
import {
  formatInstantAsDate,
  getDayString,
  getFormattedDate,
  prettyHour,
} from "@/services/TimeServices";
import { useEffect, useState } from "react";
import { Court } from "@/interfaces/Court";
import axios from "axios";
import { Label } from "@mui/icons-material";

interface ReservationProps {
  courts: Court[];
  handleMakeReservation: (courtId: string, date: Date, hour: number) => void;
}

const Reservation = ({
  courts,
  handleMakeReservation,
}: ReservationProps): JSX.Element => {
  const [timeSlots, setTimeSlots] = useState<TimeSlotStatus[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(-1);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(() => {
    if (courts.length > 0) {
      return courts[0];
    }
    console.log("No courts found", courts);
    return null;
  });
  const [selectedDate] = useState<Date>(() => {
    const date = new Date();
    date.setHours(date.getHours() + 3);
    return date;
  });

  useEffect(() => {
    if (courts.length > 0) {
      setSelectedCourt(courts[0]);
    }
  }, [courts]);

  const fetchTimeSlots = async (date: string, courtId: string) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/api/v1/reservations/slots/${courtId}/${date}`,
      });
      // Handle the response here
      console.log(response.data["timeSlots"]);
      setTimeSlots(response.data["timeSlots"]);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const currentDate = getFormattedDate(selectedDate);
    fetchTimeSlots(currentDate, selectedCourt?.id || "");
  }, [selectedCourt]);

  if (courts.length === 0 || selectedCourt === null) {
    return <Box sx={{ color: "black" }}>Saha bulunamadı.</Box>;
  }
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        fontFamily: "Poppins",
        borderRadius: "0.5rem",
        padding: { lg: "1rem", xs: "0.5rem" },
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
          <FormControl
            sx={{
              zIndex: 10,
              display: "flex",
              border: "1px solid rgb(130,130,130) !important",
              outline: 0,
              borderRadius: "0.5rem !important",
              flexDirection: "row",
              padding: "0 !important",
              justifyContent: "space-between",
              alignItems: "center",
              width: "49%",
              position: "relative",
              fontSize: { lg: "0.8rem", xs: "0.6rem" },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                marginLeft: "0.5rem",
              }}
            >
              Saha
            </Box>

            <Select
              id="court-select"
              MenuProps={{
                style: { zIndex: 35001, padding: "0 !important" },
              }}
              value={selectedCourt?.name}
              sx={{
                outline: 0,
                /* border: "1px solid rgb(130,130,130) !important", */
                borderRadius: "0.2rem",
                width: "100%",
                height: { lg: "3.3rem", xs: "2rem" },
                fontFamily: "Poppins",
                padding: "0",
                "& fieldset": {
                  border: "0 !important",
                  outline: 0,
                },
                textAlign: "right",
                fontSize: { lg: "0.8rem", xs: "0.6rem" },
              }}
              defaultValue={selectedCourt ? selectedCourt.name : "UCAN"}
              onChange={(event) => {
                setSelectedCourt(
                  courts.find((court) => court.name === event.target.value) ||
                    null
                );
              }}
            >
              {courts.map((court, index) => (
                <MenuItem
                  sx={{
                    padding: "0 !important",
                  }}
                  key={index}
                  value={court.name}
                >
                  {court.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              zIndex: 10,
              display: "flex",
              outline: 0,

              border: "1px solid rgb(130,130,130) !important",
              borderRadius: "0.5rem !important",
              /* boxShadow: "0px 0px 12px rgba(200, 200, 200, 0.45)", */
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "49%",
              position: "relative",
              fontSize: { lg: "0.8rem", xs: "0.6rem" },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                marginLeft: "0.5rem",
              }}
            >
              Tarih
            </Box>
            <Box
              component="input"
              id="court-select"
              value={formatInstantAsDate(selectedDate.toISOString())}
              sx={{
                width: "100%",
                fontFamily: "Poppins",
                outline: 0,
                borderRadius: "0.5rem",

                /* "& fieldset": { border: "none" }, */
                height: { lg: "3.3rem", xs: "2rem" },
                /*  border: "1px solid rgb(130,130,130)", */
                textAlign: "right",
                padding: { lg: "1rem", xs: "0.3rem" },
                border: "none",
                fontSize: { lg: "0.8rem", xs: "0.6rem" },
              }}
              defaultValue={selectedCourt ? selectedCourt.name : "UCAN"}
              onChange={(event) => {
                setSelectedCourt(
                  courts.find((court) => court.name === event.target.value) ||
                    null
                );
              }}
            />
          </FormControl>
        </Stack>
        <Box
          sx={{
            fontFamily: "Poppins",
            marginTop: "0.5rem",
            paddingY: "0.5rem",
            paddingX: "2rem",
            borderRadius: "0.5rem",
            /*   boxShadow: "0px 4px 12px rgba(200, 200, 200, 0.45)", */
            fontSize: { lg: "1.2rem", xs: "0.8rem" },
          }}
        >
          {formatInstantAsDate(selectedDate.toISOString())}
        </Box>
        <Stack
          sx={{
            marginTop: { xl: "1rem", xs: "1rem" },
            fontSize: { xl: "0.9rem", md: "0.8rem", xs: "0.8rem" },
            padding: { xl: "0.5rem", xs: "0.3rem" },
          }}
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box marginTop="0.2rem" width="30%" textAlign="left">
            {getDayString(selectedDate.getUTCDay() - 1)}
          </Box>
          <Box width="40%" fontWeight={600} textAlign="center">
            {getDayString(selectedDate.getUTCDay())}
          </Box>
          <Box marginTop="0.2rem" width="30%" textAlign="right">
            {getDayString(selectedDate.getUTCDay() + 1)}
          </Box>
        </Stack>
      </Stack>
      {/* Reservation Part */}
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        sx={{ marginTop: { xl: "1rem", xs: "0.1rem" } }}
      >
        {timeSlots.map((slot, index) => (
          <TimeSlot
            isSelected={selectedTimeSlot === index}
            key={index}
            status={slot}
            setSelectedTimeSlot={setSelectedTimeSlot}
            hour={index}
          />
        ))}
      </Stack>
      {/* Footer */}
      <Stack>
        <Button
          onClick={() => {
            handleMakeReservation(selectedCourt.id, selectedDate, 1);
          }}
        ></Button>
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
          width: { lg: "23%", xs: "23%" },
          margin: { lg: "1%", xs: "1%" },
          color: "rgb(0,0,0)",
          display: "flex",
          flexDirection: "column",
          fontWeight: "300",
          borderRadius: "0.2rem",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "0 !important",
          height: { xl: "3.6rem", lg: "3.6rem", xs: "3rem" },
          fontSize: { xl: "0.8rem", xs: "0.8rem" },
          paddingY: { xs: "0.6rem" },
          bgcolor: "rgb(0,0,0)",
        }}
      >
        <Box>{prettyHour(hour)}</Box>
        <Box>{prettyHour(hour + 1)}</Box>
      </Button>
    );
  } else {
    // TODO: Implement a better swith case solution for this
    if (status === TimeSlotStatus.PAST_TIME) {
      return (
        <Button
          sx={{
            width: { lg: "23%", xs: "23%" },
            margin: { lg: "1%", xs: "1%" },
            color: "rgb(0,0,0)",
            display: "flex",
            flexDirection: "column",
            fontWeight: "300",
            borderRadius: "0.2rem",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "0 !important",
            height: { xl: "3.6rem", lg: "3.6rem", xs: "3rem" },
            fontSize: { xl: "0.8rem", xs: "0.8rem" },
            paddingY: { xs: "0.6rem" },
            bgcolor: selectBackground(status),
          }}
          disabled
        >
          <Box>{prettyHour(hour)}</Box>
          <Box>{prettyHour(hour + 1)}</Box>
        </Button>
      );
    } else if (status === TimeSlotStatus.CLOSED) {
      return (
        <Button
          sx={{
            width: { lg: "23%", xs: "23%" },
            margin: { lg: "1%", xs: "1%" },
            color: "rgb(0,0,0)",
            display: "flex",
            flexDirection: "column",
            fontWeight: "300",
            borderRadius: "0.2rem",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "0 !important",
            height: { xl: "3.6rem", lg: "3.6rem", xs: "3rem" },
            fontSize: { xl: "0.8rem", xs: "0.8rem" },
            paddingY: { xs: "0.6rem" },
            bgcolor: selectBackground(status),
          }}
          disabled
        >
          <Box>{prettyHour(hour)}</Box>
          <Box>{prettyHour(hour + 1)}</Box>
        </Button>
      );
    }
    return (
      <Button
        onClick={() => {
          setSelectedTimeSlot(hour);
        }}
        sx={{
          width: { lg: "23%", xs: "23%" },
          margin: { lg: "1%", xs: "1%" },
          color: "black",
          display: "flex",
          flexDirection: "column",
          fontWeight: "300",
          borderRadius: "0.2rem",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "0 !important",
          height: { xl: "3.6rem", lg: "3.6rem", xs: "3rem" },
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
};

export default Reservation;
