import { DatePicker } from "@mui/x-date-pickers";
import { FiCalendar } from "react-icons/fi";
import { useRef, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { useCustomTheme } from "@/themes/Theme";
import { getMonthString } from "@/services/TimeServices";

interface AnchoredDatePickerProps {
  datePickerOpen: boolean;
  setDatePickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  onDatePickerClose: () => void;
}
const AnchoredDatePicker = ({
  datePickerOpen,
  setDatePickerOpen,
  selectedDate,
  setSelectedDate,
  onDatePickerClose,
}: AnchoredDatePickerProps) => {
  const buttonRef = useRef(null);
  const theme = useCustomTheme();
  const [anchorEl, setAnchorEl] = useState(() => {
    const element = document.getElementById("date-picker-anchor");
    return element;
  });

  const scrollForDatePicker = () => {
    const currentScroll = window.scrollY;
    const targetScroll = 200;

    if (currentScroll < targetScroll) {
      // Smooth scroll to target position
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      // Wait for scroll to complete before opening datepicker
      const checkScroll = () => {
        const newScroll = window.scrollY;
        if (newScroll >= targetScroll) {
          setDatePickerOpen(true);
        } else {
          requestAnimationFrame(checkScroll);
        }
      };

      requestAnimationFrame(checkScroll);
    }
  };

  useEffect(() => {
    // Find the anchor element by ID when component mounts
    const element = document.getElementById("date-picker-anchor");
    if (element) {
      setAnchorEl(element);
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {/* This is the anchor element */}
      <style>
        {`
        .MuiPaper-root {
          background-color: white !important;
        }
      `}
      </style>
      <Box
        sx={{
          height: { xl: "3.6rem", lg: "2.8rem", xs: "1.8rem" },
        }}
        id="date-picker-anchor"
        ref={buttonRef}
      >
        <DatePicker
          slots={{
            field: () => (
              <Stack
                sx={{
                  zIndex: 10,
                  display: "flex",
                  outline: 0,
                  color: theme.palette.tx.primary.w400,
                  border: "1px solid rgb(235, 235, 235)",
                  borderRadius: "0.8rem !important",
                  /* boxShadow: "0px 0px 12px rgba(200, 200, 200, 0.45)", */
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  fontFamily: "Barlow",
                  alignItems: "center",

                  fontSize: { lg: "0.8rem", xs: "0.6rem" },
                  height: { xl: "3.3rem", lg: "3rem", xs: "1.5rem" },
                  paddingX: { xl: "0.6rem", lg: "1rem", xs: "0.5rem" },
                }}
                flexDirection="row"
              >
                <Box
                  sx={{
                    marginLeft: "0.5rem",
                    fontWeight: 600,
                    color: theme.palette.tx.primary.w400,
                    fontSize: { xl: "2.2rem", lg: "2em", xs: "0.6rem" },
                  }}
                >
                  {selectedDate.getDate() < 10
                    ? "0" + selectedDate.getDate()
                    : selectedDate.getDate()}
                </Box>
                <Stack
                  sx={{
                    marginLeft: { lg: "1rem", xs: "0.5rem" },
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: 500,
                      fontFamily: "Poppins",
                      color: theme.palette.tx.primary.w500,
                      fontSize: { lg: "1.2em", xs: "0.6rem" },
                    }}
                  >
                    {getMonthString(selectedDate.getMonth())}
                  </Box>
                  <Box
                    sx={{
                      fontWeight: 600,
                      color: "rgb(20,20,20)",
                      fontSize: { lg: "1.2em", xs: "0.6rem" },
                    }}
                  >
                    {selectedDate.getFullYear()}
                  </Box>
                </Stack>
                <Box
                  id="date-picker-button"
                  onClick={() => {
                    scrollForDatePicker();
                    setDatePickerOpen(true);
                  }}
                  sx={{
                    fontSize: { xl: "1.2rem", xs: "0.8rem" },
                    padding: "0 !important",
                    minWidth: "0 !important",
                    marginLeft: { xl: "1rem", lg: "0.5rem", xs: "0.5rem" },
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                  }}
                >
                  <FiCalendar
                    cursor="pointer"
                    color="#00B074"
                    fontWeight={600}
                    size={22}
                  />
                </Box>
              </Stack>
            ),
          }}
          open={datePickerOpen}
          value={selectedDate}
          onChange={(date) => {
            if (date) setSelectedDate(date);
          }}
          onClose={onDatePickerClose}
          slotProps={{
            popper: {
              anchorEl: anchorEl,
              disablePortal: true,
              keepMounted: true,

              popperOptions: {
                strategy: "fixed",
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 0],
                    },
                  },
                ],
                placement: "bottom-end",
              },

              sx: {
                zIndex: 9999,

                "& .MuiPaper-root": {
                  backgroundColor: "white !important",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiPickersPopper-paper": {
                  backgroundColor: "white",
                },
                "& .MuiDateCalendar-root": {
                  backgroundColor: "white",
                },
              },
              modifiers: [
                {
                  name: "offset",

                  options: {
                    /* offset: [200, -100], */
                  },
                },
              ],
            },
            field: {
              onClick: () => {
                setDatePickerOpen(!datePickerOpen);
              },
            } as any,
          }}
        />
      </Box>
    </>
  );
};

export default AnchoredDatePicker;
