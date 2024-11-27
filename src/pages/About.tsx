import { Box } from '@mui/material';
import '../index.css';
import React from 'react';
import icon1 from '/src/assets/images/about/Ship.png';
import icon2 from '/src/assets/images/about/Hourglass.png';
import icon3 from '/src/assets/images/about/Handshake.png';
import debruyne from '/src/assets/images/about/debruyne.jpg';


const SahanCepte: React.FC = () => {

  
  return (
    <div style={{ paddingTop: '5rem', paddingLeft: '1.5rem' }}>
      <Box sx={{ width: '100vw', display: 'flex', flexDirection: 'row' ,paddingLeft: '2rem'}}>
        <Box sx={{ width: '60vw', display: 'flex', flexDirection: 'column', fontFamily: 'Open Sans', fontSize: '2rem', color: '#333', paddingLeft: '5rem' }}>

          <Box sx={{
            fontFamily: 'OpenSans',
            fontSize: '2.2rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #2d854b, #3a5ba0, #8e44ad)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            paddingTop: '4rem'
          }}>
            Sahan Cepte Nasıl Çalışır ?
          </Box>
          <Box sx={{ 
            color: '#252F40', 
            fontSize: '2.5rem', 
            fontFamily: 'OpenSans', 
            fontWeight: 'bold',
             }}>
            Tek Tık’la Rezervasyon Yap !
          </Box>
          <Box sx={{ 
            width: '40vw', 
            fontSize: '1.3rem', 
            color: '#67748E', 
            paddingTop: '2.5rem'
             }}>
            <Box>
              Sahan Cepte, tüm spor severler ile spor tesislerini online ortamda bir araya getiren rezervasyon yönetim platformudur.
            </Box>
            <Box sx={{ paddingTop: '1rem' }}>
              Müşteriler, Sahan Cepte  üzerinden, anlaşmalı spor tesisleri rezervasyonlarını 7/24 online olarak yapabilir. Spor Tesisleri ise 7/24 online ortamda gelen rezervasyon taleplerini platform üzerinden sonuçlandırabilir.
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '5rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '40vw' }}>

              <Box sx={{
                width: '5rem',
                height: '3.3rem',
                borderRadius: '50%',
                backgroundColor: 'rgb(0,176,116,1)',
                alpha: 0.15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}>
                <img src={icon1} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
              </Box>

              <Box sx={{ fontSize: '1.1rem', fontWeight: 400, color: '#67748E', paddingTop: '0.4rem', paddingLeft: '1rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Box>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '40vw', paddingTop: '2rem' }}>

              <Box sx={{
                width: '5rem',
                height: '3.3rem',
                borderRadius: '50%',
                backgroundColor: 'rgb(0,176,116,1)',
                alpha: 0.15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}>
                <img src={icon3} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
              </Box>

              <Box sx={{fontSize: '1.1rem', fontWeight: 400, color: '#67748E', paddingTop: '0.4rem', paddingLeft: '1rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Box>

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '40vw', paddingTop: '2rem' }}>

              <Box sx={{
                width: '5rem',
                height: '3.3rem',
                borderRadius: '50%',
                backgroundColor: 'rgb(0,176,116,1)',
                alpha: 0.15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}>
                <img src={icon2} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
              </Box>

              <Box sx={{ fontSize: '1.1rem', fontWeight: 400, color: '#67748E', paddingTop: '0.4rem', paddingLeft: '1rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Box>

            </Box>

          </Box>

          <Box sx={{ fontFamily: 'OpenSans', fontSize: '2.2rem', fontWeight: 900, color: '#252F40', paddingTop: '4rem' }}>
            Neden Sahan Cepte ?
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '3.2rem' ,paddingBottom: '7rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 700, color: '#000000' }}>Ücretsiz ve Kolay Üyelik</Box>
              <Box sx={{ paddingTop: '1.5rem', fontSize: "1rem", fontFamily: "Roboto", color: '#67748E', fontWeight: 400,width: '45vw'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '1.5rem' }}>
              <Box sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 700, color: '#000000' }}>Tesis Özelliklerine Kolay Erişim</Box>
              <Box sx={{ paddingTop: '1.5rem', fontSize: "1rem", fontFamily: "Roboto", color: '#67748E', fontWeight: 400,width: '45vw' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '1.5rem' }}>
              <Box sx={{ fontFamily: 'Roboto', fontSize: '1.5rem', fontWeight: 700, color: '#000000' }}>Tesisin Değerlendirilmesi</Box>
              <Box sx={{ paddingTop: '1.5rem', fontSize: "1rem", fontFamily: "Roboto", color: '#67748E', fontWeight: 400,width: '45vw' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Box>
            </Box>
          </Box>

        </Box>
        <Box sx={{ width: '40vw' }}>
          <img
            src={debruyne}
            alt="Sahan Cepte"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />

        </Box>

      </Box>
    </div>

  );
};



export default SahanCepte;