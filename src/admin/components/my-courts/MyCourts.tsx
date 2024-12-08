import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Box,
  Typography,
  Snackbar,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Grow,
} from '@mui/material';
import { tr } from 'date-fns/locale';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { generateTimeSlots} from '../../../services/TimeServices';
import { TimeSlot } from '../../../interfaces/TimeSlot';
const ReservationSystem = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCourt, setSelectedCourt] = useState('Saha 1');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSlotIndex, setCurrentSlotIndex] = useState<number | null>(null);
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userPhone, setUserPhone] = useState('');


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
      setOpenDialog(true);
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
    <Box
      sx={{
        margin: 2,
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        backgroundColor: '#424242',
        color: '#fff',
        '& .MuiInputLabel-root': { color: '#90caf9' },
        '& .MuiSelect-root': { color: '#fff' },
        '& .MuiIconButton-root': { color: '#90caf9' }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h4"
          sx={{ color: '#90caf9', fontFamily: 'Roboto, sans-serif' }}
          gutterBottom
        >
          Halısaha Rezervasyon Sistemi
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: '#f48fb1', fontFamily: 'Roboto, sans-serif' }}
        >
          Seçilen Tarih: {selectedDate.toLocaleDateString()}
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel sx={{ color: '#90caf9' }}>Saha Seç</InputLabel>
          <Select
            value={selectedCourt}
            onChange={handleCourtChange}
            label="Saha Seç"
            sx={{
              backgroundColor: '#2c2c2c', // Daha koyu bir arka plan
              color: '#fff', // Beyaz yazı rengi
              '& .MuiSelect-icon': { color: '#90caf9' },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#90caf9',
                borderWidth: 2
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#64b5f6'
              }
            }}
          >
            <MenuItem
              value="Saha 1"
              sx={{
                backgroundColor: '#2c2c2c',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#3c3c3c'
                },
                '&.Mui-selected': {
                  backgroundColor: '#3c3c3c',
                  '&:hover': {
                    backgroundColor: '#4c4c4c'
                  }
                }
              }}
            >
              Saha 1
            </MenuItem>
            <MenuItem
              value="Saha 2"
              sx={{
                backgroundColor: '#2c2c2c',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#3c3c3c'
                },
                '&.Mui-selected': {
                  backgroundColor: '#3c3c3c',
                  '&:hover': {
                    backgroundColor: '#4c4c4c'
                  }
                }
              }}
            >
              Saha 2
            </MenuItem>
            <MenuItem
              value="Saha 3"
              sx={{
                backgroundColor: '#2c2c2c',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#3c3c3c'
                },
                '&.Mui-selected': {
                  backgroundColor: '#3c3c3c',
                  '&:hover': {
                    backgroundColor: '#4c4c4c'
                  }
                }
              }}
            >
              Saha 3
            </MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '4rem' }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => handleDateChange(date)}
            customInput={
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#90caf9',
                  color: '#000',
                  '&:hover': { backgroundColor: '#64b5f6' }
                }}
              >
                Tarih Seç
              </Button>
            }
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
                <Typography variant="h6" sx={{ color: '#000' }}>{slot.time}</Typography>
                <Typography sx={{ color: '#000' }}>{slot.status === 'dolu' ? 'Dolu' : 'Boş'}</Typography>
              </Box>
              <Box sx={{ marginTop: 1 }}>
                {slot.user ? (
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PersonIcon fontSize="small" />
                      <Typography variant="body2" sx={{ color: '#000' }}>
                        {slot.user.name} {slot.user.surname}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon fontSize="small" />
                      <Typography variant="body2" sx={{ color: '#000' }}>
                        {slot.user.phone}
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="body2" sx={{ color: '#666' }}>Henüz rezervasyon yapılmamış</Typography>
                )}
              </Box>
              <IconButton
                onClick={() => handleStatusChange(index)}
                sx={{
                  color: slot.status === 'boş' ? '#4caf50' : '#f44336',
                  '&:hover': {
                    backgroundColor: slot.status === 'boş' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'
                  }
                }}
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
          <Button
            color="secondary"
            size="small"
            onClick={() => setOpenSnackbar(false)}
            sx={{ color: '#f48fb1' }}
          >
            Kapat
          </Button>
        }
      />

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#424242',
            color: '#fff'
          }
        }}
      >
        <DialogTitle sx={{ color: '#90caf9' }}>Rezervasyon Yap</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Ad"
            type="text"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            sx={{
              '& .MuiInputLabel-root': { color: '#90caf9' },
              '& .MuiInputBase-input': { color: '#fff' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#90caf9' },
                '&:hover fieldset': { borderColor: '#64b5f6' }
              }
            }}
          />
          <TextField
            margin="dense"
            label="Soyad"
            type="text"
            fullWidth
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
            sx={{
              '& .MuiInputLabel-root': { color: '#90caf9' },
              '& .MuiInputBase-input': { color: '#fff' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#90caf9' },
                '&:hover fieldset': { borderColor: '#64b5f6' }
              }
            }}
          />
          <TextField
            margin="dense"
            label="Telefon"
            type="tel"
            fullWidth
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            sx={{
              '& .MuiInputLabel-root': { color: '#90caf9' },
              '& .MuiInputBase-input': { color: '#fff' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#90caf9' },
                '&:hover fieldset': { borderColor: '#64b5f6' }
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            sx={{ color: '#f44336' }}
          >
            İptal
          </Button>
          <Button
            onClick={handleDialogSubmit}
            sx={{ color: '#90caf9' }}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReservationSystem;