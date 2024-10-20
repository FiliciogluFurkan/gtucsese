import './../css/login/Login.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Login() {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    // Giriş yapma işlemi burada gerçekleştirilebilir
    console.log("Giriş yap butonuna tıklandı.");
  };

  console.log(mail);
  return (
    <div className='login'>
      <div className='login-container'>

        <div className='login-container-section'>

          <div className='login-container-section-title'>
            Tekrar hoşgeldiniz
          </div>
          <div className='login-container-section-description'> Giriş yapın ve kolay bir şekilde halısaha randevunuzu alın.</div>

          <div className='login-container-section-email-title'>Email</div>

          <div className='login-container-section-email-textfield'>

            <TextField
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 400,
                fontSize: 16,
              }}
              id="filled-helperText"
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
          <div className='login-container-section-password-title'>Password</div>

          <div className='login-container-section-password-textfield'>
            <TextField
              style={{
                backgroundColor: 'rgba(247,251,255)',
                borderRadius: '1rem',
                width: 400,
                fontSize: 16,
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
                  fontSize: '1rem',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className='login-container-section-forgot-password'>
            <Link to="/password-reset" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Roboto' }}>Şifremi Unuttum?</Link>
          </div>

          <div className='login-container-section-button-signin'>
            <Button
              variant="contained" 
              color="primary" 
              onClick={handleLoginClick} 
              style={{
                borderRadius: '1rem', 
                width: '100%', 
                height: '48px', 
                backgroundColor: '#162D3A'
              }}
            >
              Giriş Yap
            </Button>
          </div>
    
        </div>
      </div>


    </div>
  )
}

export default Login

