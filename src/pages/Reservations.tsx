import { Box, Typography } from '@mui/material';
import { useState } from 'react'; // useState ekledik
import fieldImage2 from '/src/assets/images/reservations/fieldImage2.webp';
import calendar from '/src/assets/images/reservations/calendar.png';
import arrowdown from '/src/assets/images/reservations/arrow-down.png';


const Profil = () => {
  // Aktif sekmeyi tutmak için state ekledik
  const [activeTab, setActiveTab] = useState('profil');

  // Tıklama handler'ı
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ paddingTop: '8rem', paddingLeft: '8.5rem', paddingRight: '8.5rem' }}>
      <Box sx={{ width: '100vw', paddingBottom: '8rem'}}>
      <Box
          sx={{
            width: '82%',
            backgroundColor: '#D9F3EABA',
            padding: '1rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10.5rem',
          }}
        >
          <Typography
            variant="h6"
            onClick={() => handleTabClick('profil')}
            sx={{
              fontSize: '1.1rem',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: activeTab === 'profil' ? '#2E7D32' : '#000000',
              cursor: 'poInter',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#2E7D32',
              },
            }}
          >
            Profil Düzenle
          </Typography>

          
          <Typography
            variant="h6"
            onClick={() => handleTabClick('rezervasyonlar')}
            sx={{
              fontSize: '1.1rem',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: activeTab === 'rezervasyonlar' ? '#2E7D32' : '#000000',
              cursor: 'poInter',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#2E7D32',
              },
            }}
          >
            Rezervasyonlarım
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick('degerlendirmeler')}
            sx={{
              fontSize: '1.1rem',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: activeTab === 'degerlendirmeler' ? '#2E7D32' : '#000000',
              cursor: 'poInter',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#2E7D32',
              },
            }}
          >
            Değerlendirmelerim
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick('favoriler')}
            sx={{
              fontSize: '1.1rem',
              fontWeight: 500,
              fontFamily: 'Inter',
              color: activeTab === 'favoriler' ? '#2E7D32' : '#000000',
              cursor: 'poInter',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#2E7D32',
              },
            }}
          >
            Favorilerim
          </Typography>
        </Box>

        {/* Buradan sonraki kodlar aynı kalacak */} 
    

        <Box sx={{marginTop: '4rem', marginLeft: '0.7rem', flexDirection: 'column'}}>
            <Box sx={{fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '600', color: '#464255', paddingLeft:'1rem',paddingBottom: '0.5rem'}}>
                Aktif Rezervasyonlarım
            </Box>
            <Box sx={{fontFamily: 'Inter', fontSize: '1rem', fontWeight: '400', color: '#A3A3A3', paddingLeft:'1rem', paddingBottom: '1.5rem'}}>
                Lorem Ipsum is simply dummy text of the printing
            </Box>


            <Box
            sx={{
                width: '82%',
                backgroundColor: '#FFFFFF',
                padding: '15px',
                border: '1px solid #E0E0E0',
                borderRadius: '45px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '1.5rem',
            }}
            >
                 <Box>
                    <img src={fieldImage2} alt="your image" style={{ width: '14rem', height: '10rem', objectFit: 'cover',borderRadius: '30px'}} />
                </Box>

                <Box sx={{flexDirection:'column'}}>
                    <Typography sx={{fontFamily: 'Inter', fontSize: '1rem', fontWeight: '400', color: ' #757575'}}>
                        Aymos Halısaha
                    </Typography>

                    <Typography sx={{fontFamily: 'Inter', fontSize: '2rem', fontWeight: '600', color: ' #404040'}}>
                        22:00 - 23:00
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row',  gap: '0.5rem',}}>
                        <Box>
                           <img src={calendar} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
                        </Box>
                        <Typography sx={{fontFamily: 'Inter', fontSize: '1.25rem', fontWeight: '400', color: ' #757575'}}>
                            Aralık 24, 2024
                        </Typography>
                    </Box>
                    

                </Box>

                <Box sx={{paddingLeft: '34.3rem', marginTop: '6.8rem' ,fontFamily: 'Inter', fontSize: '2rem', fontWeight: '600', color: '#404040'}}>
                    2500 TL
                </Box>
                
            </Box>





        </Box>
       
        
        <Box sx={{marginTop: '4rem', marginLeft: '0.7rem', flexDirection: 'column'}}>

            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box>
                    <Box sx={{fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: '600', color: '#464255', paddingLeft:'1rem',paddingBottom: '0.5rem'}}>
                        Geçmiş Rezervasyonlarım
                    </Box>
                    <Box sx={{fontFamily: 'Inter', fontSize: '1rem', fontWeight: '400', color: '#A3A3A3', paddingLeft:'1rem', paddingBottom: '1.5rem'}}>
                        Lorem Ipsum is simply dummy text of the printing
                    </Box>
                </Box>


                <Box sx={{paddingLeft: '45rem', paddingTop: '1rem'}}>
                    <img src={arrowdown} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
                </Box>

            </Box>



            <Box
            sx={{
                width: '82%',
                backgroundColor: '#FFFFFF',
                padding: '15px',
                border: '1px solid #E0E0E0',
                borderRadius: '45px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '1.5rem',
            }}
            >
                 <Box>
                    <img src={fieldImage2} alt="your image" style={{ width: '14rem', height: '10rem', objectFit: 'cover',borderRadius: '30px'}} />
                </Box>

                <Box sx={{flexDirection:'column'}}>

                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{fontFamily: 'Inter', fontSize: '1rem', fontWeight: '400', color: ' #757575'}}>
                            Aymos Halısaha
                        </Box>






                    </Box>

                    <Typography sx={{fontFamily: 'Inter', fontSize: '2rem', fontWeight: '600', color: ' #404040'}}>
                        18:00 - 19:00
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem',}}>
                        <Box>
                           <img src={calendar} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
                        </Box>
                        <Typography sx={{fontFamily: 'Inter', fontSize: '1.25rem', fontWeight: '400', color: ' #757575'}}>
                            Aralık 18, 2024
                        </Typography>
                    </Box>
                    

                </Box>


                <Box sx={{display: 'flex', flexDirection: 'column'}}>

                <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#36C191',
                    color: '#ffffff',
                    width: '123px',
                    height: '30px',
                    paddingTop: '0.5rem', 
                    paddingBottom: '0.5rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    borderRadius: '7.5px',
                    fontSize: '13px',
                    fontWeight: '400',
                    fontFamily: 'Poppins',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    marginLeft: '35rem',
                    marginTop: '1rem',
                    '&:hover': {
                    backgroundColor: '#57AE76',
                    },
                }}
                >
                Değerlendir
            </Box>

                    <Box sx={{paddingLeft: '35rem', marginTop: '4rem' ,fontFamily: 'Inter', fontSize: '2rem', fontWeight: '600', color: '#404040'}}>
                    
                        2500 TL
                    
                    </Box>
        
                </Box>
                
            </Box>
            


           


        </Box>








      </Box> 
    </div>
  );
};

export default Profil;
