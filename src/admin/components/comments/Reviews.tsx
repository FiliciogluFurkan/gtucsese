import { Box } from '@mui/material';
import courtImage from '/src/assets/images/court-3.jpg'
import { useState } from "react";
import { renderStars } from 'src/services/CommentService';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

const Review = (): JSX.Element => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const authState = useAuth();

  const [facilities, setFacilities] = useState<any[]>([]);
  const [review, setReview] = useState<any[]>([]);


  useEffect(() => {
    const fetchFacilityAndReviews = async () => {
      try {
        // Facilities verisini çek
        const facilityResponse = await axios.get(`${apiUrl}/api/v1/facilities`, {
        });
          console.log("FacilityResponse:")
          console.log(facilityResponse.data)

        if (facilityResponse.data && facilityResponse.data.length > 0) {
        
          const facilitiesData = facilityResponse.data;
          setFacilities(facilitiesData);

          // Reviews verisini çek (ilk facility.id'yi kullanarak)
          const reviewResponse = await axios.get(`${apiUrl}/api/v1/reviews`, {
            headers: {
              Authorization: `Bearer ${authState.user?.access_token}`,
            },
            params: {
              facility: facilitiesData[0]?.id,
            },
          });

          if (reviewResponse.data && reviewResponse.data.length > 0) {
            const reviews = reviewResponse.data;
            console.log("Reviews:");
            console.log(reviews);

            const transformedReviews = reviews.map((review: any) => {

              const createdAtDate = new Date(review.createdAt);
              const today = new Date();
              const daysAgo = Math.floor(
                (today.getTime() - createdAtDate.getTime()) / (1000 * 60 * 60 * 24)
              );

              return {
                username: review.author || "Anonim Kullanıcı", // Backend'den gelen "author" alanını kullan
                content: review.content, // Backend'den gelen yorumu al
                daysAgo, // Hesaplanan gün farkı
                rating: review.rating, // Backend'den gelen rating
                title: review.title, // Backend'den gelen başlık
                profilePicture: review.profilePicture, // Backend'den gelen profil fotoğrafı
              };
            });
            console.log("Transformed reviews:");
            console.log(transformedReviews);
            setReview(transformedReviews);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchFacilityAndReviews();
  },[]); // Sadece bir kez çalıştır



  const [startIndex, setStartIndex] = useState(0);
  const ReviewPerPage = 2;

  const handleNext = () => {
    // Mevcut yorum sayısından fazla ilerlemeyi önle
    if (startIndex + ReviewPerPage < review.length) {
      setStartIndex(startIndex + ReviewPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - ReviewPerPage >= 0) {
      setStartIndex(startIndex - ReviewPerPage);
    }
  };
  const currentReview = review.slice(startIndex, startIndex + ReviewPerPage);

  return (
    <Box sx={{ width: '100%', padding: '2rem', overflowX: 'hidden', height: '100%' }}>
      <Box sx={{}}>
        {facilities.map((court, courtIndex) => {
          let isLastCourt = (courtIndex === facilities.length - 1);
          return (
            <Box sx={{}}>
              <Box sx={{
                fontFamily: "Barlow",
                fontWeight: 700,
                fontSize: "2rem",
                color: "#464255",
                marginBottom: '1rem',
                mt: isLastCourt ? '1rem' : '0rem',
              }} >
                {court.name}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', position: 'relative' /* left: '-33rem' */ }} >
                {currentReview.map((comment, index) => {
                  let isLastElement = (index === review.length - 1);
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
                            src={comment.profilePicture}
                            alt="profile"
                          />
                          <Box sx={{ marginLeft: '1rem', textAlign: 'left' }}>
                            <Box sx={{ fontWeight: '600', fontSize: '1.2rem', color: '#00796b' }}>
                              {comment.username}
                            </Box>
                            <Box sx={{ fontSize: '0.8rem', color: '#A3A3A3' }}>{comment.daysAgo} gün önce</Box>
                          </Box>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row',fontFamily: 'Barlow', fontWeight: 500, fontSize: '1.2rem', color: '#00796b', marginTop: '1rem'}}>
                          {comment.title}
                          
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Box sx={{ textAlign: 'left', marginTop: '1rem', color: '#004d40', width: '65%' }}>
                            {comment.content}

                          </Box>
                          <img
                            style={{ width: '8rem', height: '8rem', borderRadius: '50%', marginRight: '1rem' }}
                            src={courtImage}
                            alt="courtImage"
                          />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                          <Box sx={{ fontWeight: 'bold', color: '#00796b' }}>{comment.rating}</Box>
                          <Box sx={{ marginLeft: '0.5rem' }}>{renderStars(comment.rating)}</Box>
                        </Box>
                      </Box>


                    </Box>
                    
                  );
                }

                )}
              </Box>
              <Box sx={{ marginLeft: '0.5rem', display: 'flex', alignItems: 'self-end', gap: '1rem' }}>
                {/* Önceki Buton */}
                <Box
                  onClick={handlePrev}
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    border: '2px solid #00B074',
                    borderRadius: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#00B074',
                    cursor: startIndex === 0 ? 'not-allowed' : 'pointer', // Başlangıçta 0 ise disabled olmalı
                    opacity: startIndex === 0 ? 0.5 : 1, // Disabled durumda opacity azalt
                    "&:hover": { backgroundColor: startIndex === 0 ? 'transparent' : 'rgba(0, 176, 116, 0.1)' },
                  }}
                >
                  &lt;
                </Box>

                {/* Sonraki Buton */}
                <Box
                  onClick={handleNext}
                  sx={{
                    width: '3rem',
                    height: '3rem',
                    border: '2px solid #00B074',
                    borderRadius: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#00B074',
                    cursor: startIndex + ReviewPerPage >= review.length ? 'not-allowed' : 'pointer', // Sonraki buton son sayfadaysa disabled
                    opacity: startIndex + ReviewPerPage >= review.length ? 0.5 : 1, // Disabled durumda opacity azalt
                    "&:hover": { backgroundColor: startIndex + ReviewPerPage >= review.length ? 'transparent' : 'rgba(0, 176, 116, 0.1)' },
                  }}
                >
                  &gt;
                </Box>
              </Box>

            </Box>

          );
        })}
      </Box>

    </Box>
  );
}


export default Review;