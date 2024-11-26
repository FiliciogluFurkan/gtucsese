import { Box, Typography } from '@mui/material';
import Review from './FootballCourtsDetails';


interface Review {
    id: number;
    userId: number;
    review: string;
    day: string;
    rating: number;
    fullname: string;
}


interface CommentOfCourtsProps {
    review: Review;
}

const renderStars = (rating: number | undefined) => {
    if (rating === undefined || rating === null) return []; // Eğer rating tanımlanmadıysa, boş döngü döndür
    const stars = [];
    const filledStars = Math.floor(rating); // Dolu yıldız sayısını hesapla
    const hasHalfStar = rating % 1 >= 0.5; // Yarım yıldız kontrolü
  
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {

        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFA500" viewBox="0 0 24 24" stroke="#000000" strokeWidth="0.5" style={{ marginRight: '5px' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
          </svg>
        );
      } else if (i === filledStars + 1 && hasHalfStar) {
 
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFA500" viewBox="0 0 24 24" stroke="#000000" strokeWidth="0.5" style={{ marginRight: '5px' }}>
            <defs>
              <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" style={{ stopColor: '#FFA500' }} /> 
                <stop offset="50%" style={{ stopColor: '#D3D3D3' }} /> 
              </linearGradient>
            </defs>
            <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" fill="url(#halfStarGradient)" />
          </svg>
        );
      } else {
       
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#000000" strokeWidth="0.5" style={{ marginRight: '5px' }}>
            <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
          </svg>
        );
      }
    }
  
    return stars;
  };
  
  
const CommentOfCourts: React.FC<CommentOfCourtsProps> = ({ review }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '1rem', width: '40vw' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', color: '#333',fontWeight:'600' }}>
                {review.fullname}
            </Typography>

            <Typography
                sx={{
                    fontSize: '0.9rem',
                    color: '#666',
                    width: '11ch',

                }}
            >
                {review.day} gün önce
            </Typography>
        </Box>

       <Box sx={{display: 'flex', flexDirection: 'column', paddingTop: '1rem'}}>
       <Typography sx={{width: '30vw'}}>
            {review.review}
        </Typography>

        <Typography sx={{paddingTop: '0.5rem'}}>
            {renderStars(review.rating)}
        </Typography>
        <hr style={{marginTop: '1rem',width:'40vw'}}/>
       </Box>
    </Box>
);


export default CommentOfCourts;
