import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { TimeSlotStatus } from "@/interfaces/TimeSlot";
import {
  getFormattedDate,
  prettyHour,
} from "@/services/TimeServices";
import { useEffect, useState } from "react";
import { Court } from "@/interfaces/Court";
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';

interface ReservationProps {
  courts: Court[];
  handleMakeReservation: (courtId: string, date: Date, hour: number) => void;
}

const Reservation: React.FC<ReservationProps> = ({ courts, handleMakeReservation }) => {
  const [timeSlots, setTimeSlots] = useState<TimeSlotStatus[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(() => {
    if (courts.length > 0) {
      return courts[0];
    }
    console.log("No courts found", courts);
    return null;
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{
    courtId: string;
    date: Date;
    hour: number;
    courtName: string;
  } | null>(null);

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
      setTimeSlots(response.data["timeSlots"]);
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  useEffect(() => {
    const currentDate = getFormattedDate(selectedDate);
    if (selectedCourt?.id) {
      fetchTimeSlots(currentDate, selectedCourt.id);
    }
  }, [selectedDate, selectedCourt]);

  useEffect(() => {
    if (selectedSlot) {
      const currentDate = getFormattedDate(selectedSlot.date);
      fetchTimeSlots(currentDate, selectedSlot.courtId);
    }
  }, [selectedSlot?.date, selectedSlot?.courtId]);

  const handleTimeClick = (hour: number) => {
    if (selectedCourt) {
      setSelectedSlot({
        courtId: selectedCourt.id,
        date: selectedDate,
        hour: hour,
        courtName: selectedCourt.name
      });
      setOpenConfirmDialog(true);
    }
  };

  if (courts.length === 0 || selectedCourt === null) {
    return <Box sx={{ color: "black" }}>Saha bulunamadı.</Box>;
  }
  return (
    <Stack spacing={2}>
      {/* Tarih ve Saha Seçimi yan yana */}
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        sx={{ mb: 2 }}
      >
        {/* Tarih Seçici */}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
          <DatePicker
            label="Tarih Seçin"
            value={dayjs(selectedDate)}
            onChange={(newValue) => {
              if (newValue) {
                setSelectedDate(newValue.toDate());
              }
            }}
            sx={{ 
              marginTop: '1rem',
              marginBottom: '1rem',
              backgroundColor: 'white',
              borderRadius: '8px',
              flex: 1,
              '& .MuiInputBase-input': {
                color: 'black',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: 'white',
              }
            }}
            minDate={dayjs()}
            disablePast
          />
        </LocalizationProvider>

        {/* Saha Seçimi */}
        <FormControl 
          fullWidth 
          sx={{ 
            flex: 1,
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          <InputLabel>Saha Seçin</InputLabel>
          <Select
            value={selectedCourt?.id || ''}
            onChange={(e) => {
              const court = courts.find(c => c.id === e.target.value);
              setSelectedCourt(court || null);
            }}
            sx={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              '& .MuiInputBase-input': {
                color: 'black',
              }
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: 'white',
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                  '& .MuiMenuItem-root': {
                    backgroundColor: 'white'
                  }
                }
              }
            }}
          >
            {courts.map((court) => (
              <MenuItem key={court.id} value={court.id}>
                {court.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {/* Saat Seçimi */}
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        sx={{ marginTop: { xl: "0.1rem", xs: "0.1rem" } }}
      >
        {timeSlots.map((slot, index) => (
          <TimeSlot
            key={index}
            status={slot}
            hour={index}
            isSelected={selectedSlot?.hour === index}
            setSelectedTimeSlot={() => handleTimeClick(index)}
          />
        ))}
      </Stack>

      {/* Onay Dialog'u */}
      <Dialog 
        open={openConfirmDialog} 
        onClose={() => setOpenConfirmDialog(false)}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
          },
          '& .MuiDialog-paper': {
            minHeight: '500px',
            backgroundColor: 'white',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '12px',
          },
          '& .MuiDialogContent-root': {
            backgroundColor: 'white',
          },
          '& .MuiDialogTitle-root': {
            backgroundColor: 'white',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '20px 24px',
          },
          '& .MuiDialogActions-root': {
            backgroundColor: 'white',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '16px 24px',
          }
        }}
      >
        <DialogTitle sx={{ 
          fontWeight: 500,
          fontSize: '1.25rem'
        }}>
          Rezervasyon Onayı
        </DialogTitle>
        <DialogContent sx={{ 
          backgroundColor: 'white',
          p: 3,
        }}>
          {selectedSlot && (
            <Box sx={{ 
              display: 'flex', 
              gap: 4,
              py: 3,
              backgroundColor: 'white'
            }}>
              {/* Sol Taraf - Bilgiler */}
              <Box sx={{ 
                flex: 1,
                backgroundColor: 'white'
              }}>
                <Stack spacing={3}>
                  <Typography variant="h6" sx={{ mb: 2 }}>Rezervasyon Detayları</Typography>
                  
                  {/* Saha Seçimi */}
                  <FormControl fullWidth>
                    <InputLabel>Saha Seçin</InputLabel>
                    <Select
                      value={selectedSlot.courtId}
                      onChange={(e) => {
                        const selectedCourt = courts.find(court => court.id === e.target.value);
                        if (selectedCourt) {
                          setSelectedSlot({
                            ...selectedSlot,
                            courtId: selectedCourt.id,
                            courtName: selectedCourt.name
                          });
                        }
                      }}
                      sx={{ backgroundColor: 'white' }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            backgroundColor: 'white',
                            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                            '& .MuiMenuItem-root': {
                              backgroundColor: 'white'
                            }
                          }
                        }
                      }}
                    >
                      {courts.map((court) => (
                        <MenuItem key={court.id} value={court.id}>
                          {court.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Tarih Seçici */}
                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
                    <DatePicker
                      label="Tarih"
                      value={dayjs(selectedSlot.date)}
                      onChange={(newValue) => {
                        if (newValue && selectedSlot) {
                          setSelectedSlot({
                            ...selectedSlot,
                            date: newValue.toDate()
                          });
                        }
                      }}
                      sx={{ 
                        backgroundColor: 'white',
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'white',
                        },
                        '& .MuiInputBase-input': {
                          color: 'black',
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(0, 0, 0, 0.6)',
                        },
                        '& .MuiPaper-root': {
                          backgroundColor: 'white',
                          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                        },
                        '& .MuiPickersDay-root': {
                          backgroundColor: 'white',
                          color: 'black',
                          '&.Mui-selected': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                            }
                          },
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          }
                        },
                        '& .MuiPickersDay-today': {
                          border: '1px solid primary.main',
                        },
                        '& .MuiPickersCalendarHeader-root': {
                          backgroundColor: 'white',
                        },
                        '& .MuiYearCalendar-root': {
                          backgroundColor: 'white',
                        },
                        '& .MuiDayCalendar-weekDayLabel': {
                          backgroundColor: 'white',
                        },
                        '& .MuiPickersDay-dayWithMargin': {
                          backgroundColor: 'white',
                        },
                        '& .MuiPickersYear-yearButton': {
                          backgroundColor: 'white',
                        },
                        '& .MuiPickersCalendarHeader-switchViewButton': {
                          backgroundColor: 'white',
                        },
                        '& .MuiPickersArrowSwitcher-button': {
                          backgroundColor: 'white',
                        },
                        '& .MuiDateCalendar-root': {
                          backgroundColor: 'white',
                        },
                        '& .MuiPickersPopper-paper': {
                          backgroundColor: 'white',
                        },
                        '& *': {
                          backgroundColor: 'white',
                        }
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          sx: {
                            backgroundColor: 'white',
                            '& .MuiInputBase-input': {
                              color: 'black',
                            }
                          }
                        }
                      }}
                      minDate={dayjs()}
                      disablePast
                    />
                  </LocalizationProvider>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Seçilen Saat
                    </Typography>
                    <Typography variant="body1">
                      {selectedSlot.hour}:00 - {selectedSlot.hour + 1}:00
                    </Typography>
                  </Box>

                  {/* Saha Detayları */}
                  {selectedSlot && courts.find(court => court.id === selectedSlot.courtId) && (
                    <Box sx={{ 
                      mt: 2, 
                      p: 2, 
                      border: '1px solid #eee', 
                      borderRadius: 1,
                      backgroundColor: 'white'
                    }}>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                        Saha Bilgileri
                      </Typography>
                      
                      <Stack spacing={1}>
                        {/* Fiyat */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Fiyat:
                          </Typography>
                          <Typography variant="body2">
                            {courts.find(court => court.id === selectedSlot.courtId)?.price} ₺/Saat
                          </Typography>
                        </Box>

                        {/* Boyut */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Boyut:
                          </Typography>
                          <Typography variant="body2">
                            {courts.find(court => court.id === selectedSlot.courtId)?.width} x {courts.find(court => court.id === selectedSlot.courtId)?.height} m
                          </Typography>
                        </Box>

                        {/* Kişi Sayısı */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Kapasite:
                          </Typography>
                          <Typography variant="body2">
                            {courts.find(court => court.id === selectedSlot.courtId)?.capacity} Kişi
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  )}
                </Stack>
              </Box>

              {/* Sağ Taraf - Saat Seçimi Grid */}
              <Box sx={{ 
                flex: 1.5,
                borderLeft: '1px solid #eee',
                pl: 4,
                backgroundColor: 'white'
              }}>
                <Typography variant="h6" sx={{ mb: 3 }}>Saat Seçimi</Typography>
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 1
                }}>
                  {timeSlots.map((slot, index) => {
                    const isAvailable = slot === TimeSlotStatus.AVAILABLE;
                    return (
                      <Button
                        key={index}
                        onClick={() => {
                          if (isAvailable) {
                            setSelectedSlot({
                              ...selectedSlot,
                              hour: index
                            });
                          }
                        }}
                        disabled={!isAvailable}
                        variant={selectedSlot?.hour === index ? "contained" : "outlined"}
                        sx={{
                          height: '60px',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 1,
                          backgroundColor: selectedSlot?.hour === index 
                            ? 'primary.main' 
                            : isAvailable 
                              ? 'white' 
                              : 'rgb(240,240,240)',
                          color: selectedSlot?.hour === index 
                            ? 'white' 
                            : isAvailable 
                              ? 'black' 
                              : 'grey',
                          '&:hover': {
                            backgroundColor: selectedSlot?.hour === index 
                              ? 'primary.dark' 
                              : isAvailable 
                                ? 'rgba(0,0,0,0.04)' 
                                : 'rgb(240,240,240)'
                          },
                          '&.Mui-disabled': {
                            backgroundColor: 'rgb(240,240,240)',
                            color: 'grey'
                          }
                        }}
                      >
                        <Typography variant="body2">{index}:00</Typography>
                        <Typography variant="body2">{index + 1}:00</Typography>
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ 
          gap: 1,
        }}>
          <Button 
            onClick={() => setOpenConfirmDialog(false)} 
            color="error"
            variant="outlined"
            sx={{
              borderRadius: '8px',
            }}
          >
            İptal
          </Button>
          <Button 
            onClick={() => {
              if (selectedSlot) {
                handleMakeReservation(selectedSlot.courtId, selectedSlot.date, selectedSlot.hour);
                setOpenConfirmDialog(false);
              }
            }} 
            color="primary" 
            variant="contained"
            sx={{
              borderRadius: '8px',
            }}
          >
            Rezervasyonu Onayla
          </Button>
        </DialogActions>
      </Dialog>
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
          color: "white",
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
          bgcolor: "primary.main",
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
