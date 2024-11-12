import './../css/signup/Signup.css'; 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button } from '@mui/material';
import login from '/src/assets/images/login.jpg'
import axios from 'axios';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = async () => {
    const user = {
      mailAddress: mail,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
  
    console.log(user);
  
    try {
      const response = await axios.post(
        'https://server.aymoose.devodev.online/api/v1/accounts', 
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false, 
        }
      );
      
      console.log('Response:', response);
      // Handle the successful response (e.g., redirect, show success message, etc.)
  
    } catch (error) {
      console.error('Error during sign-up:', error);
      // Handle error (e.g., show error message to user)
    }
  };
  
  return (
    <Box   sx={{
      backgroundImage: "url('" + login + "')",
      width: '100vw',
      height: "62.85rem",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "row",
  }}>
      <div className='signup-container'>
        <div className='signup-container-section'>
          <div className='signup-container-section-title'>
            Hoşgeldiniz
          </div>
          <div className='signup-container-section-description'> Kayıt olun ve kolay bir şekilde halısaha randevunuzu alın.</div>

          <div className='signup-container-section-name-title'>İsim ve Soyisim</div>
          <div className='signup-container-section-name-textfield'>
            <TextField
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 190,
                marginRight: '10px', 
              }}
              id="filled-first-name"
              variant="filled"
              value={firstName}
              onChange={handleFirstNameChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: 'transparent',
                  borderRadius: '1rem',
                },
              }}
              placeholder="İsim" 
            />
            <TextField
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 190,
              }}
              id="filled-last-name"
              variant="filled"
              value={lastName}
              onChange={handleLastNameChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: 'transparent',
                  borderRadius: '1rem',
                },
              }}
              placeholder="Soyisim" 
            />
          </div>

         {/* <div className='signup-container-section-username-title'>Kullanıcı Adı</div> */}
        {/*   <div className='signup-container-section-username-textfield'>
            <TextField
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 400,
              }}
              id="filled-username"
              variant="filled"
              value={username}
              onChange={handleUsernameChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: 'transparent',
                  borderRadius: '1rem',
                },
              }}
            />
          </div> */}

          <div className='signup-container-section-email-title'>Email</div>
          <div className='signup-container-section-email-textfield'>
            <TextField
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 400,
                fontSize: 16,
              }}
              id="filled-email"
              variant="filled"
              value={mail}
              onChange={handleMailChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: 'transparent',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                },
              }}
            />
          </div>

          <div className='signup-container-section-password-title'>Şifre</div>
          <div className='signup-container-section-password-textfield'>
            <TextField
              className='signup-container-section-password-textfield-input'
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 400,
              }}
              id="filled-password"
              variant="filled"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  backgroundColor: 'transparent',
                  borderRadius: '1rem',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className='signup-container-section-button-signin'>
            <Button
              variant="contained" 
              color="primary" 
              onClick={handleSignUpClick}
              style={{
                borderRadius: '1rem', 
                width: '100%', 
                height: '48px', 
                backgroundColor: '#162D3A'
              }}
            >
              Kayıt Ol
            </Button>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default SignUp;
