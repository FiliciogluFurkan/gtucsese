import React from 'react'
import { Box } from "@mui/material"
import Group from "/src/assets/images/admindashboard/group117.png"
import icon from "/src/assets/images/admindashboard/Icon.png"
import currentrezervation from "/src/assets/images/admindashboard/group118.png"
import canceledrezervation from "/src/assets/images/admindashboard/group121.png"
import totalprice from "/src/assets/images/admindashboard/group84.png"
import icon2 from "/src/assets/images/admindashboard/Icon1.png"
import { useState } from "react";
import FootballCourtsCommentsCards from './FootballCourtsCommentsCards'
import { useEffect } from "react";

function AdminDashboardDefault() {
  const [name, setName] = React.useState<string>("Ahmet");
  const [currentRezervations, setCurrentRezervations] = React.useState<number>(75);
  const [totalRezervations, setTotalRezervations] = React.useState<number>(380);
  const [cancelledRezervations, setCancelledRezervations] = React.useState<number>(21);
  const [totalPrice, setTotalPrice] = React.useState<number>(100);

  useEffect(() => {
    setName("Ahmet");
    setCurrentRezervations(75);
    setTotalRezervations(380);
    setCancelledRezervations(21);
    setTotalPrice(100);
    console.log(totalPrice);
  }, []); 

  const comments = [
    {
      username: "Ahmet Yılmaz",
      comment: "Harika bir saha, zemini çok iyi.Yiyecek ve içecek olsa daha iyi olurdu.Maçtan sonra terli terli dışarda yemek yemeden burada yiyip evimize giderdik.",
      daysAgo: 2,
      rating: 5
    },
    {
      username: "Mehmet Kaya",
      comment: "Işıklandırma yetersizdi.Saat 8 oldu hala ışıklar açılmamıştı.",
      daysAgo: 4,
      rating: 3.5
    },
    {
      username: "Elif Demir",
      comment: "Çalışanlar çok ilgiliydi, sahada oynamak keyifliydi.",
      daysAgo: 1,
      rating: 4.5
    },
    {
      username: "Hüseyin Çelik",
      comment: "Saha biraz bakımsız ama yine de keyifliydi.",
      daysAgo: 5,
      rating: 3
    },
    {
      username: "Ayşe Öztürk",
      comment: "Oldukça ferah ve geniş bir saha. Tavsiye ederim.",
      daysAgo: 7,
      rating: 5
    },
    {
      username: "Emre Şahin",
      comment: "Otopark sorunluydu, biraz daha iyi olabilirdi.",
      daysAgo: 10,
      rating: 2.4
    },
    {
      username: "Fatma Aydın",
      comment: "Fiyat performans olarak gayet iyi.",
      daysAgo: 3,
      rating: 4
    },
    {
      username: "Ali Yıldırım",
      comment: "Saha güzel ama duşlar biraz kirliydi.",
      daysAgo: 6,
      rating: 3
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    if (currentIndex < comments.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };




  return (

    <Box sx={{ backgroundColor: '#F3F2F7', display: 'flex', flexDirection: 'column', paddingLeft: '3rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '4rem' }}>
        <Box sx={{ fontFamily: 'Barlow', fontWeight: 700, fontSize: '2rem', color: '#464255' }}>
          Admin Paneli !
        </Box>
        <Box sx={{ fontFamily: 'Barlow', fontWeight: 400, fontSize: '1rem', color: '#A3A3A3', marginTop: '1rem' }}>
          Merhaba {name}.Halısahalarını admin olarak yönetebilirsin.
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4rem',
        gap: '1rem',
      }}>
        <Box sx={{
          width: '18rem',
          height: '11rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }} >
          <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '3rem', paddingTop: '2rem' }}>
            <Box sx={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              backgroundColor: 'rgb(0,176,116,0.35)',
              alpha: 0.15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <img src={currentrezervation} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem' }}>
              <Box sx={{ fontSize: '3rem', fontFamily: 'Barlow', fontWeight: 700, color: '#464255' }}>
                {currentRezervations}
              </Box>
              <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#464255' }}>
                Aktif Randevu
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.8rem' }}>
                <Box>
                  <img style={{ width: '1.5rem', height: '1.5rem' }} src={icon} alt="icon" />
                </Box>
                <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#A3A3A3', paddingTop: '0.2rem' }}>
                  %4 (30 days)
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box sx={{
          width: '18rem',
          height: '11rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }} >
          <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '3rem', paddingTop: '2rem' }}>
            <Box sx={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              backgroundColor: 'rgb(0,176,116,0.35)',
              alpha: 0.15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <img src={Group} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem' }}>
              <Box sx={{ fontSize: '3rem', fontFamily: 'Barlow', fontWeight: 700, color: '#464255' }}>
                {totalRezervations}
              </Box>
              <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#464255' }}>
                Toplam Randevu
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.8rem' }}>
                <Box>
                  <img style={{ width: '1.5rem', height: '1.5rem' }} src={icon} alt="icon" />
                </Box>
                <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#A3A3A3', paddingTop: '0.2rem' }}>
                  %15 (30 days)
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box sx={{
          width: '18rem',
          height: '11rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }} >
          <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '4rem', paddingTop: '2rem' }}>
            <Box sx={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              backgroundColor: 'rgb(0,176,116,0.35)',
              alpha: 0.15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <img src={canceledrezervation} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem' }}>
              <Box sx={{ fontSize: '3rem', fontFamily: 'Barlow', fontWeight: 700, color: '#464255' }}>
                {cancelledRezervations}
              </Box>
              <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#464255' }}>
                İptal Randevu
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.8rem' }}>
                <Box>
                  <img style={{ width: '1.5rem', height: '1.5rem' }} src={icon2} alt="icon" />
                </Box>
                <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#A3A3A3', paddingTop: '0.2rem' }}>
                  %4 (30 days)
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box sx={{
          width: '18rem',
          height: '11rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }} >
          <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '4rem', paddingTop: '2rem' }}>
            <Box sx={{
              width: '5rem',
              height: '5rem',
              borderRadius: '50%',
              backgroundColor: 'rgb(0,176,116,0.35)',
              alpha: 0.15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <img src={totalprice} alt="your image" style={{ width: 'auto', height: 'auto', objectFit: 'cover' }} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem' }}>
              <Box sx={{ fontSize: '3rem', fontFamily: 'Barlow', fontWeight: 700, color: '#464255' }}>
                {currentRezervations}
              </Box>
              <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#464255' }}>
                Toplam Para
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.8rem' }}>
                <Box>
                  <img style={{ width: '1.5rem', height: '1.5rem' }} src={icon2} alt="icon" />
                </Box>
                <Box sx={{ fontSize: '1rem', fontFamily: 'Barlow', fontWeight: 400, color: '#A3A3A3', paddingTop: '0.2rem' }}>
                  %12 (30 days)
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '4rem' }}>
        <Box sx={{ fontFamily: 'Barlow', fontWeight: 700, fontSize: '2rem', color: '#464255' }}>
          Kullanıcı Yorumları
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 'auto',
            gap: '1rem',
            paddingRight: '4rem'
          }}
        >

          <Box onClick={handlePrevious}
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

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '-3rem',
        gap: '1rem',
        overflow: 'hidden',
        justifyContent: 'center'
      }}>
        {comments.slice(currentIndex, currentIndex + 3).map((comment, index) => (
          <FootballCourtsCommentsCards key={index} comment={comment} />
        ))}
      </Box>
      <Box sx={{ marginTop: '5rem' }}>
        hello
      </Box>

      

    </Box>

  )
}

export default AdminDashboardDefault






