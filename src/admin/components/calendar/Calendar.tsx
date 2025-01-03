import { useState, useEffect } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Animasyonlar
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
  padding: '2rem',
});

const StyledBox = styled(Box)({
  textAlign: 'center',
  padding: '4rem',
  background: 'white',
  borderRadius: '15px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  animation: `${fadeIn} 1s ease-in-out`,
});

const gradientText = {
  background: 'linear-gradient(135deg, #0073e6, #00c6ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const DateTypography = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: '1rem',
  animation: `${fadeIn} 2s ease-in-out`,
  ...gradientText,
});

const TimeTypography = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '4rem',
  animation: `${fadeIn} 3s ease-in-out`,
  ...gradientText,
});

const Calendar = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <StyledContainer>
      <StyledBox>
        <DateTypography variant="h4">
          {formattedDate}
        </DateTypography>
        <TimeTypography variant="h4">
          {formattedTime}
        </TimeTypography>
      </StyledBox>
    </StyledContainer>
  );
};

export default Calendar;