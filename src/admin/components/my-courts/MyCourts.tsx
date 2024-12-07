import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Typography, Snackbar, Button, Select, MenuItem, FormControl, InputLabel, IconButton, Grow } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { tr } from 'date-fns/locale'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const ReservationSystem = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCourt, setSelectedCourt] = useState('Saha 1');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  

  interface User {
    name: string;
    surname: string;
    phone: string;
  }

  interface TimeSlot {
    time: string;
    status: 'boş' | 'dolu';
    user?: User | null; 
  }

  const generateTimeSlots = (courtName: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    console.log(courtName);
    // Generate slots for every hour with potential user booking
    for (let hour = 0; hour < 24; hour++) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;

      // Randomly assign status and potentially add user details
      const status: 'boş' | 'dolu' = Math.random() < 0.4 ? 'dolu' : 'boş';

      const slot: TimeSlot = {
        time: `${startTime} - ${endTime}`,
        status: status
      };

      // Add user details if slot is 'dolu'
      if (status === 'dolu') {
        slot.user = {
          name: ['Ahmet', 'Mehmet', 'Ali', 'burak', 'kaan'][Math.floor(Math.random() * 5)],
          surname: ['Yılmaz', 'Kaya', 'Demir', 'Filicioglan', 'Şahin'][Math.floor(Math.random() * 5)],
          phone: `5${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`
        };
      }

      slots.push(slot);
    }

    return slots;
  };


  useEffect(() => {
    const fetchTimeSlots = async (date: Date, court: string) => {
      console.log(date);
      const slots = generateTimeSlots(court);
      setTimeSlots(slots);
    };

    fetchTimeSlots(selectedDate, selectedCourt);
  }, [selectedDate, selectedCourt]);
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      setSnackbarMessage(`Seçilen tarih: ${date.toLocaleDateString()}`);
      setOpenSnackbar(true);
    }
  };

  const handleCourtChange = (event: SelectChangeEvent<string>) => {
    setSelectedCourt(event.target.value as string);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSlotIndex, setCurrentSlotIndex] = useState<number | null>(null);
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const handleDialogClose = () => {
    setOpenDialog(false);
    setUserName('');
    setUserSurname('');
    setUserPhone('');
  };

  const handleDialogSubmit = () => {
    if (currentSlotIndex !== null) {
      setTimeSlots((prevSlots) => {
        const newSlots = [...prevSlots];
        newSlots[currentSlotIndex].status = 'dolu';
        newSlots[currentSlotIndex].user = {
          name: userName,
          surname: userSurname,
          phone: userPhone,
        };
        return newSlots;
      });
      handleDialogClose();
    }
  };

  const handleStatusChange = (index: number) => {
    console.log(timeSlots[index]);
    if (timeSlots[index].status === 'boş') {
      setCurrentSlotIndex(index);
      setOpenDialog(true); // Dialog'u aç
    } else {
      setTimeSlots((prevSlots) => {
        const newSlots = [...prevSlots];
        newSlots[index].status = 'boş';
        delete newSlots[index].user;
        return newSlots;
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ margin: 2, padding: 2, border: '1px solid #ccc', borderRadius: 2, backgroundColor: '#424242' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" color="primary" gutterBottom>Halısaha Rezervasyon Sistemi</Typography>
          <Typography variant="h6" color="secondary">Seçilen Tarih: {selectedDate.toLocaleDateString()}</Typography>
        </Box>
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Saha Seç</InputLabel>
            <Select value={selectedCourt} onChange={handleCourtChange} label="Saha Seç">
              <MenuItem value="Saha 1">Saha 1</MenuItem>
              <MenuItem value="Saha 2">Saha 2</MenuItem>
              <MenuItem value="Saha 3">Saha 3</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '4rem' }}>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => handleDateChange(date)}
              customInput={<Button variant="contained" color="primary">Tarih Seç</Button>}
              locale={tr}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
          {timeSlots.map((slot, index) => (
            <Grow in={true} key={index}>
              <Box sx={{
                padding: 2,
                border: '1px solid',
                borderRadius: 2,
                backgroundColor: slot.status === 'dolu' ? '#ffcdd2' : '#c8e6c9',
                flex: '1 1 calc(16.66% - 16px)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '180px'
              }}>
                <Box>
                  <Typography variant="h6">{slot.time}</Typography>
                  <Typography>{slot.status === 'dolu' ? 'Dolu' : 'Boş'}</Typography>
                </Box>
                <Box sx={{ marginTop: 1 }}>
                  {slot.user ? (
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon fontSize="small" />
                        <Typography variant="body2"> {slot.user.name} {slot.user.surname}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon fontSize="small" />
                        <Typography variant="body2"> {slot.user.phone}</Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Typography variant="body2" color="textSecondary">Henüz rezervasyon yapılmamış</Typography>
                  )}
                </Box>
                <IconButton
                  color={slot.status === 'boş' ? 'secondary' : 'primary'}
                  onClick={() => handleStatusChange(index)}
                >
                  {slot.status === 'boş' ? <CheckCircleIcon /> : <CancelIcon />}
                </IconButton>
              </Box>
            </Grow>
          ))}
        </Box>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
          action={
            <Button color="secondary" size="small" onClick={() => setOpenSnackbar(false)}>
              Kapat
            </Button>
          }
        />
      </Box>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Rezervasyon Yap</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Ad"
            type="text"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Soyad"
            type="text"
            fullWidth
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Telefon"
            type="tel"
            fullWidth
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            İptal
          </Button>
          <Button onClick={handleDialogSubmit} color="primary">
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>

    </ThemeProvider>
  );
};

export default ReservationSystem;