import { Box, Grid } from '@mui/material';
import profile from '/src/assets/images/admindashboard/placeholder.png';

const renderStars = (rating: number) => {
  if (rating === undefined || rating === null) return [];
  const stars = [];
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= filledStars) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="#FFA500"
          viewBox="0 0 24 24"
          stroke="#000000"
          strokeWidth="0.5"
          style={{ marginRight: '5px', transition: 'transform 0.2s' }}
          className="star"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
        </svg>
      );
    } else if (i === filledStars + 1 && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="#FFA500"
          viewBox="0 0 24 24"
          stroke="#000000"
          strokeWidth="0.5"
          style={{ marginRight: '5px', transition: 'transform 0.2s' }}
          className="star"
        >
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
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000000"
          strokeWidth="0.5"
          style={{ marginRight: '5px', transition: 'transform 0.2s' }}
          className="star"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
        </svg>
      );
    }
  }

  return stars;
};


function Comments() {
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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <Grid container spacing={3} maxWidth="lg">
        {comments.map((comment, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Barlow',
                color: '#464255',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                flexDirection: 'column',
                height: '12rem',
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
              <Box sx={{ textAlign: 'left', marginBottom: '1rem', color: '#004d40' }}>
                {comment.comment}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ fontWeight: 'bold', color: '#00796b' }}>{comment.rating}</Box>
                <Box sx={{ marginLeft: '0.5rem' }}>{renderStars(comment.rating)}</Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Comments;
