import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FootballCourt } from '../interface/FootballCourt';
import { useParams } from 'react-router-dom';

function FootballCourtsDetails() {

  const params = useParams();


  const [footballCourt, setFootballCourt] = useState<FootballCourt>();

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('https://db.aymoose.devodev.online/fields');
        response.data.forEach((item: FootballCourt) => {
          if (item.id == Number(params.id)) {
            setFootballCourt(item);
            console.log("our field")
            console.log(item);
          }
        });
      } catch (err) {
      }
    };
    fetchFields();
  }, []);


  return (
    <Box sx={{
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: '8rem',
      backgroundColor: 'rgb(245, 245, 245)',
      height: 'auto',
      paddingBottom: '3rem',
      justifyContent: 'center',
    }}>

      {/* Image Section */}
      <Box sx={{
        marginLeft: '2rem',
        width: '60%',
        marginTop: '2rem',
        height: '35rem',
        backgroundImage: `url(${footballCourt?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px',
        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
        marginRight: '2rem',
      }} />

      {/* Information Section */}
      <Box sx={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        paddingLeft: '1rem',
      }}>

        {/* Court Name */}
        <Typography sx={{
          fontSize: '2.4rem',
          fontWeight: '700',
          color: '#333',
          marginBottom: '1rem',
          fontFamily: 'Roboto, sans-serif',
        }}>
          {footballCourt?.name.toUpperCase()}
        </Typography>

        {/* Available Football Courts */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.5rem',
          color: '#FF5C5C',
        }}>
          <Box sx={{
            fontSize: '2rem',
            marginRight: '0.8rem',
          }}>
            <span className="material-symbols-outlined">schedule</span>
          </Box>
          <Typography sx={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#444',
          }}>
            {footballCourt?.services}
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.5rem',
          color: '#FF5C5C',
        }}>
          <Box sx={{
            fontSize: '2rem',
            marginRight: '0.8rem',
          }}>
            <span className="material-symbols-outlined">call</span>
          </Box>
          <Typography sx={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#444',
          }}>
            {footballCourt?.location}
          </Typography>
        </Box>

        {/* Explanation Section */}
        <Typography sx={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#333',
          marginTop: '2rem',
        }}>
          Tesis Açıklaması
        </Typography>
        <Typography sx={{
          fontSize: '1.4rem',
          color: '#666',
          marginTop: '1rem',
          lineHeight: '1.8',
          maxWidth: '32rem',
        }}>
          Tesisimiz Mustafa Kemal Paşa metrobüs durağının yanında bulunmaktadır. Detaylı konum bilgisine sayfanın en altındaki "Konum" bölümünden ulaşabilirsiniz.  Rezervasyon yapmak için sayfanın en üst kısmındaki "Rezervasyon Yap" bölümünden istediğiniz tarih ve saati seçip rezervasyon oluşturabilirsiniz.
        </Typography>
      </Box>
    </Box>
  );
}

export default FootballCourtsDetails;
