import { Box} from '@mui/material';
import profile from '/src/assets/images/admindashboard/placeholder.png';
import courtImage from '/src/assets/images/court-3.jpg'
import { useState } from "react";
import { renderStars } from '../../../services/CommentService';

function Comments() {
  const courtNames = [
    {
      name: "Kolezyum"
    },
    {
      name: "Aymos"
    }
  ]

  const comments = [
    {
      username: "Ahmet Yılmaz",
      comment: "Harika bir saha, zemini çok iyi.Yiyecek ve içecek olsa daha iyi olurdu.Maçtan sonra terli terli dışarda yemek yemeden burada yiyip evimize giderdik.",
      daysAgo: 2,
      rating: 5,
    },
    {
      username: "Mehmet Kaya",
      comment: "Işıklandırma yetersizdi.Saat 8 oldu hala ışıklar açılmamıştı.",
      daysAgo: 4,
      rating: 3.5,
    },
    {
      username: "Elif Demir",
      comment: "Çalışanlar çok ilgiliydi, sahada oynamak keyifliydi.",
      daysAgo: 1,
      rating: 4.5,
    },
    {
      username: "Hüseyin Çelik",
      comment: "Saha biraz bakımsız ama yine de keyifliydi.",
      daysAgo: 5,
      rating: 3,
    },
    {
      username: "Ayşe Öztürk",
      comment: "Oldukça ferah ve geniş bir saha. Tavsiye ederim.",
      daysAgo: 7,
      rating: 5,
    },
    {
      username: "Emre Şahin",
      comment: "Otopark sorunluydu, biraz daha iyi olabilirdi.",
      daysAgo: 10,
      rating: 2.4,
    },
    {
      username: "Fatma Aydın",
      comment: "Fiyat performans olarak gayet iyi.",
      daysAgo: 3,
      rating: 4,
    },
    {
      username: "Ali Yıldırım",
      comment: "Saha güzel ama duşlar biraz kirliydi.",
      daysAgo: 6,
      rating: 3,
    },
  ];


  const [startIndex, setStartIndex] = useState(0);
  const commentsPerPage = 3;
  
  const handleNext = () => {
    if (startIndex + commentsPerPage < comments.length) {
      setStartIndex(startIndex + commentsPerPage);
    }
  };
  
  const handlePrev = () => {
    if (startIndex - commentsPerPage >= 0) {
      setStartIndex(startIndex - commentsPerPage);
    }
  };
  const currentComments = comments.slice(startIndex, startIndex + commentsPerPage);

  return (
    <Box sx={{ width: '100%', padding: '2rem', overflowX: 'hidden' ,   height: '100%'}}>
      <Box sx={{ }}>
            {courtNames.map((court, courtIndex) => { 
              let isLastCourt = (courtIndex === courtNames.length -1 );             
              return (
              <Box sx={{}}>
                <Box sx= {{fontFamily: "Barlow",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#464255", 
            marginBottom: '1rem',
            mt: isLastCourt ? '1rem' : '0rem',
             }} >
                {court.name}
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'flex-start', width: '100%', position: 'relative' /* left: '-33rem' */}} >
                  {currentComments.map((comment, index) => {
                  let isLastElement = (index === comments.length -1 );
                return (          
                    <Box>
                        <Box 
                          sx={{
                            padding: '1rem',
                            borderRadius: '1rem',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            fontFamily: 'Barlow',
                            color: '#464255',
                            textAlign: 'center',
                            mr: isLastElement ? '0' : '2rem',
                            backgroundColor: 'rgb(252,252,252)',
                            display: 'flex',
                          
                            flexDirection: 'column',
                            height: '90%',
                            width: '32rem',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                              backgroundColor: '#e0f7fa',
                            },
                          }}
                        >
                        
                          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <img
                              style={{ width: '3rem', height: '3rem', borderRadius: '50%' }}
                              src={profile}
                              alt="profile"
                            />
                            <Box sx={{ marginLeft: '1rem', textAlign: 'left' }}>
                              <Box sx={{ fontWeight: '600', fontSize: '1.2rem', color: '#00796b' }}>
                                {comment.username}
                              </Box>
                              <Box sx={{ fontSize: '0.8rem', color: '#A3A3A3' }}>{comment.daysAgo} gün önce</Box>
                            </Box>
                          </Box>
                          <Box sx={{ display: 'flex' , alignItems: 'flex-start' , flexDirection: 'row' , justifyContent: 'space-between'}}>
                            <Box sx={{ textAlign: 'left', marginTop: '1rem', color: '#004d40', width: '65%' }}>
                              {comment.comment}
                              
                            </Box>
                            <img
                                style={{ width: '8rem', height: '8rem' , borderRadius: '50%' , marginRight : '1rem'}}
                                src={courtImage}
                                alt="courtImage"
                              />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' ,marginBottom: '2rem'}}>
                            <Box sx={{ fontWeight: 'bold', color: '#00796b' }}>{comment.rating}</Box>
                            <Box sx={{ marginLeft: '0.5rem' }}>{renderStars(comment.rating)}</Box>
                          </Box>
                        </Box>
                        
                      
                    </Box>
            );}
              
                  )}
              </Box>
              <Box sx={{ marginLeft: '0.5rem' , display: 'flex' , alignItems: 'self-end' , gap: '1rem'}}>
                <Box onClick={handlePrev}
                    sx={{
                      width: '3rem',
                      height: '3rem',
                      border: '2px solid #00B074',
                      borderRadius: '1rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#00B074',
                      cursor: 'pointer',
                      "&:hover": { backgroundColor: 'rgba(0, 176, 116, 0.1)' }
                    }}
                  >
                    &lt;
                </Box>
                <Box onClick={handleNext}
                    sx={{
                      width: '3rem',
                      height: '3rem',
                      border: '2px solid #00B074',
                      borderRadius: '1rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#00B074',
                      cursor: 'pointer',
                      "&:hover": { backgroundColor: 'rgba(0, 176, 116, 0.1)' }
                    }}
                  >
                    &gt;
                </Box>
              </Box>               
            </Box>
            
            
            
            );} )}
      </Box> 
      
      
        
    
        
    </Box>
  );
}


export default Comments;
