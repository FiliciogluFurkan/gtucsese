import { Box, Typography, Button, } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FootballCourt } from '../interface/FootballCourt';
import { useParams } from 'react-router-dom';
import image1 from '../assets/images/courtS2.jpg';
import image2 from '../assets/images/court-2.jpg';
import image3 from '../assets/images/court-3.jpg';
import CommentOfCourts from "../components/CommentOfCourts";
import ReservationSystem from "../components/ReservationSystem";
import { Bath, Utensils,CreditCard,Toilet,SquareParking } from 'lucide-react';  

function FootballCourtsDetails() {
  const params = useParams();

  const [footballCourt, setFootballCourt] = useState<FootballCourt | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dummy, setDummy] = useState<DummyFootballCourt | null>(null);

  interface DummyFootballCourt {
    id: number;
    name: string;
    image: string[];
    description: string;
    rating: number;
    number_of_reviews: number;
    reviews: string[];
    fields: String;
    services: string[];
    price: number;
    city: string;
    district: string;
    phoneNumber: string;
    location: string;
  }


  interface Review {
    id: number;
    userId: number;
    review: string;
    day: string;
    rating: number;
    fullname: string;
  }


  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('https://db.aymoose.devodev.online/fields');
        response.data.forEach((item: FootballCourt) => {
          if (item.id === Number(params.id)) {
            setFootballCourt(item);
            console.log('Selected Field:', item);
          }
        });
      } catch (err) {
        console.error('Error fetching fields:', err);
      }
    };
    fetchFields();
  }, [params.id]);

  useEffect(() => {
    const dummyData: DummyFootballCourt = {
      id: 1,
      name: 'Aydın Halısaha',
      image: [image1, image2, image3],
      description:
        'Tesisimiz Mustafa Kemal Paşa metrobüs durağının yanında bulunmaktadır. Detaylı konum bilgisine sayfanın en altındaki "Konum" bölümünden ulaşabilirsiniz.',
      rating: 2.5,
      number_of_reviews: 10,
      reviews: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkOREMt9spAiPAXEimAysKFe580eAkTSTTA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkOREMt9spAiPAXEimAysKFe580eAkTSTTA&s',
      ],
      services: ['6+6 · 7+7 · 8+8 Sahalar · Ayakkabı . Su . Duş'],
      phoneNumber: '0850 455 85 45',
      fields: '6+6 · 7+7 · 8+8',
      price: 150,
      city: 'İstanbul',
      district: 'Kadıköy',
      location: 'Göztepe, Tütüncü Mehmet Efendi Cd. 18/A, 34730 Kadıköy/İstanbul',
    };
    if (footballCourt !== null) {
      footballCourt.rating = Math.floor(Math.random() * 5) + 1;
    }
    setDummy(dummyData);
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (dummy?.image.length || 1) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (dummy?.image.length || 1) - 1 ? 0 : prevIndex + 1
    );
  };

  let rating: number | undefined = dummy?.rating;

  const renderStars = () => {
    if (rating === undefined || rating === null) return [];

    const stars = [];
    const filledStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 >= 0.5; 

    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
  
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFA500" viewBox="0 0 24 24" stroke="#000000" strokeWidth="0.5">
            <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
          </svg>
        );
      } else if (i === filledStars + 1 && hasHalfStar) {
 
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFA500" viewBox="0 0 24 24" stroke="#000000" strokeWidth="0.5">
            <defs>
              <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" style={{ stopColor: '#FFA500' }} /> 
                <stop offset="50%" style={{ stopColor: '#FFFFFF' }} /> 
              </linearGradient>
            </defs>
            <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" fill="url(#halfStarGradient)" />
          </svg>
        );
      } else {
       
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#000000" strokeWidth="0.5">
            <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
          </svg>
        );
      }
    }

    return stars;
  };


  const [reviews, setReviews] = useState<Review[]>([]);

  const dummyReviews: Review[] = [
    {
      id: 1,
      userId: 101,
      review: "Harika bir deneyimdi! Tesis oldukça temiz ve çalışanlar çok ilgiliydi.",
      day: "3",
      rating: 5,
      fullname: "Mustafa Kemal",
    },
    {
      id: 2,
      userId: 102,
      review: "Genel olarak iyiydi ama yemekler biraz daha iyi olabilirdi.",
      day: "4",
      rating: 4.2,
      fullname: "Mehmet Efendi",
    },
    {
      id: 3,
      userId: 103,
      review: "Tesisin konumu güzeldi ama odalar biraz eskiydi.",
      day: "2",
      rating: 4.8,
      fullname: "Hasan Öztürk",
    },
    {
      id: 4,
      userId: 104,
      review: "Çok memnun kalmadım, temizlik yeterli değildi ve personel ilgisizdi.Kesinlikle çok memnun kalmadım, temizlik yeterli değildi ve personel ilgisizdi.",
      day: "23",
      rating: 2,
      fullname: "Ömer Özkan",
    },
    {
      id: 5,
      userId: 105,
      review: "Tam bir hayal kırıklığı. Bir daha asla gitmem.",
      day: "6",
      rating: 1,
      fullname: "Furkan Fevzi",
    },
  ];

  useEffect(() => {
    setReviews(dummyReviews);
  }, []);

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  interface Feature {
    icon: React.ReactNode;
    name: string;
  }
  const features: Feature[] = [
    { icon: <Bath size={18} />, name: 'Duş' },
    { icon: <Utensils size={18} />, name: 'Yemek' },
    { icon: <Bath size={18} />, name: 'Havuz' },
    { icon: <Toilet size={18} />, name: 'Tuvalet' },  
    { icon: <SquareParking size={18} />, name: 'Otopark' },  
    { icon: <CreditCard size={18} />, name: 'Kredi Kartı' },  
    { icon: <Bath size={18} />, name: 'Sauna' },
    { icon: <Utensils size={18} />, name: 'Bar' },
    { icon: <Bath size={18} />, name: 'Spa' },
  ];


  return (
    <Box sx={{ width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
          paddingTop: '8rem',
          // backgroundColor: 'rgb(245, 245, 245)',
          height: '90vh',
          paddingBottom: '3rem',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '40vw',
            height: '100vh',
            position: 'relative',
            marginLeft: '5rem',

          }}
        >
          <img
            src={dummy?.image[currentImageIndex]}
            alt={'footballCourt'}
            style={{
              width: '45vw',
              height: '60vh',
              objectFit: 'cover',
              borderRadius: '1rem'
            }}
          />
          <button
            onClick={handlePrevious}
            style={{
              position: 'absolute',
              top: '30%',
              left: '10px',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            {'<'}
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '30%',
              left: '41vw',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            {'>'}
          </button>
        </Box>

        <Box
          sx={{
            width: '60vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: "10rem"

          }}
        >
          <Typography variant='h4' sx={{ fontFamily: 'Montserrat", sans-serif', fontSize: '1rem', color: '#333' }}>
            {dummy?.name.toUpperCase()}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '0.5rem' }}>
            <Typography sx={{}}>
              {dummy?.rating}
            </Typography>
            <Box sx={{ paddingTop: '0.2rem', paddingLeft: '0.5rem' }}>
              {renderStars()}
            </Box>
            <Typography sx={{ paddingLeft: '1rem', color: '#666' }}>
              {reviews.length} Değerlendirme
            </Typography>

          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '1rem' }}>
            <span style={{ color: '#696969' }} className="material-symbols-outlined">
              schedule
            </span>
            <Typography sx={{ paddingLeft: '0.5rem', color: '#666' }}>
              {dummy?.fields} Sahalar
            </Typography>

          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '1rem' }}>
            <span style={{ color: '#696969' }} className="material-symbols-outlined">
              call
            </span>
            <Typography sx={{ paddingLeft: '0.5rem', color: '#666' }}>
              {dummy?.phoneNumber}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '1rem',
              color: '#333',
              fontWeight: 'bold',
              paddingTop: '2.5rem',
            }}
          >
            Tesis Açıklaması
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '1rem',
              color: '#333',
              paddingTop: '1rem',
              width: '35vw',
            }}
          >
            {dummy?.description}
          </Typography>


          <Typography sx={{ paddingTop: '2rem', fontSize: '1rem', color: '#333', fontWeight: 'bold' }}>
            Konumu
          </Typography>


          <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '0.5rem' }}>

            <span style={{ color: '#696969' }} className="material-symbols-outlined">
              location_on
            </span>

            <Typography
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: '1rem',
                color: '#333',
              }}
            >
              {dummy?.location}
            </Typography>

          </Box>

        </Box>
      </Box>
      <Box sx={{ width: '100vw', display: 'flex', flexDirection: 'row' }}>
        <Box
          sx={{
            paddingLeft: '8rem',
            width: '55vw',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh',
            maxHeight: '70vh',
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              width: '8px',
              marginLeft: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#7a7c7b',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f0f0f0',
              marginLeft: '4px',
            },
          }}
        >
          <Typography
            fontWeight={700}
            sx={{ fontSize: '1.5rem', color: '#333', fontFamily: 'Montserrat' }}
          >
            Yorumlar ({reviews.length})
          </Typography>
          <hr style={{ marginTop: '1rem', width: '40vw' }} />
          <Box>
            {reviews.slice(0, visibleCount).map((review, index) => (
              <CommentOfCourts key={index} review={review} />
            ))}

            {visibleCount < reviews.length && (
              <Box marginTop={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#434945',
                    color: '#FFFFFF',
                    borderRadius: '0.5rem',
                    padding: '2px 5px',
                    fontSize: '16px',
                    '&:hover': {
                      backgroundColor: '#7a7c7b',
                    },
                  }}
                  onClick={handleShowMore}
                >
                  Daha Fazla Göster
                </Button>
              </Box>
            )}
          </Box>
        </Box>



        <Box sx={{ width: '45vw' }}>
          <ReservationSystem />
        </Box>

      </Box>


      <Typography
        fontWeight={700}
        sx={{ fontSize: '1.5rem', color: '#333', fontFamily: 'Montserrat', marginTop: '7rem', marginLeft: '8rem' }}
      >
        Tesis Özellikleri
      </Typography>

      <Box sx={{ marginTop: '20px', width: '50vw',paddingLeft: '8rem',marginBottom: '10rem' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem',fontFamily: 'Montserrat',fontSize: '1rem', color: '#333' }}>
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem', 
              padding: '5px',
              width: 'calc(33.33% - 1rem)', 
            }}
          >
            {feature.icon}
            <Typography sx={{ fontSize: '1rem', color: '#333' }}>{feature.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>

    </Box>
  );
}

export default FootballCourtsDetails;
