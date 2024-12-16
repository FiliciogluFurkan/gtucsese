import { Box, Button, Stack } from "@mui/material";
import { TimeSlotStatus } from "@/interfaces/TimeSlot";
import { prettyHour } from "@/services/TimeServices";

interface ReservationProps {
  slots: TimeSlotStatus[];
}

const Reservation = ({ slots }: ReservationProps): JSX.Element => {
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
        sx={{
          padding: { lg: "1rem", xs: "0.6rem" },
          paddingTop: "0.4rem !important",
        }}
        width="100%"
      >
        <Box
          sx={{
            fontFamily: "Poppins",
            fontSize: { lg: "1.4rem", xs: "0.8rem" },
          }}
        >
          17 Aralık 2024
        </Box>
        <Stack
          sx={{
            marginTop: { xl: "1.3rem", xs: "1.5rem" },
            fontSize: { xl: "1.1rem", md: "1rem", xs: "1rem" },
          }}
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box marginTop="0.2rem" width="30%" textAlign="left">
            Pazar
          </Box>
          <Box width="40%" fontWeight={600} textAlign="center">
            Pazartesi
          </Box>
          <Box marginTop="0.2rem" width="30%" textAlign="right">
            Salı
          </Box>
        </Stack>
      </Stack>
      {/* Reservation Part */}
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        sx={{ marginTop: { xl: "0.1rem", xs: "0.1rem" } }}
      >
        {slots.map((slot, index) => (
          <TimeSlot key={index} status={slot} hour={index} />
        ))}
      </Stack>
      {/* Footer */}
      <Stack></Stack>
    </Stack>
  );
};

interface TimeSlotProps {
  status: TimeSlotStatus;
  hour: number;
}

const TimeSlot = ({ status, hour }: TimeSlotProps): JSX.Element => {
  const selectBackground = (status: TimeSlotStatus) => {
    switch (status) {
      case TimeSlotStatus.PAST_TIME:
        return "rgb(220,220,220)";
      case TimeSlotStatus.CLOSED:
        return "rgb(230,230,230)";
    }
  };

  {
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
          <Box>Zamanı Geçmiş</Box>
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
          <Box>Kapalı</Box>
        </Button>
      );
    }
    return (
      <Button
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
