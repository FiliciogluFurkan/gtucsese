import  { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Box, Button, Typography } from '@mui/material';

const ReservationSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedField, setSelectedField] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const fields = ['Saha 1', 'Saha 2', 'Saha 3', 'Saha 4', 'Saha 5'];

  const generateTimes = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      const startHour = i < 10 ? `0${i}:00` : `${i}:00`;
      const endHour = i + 1 === 24 ? `24:00` : (i + 1 < 10 ? `0${i + 1}:00` : `${i + 1}:00`);
      times.push(`${startHour} - ${endHour}`);
    }
    return times;
  };

  const times = generateTimes();

  const handlePrevDate = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
  };

  const handleNextDate = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    }).format(date);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '10px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Box sx={{ backgroundColor: '#10B981', color: 'white', padding: '10px', textAlign: 'center', borderRadius: '10px 10px 0 0', marginBottom: '15px' }}>
        <Typography variant="h5">Saha Rezervasyon Sistemi</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
        <Button sx={{ width: '35px', height: '35px', borderRadius: '50%', border: 'none', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} onClick={handlePrevDate}>
          <ChevronLeft size={20} />
        </Button>
        
        <Box sx={{ padding: '8px 16px', backgroundColor: '#f3f4f6', borderRadius: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={20} />
          <Typography>{formatDate(selectedDate)}</Typography>
        </Box>
        
        <Button sx={{ width: '35px', height: '35px', borderRadius: '50%', border: 'none', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} onClick={handleNextDate}>
          <ChevronRight size={20} />
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '15px' }}>
        {fields.map((field) => (
          <Button
            key={field}
            sx={{
              padding: '12px',
              fontSize: '14px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#10B981', color: '#ffffff', borderColor: '#10B981' },
              ...(selectedField === field ? { backgroundColor: '#10B981', color: '#ffffff', borderColor: '#10B981' } : {}),
            }}
            onClick={() => setSelectedField(field)}
          >
            {field}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {times.map((time) => (
          <Button
            key={time}
            sx={{
              padding: '10px',
              fontSize: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#10B981', color: '#ffffff', borderColor: '#10B981' },
              ...(selectedTime === time ? { backgroundColor: '#10B981', color: '#ffffff', borderColor: '#10B981' } : {}),
            }}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </Button>
        ))}
      </Box>

      {selectedField && selectedTime && (
        <>
          <Box sx={{ marginTop: '15px', padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>Rezervasyon Özeti</Typography>
            <Typography sx={{ fontSize: '12px', color: '#4b5563', marginBottom: '5px' }}>Saha: {selectedField}</Typography>
            <Typography sx={{ fontSize: '12px', color: '#4b5563', marginBottom: '5px' }}>Tarih: {formatDate(selectedDate)}</Typography>
            <Typography sx={{ fontSize: '12px', color: '#4b5563', marginBottom: '5px' }}>Saat: {selectedTime}</Typography>
          </Box>

          <Button
            sx={{
              width: '100%',
              padding: '12px',
              marginTop: '15px',
              backgroundColor: '#10B981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#0f9f76' },
            }}
            onClick={() => {
              alert(`Rezervasyon tamamlandı!\nSaha: ${selectedField}\nTarih: ${formatDate(selectedDate)}\nSaat: ${selectedTime}`);
            }}
          >
            Rezervasyonu Tamamla
          </Button>
        </>
      )}
    </Box>
  );
};

export default ReservationSystem;
