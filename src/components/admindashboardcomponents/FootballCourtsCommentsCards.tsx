import { Box } from '@mui/material';
import profile from '/src/assets/images/admindashboard/placeholder.png';
interface Comment {
    username: string;
    comment: string;
    daysAgo: number;
    rating: number;
}

interface FootballCourtsCommentsCardsProps {
    comment: Comment;
}
const renderStars = (rating: number | undefined) => {
    if (rating === undefined || rating === null) return [];
    const stars = [];
    const filledStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 >= 0.5; 

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
                            <stop offset="50%" style={{ stopColor: '#FFFFFF' }} />
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


const FootballCourtsCommentsCards: React.FC<FootballCourtsCommentsCardsProps> = ({ comment }) => {
    return (
        <Box
            sx={{
                width: '30%',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Barlow',
                fontSize: '1rem',
                color: '#464255',
                textAlign: 'center',
                height: 'auto', // Yükseklik otomatik ayarlanır
                marginTop: '2rem',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '1rem', width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ paddingLeft: '1rem' }}>
                        <img style={{ width: '2rem', height: '2rem', borderRadius: '50%' }} src={profile} alt="profile" />
                    </Box>
                    <Box sx={{ fontWeight: '600', fontFamily: 'Barlow', fontSize: '1.2rem', color: '#464255', paddingLeft: '2rem' }}>
                        {comment.username}
                    </Box>
                    <Box sx={{ fontSize: '0.8rem', color: '#A3A3A3', fontFamily: 'Barlow', fontWeight: '400', paddingLeft: '6rem', paddingTop: '0.5rem' }}>
                        {comment.daysAgo} gün önce
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'left',
                        paddingLeft: '1rem',
                        paddingTop: '1.5rem',
                        whiteSpace: 'normal', // Alt satıra geçmeyi sağlar
                        wordBreak: 'break-word', // Uzun kelimelerin taşmasını engeller
                    }}
                >
                    {comment.comment}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '1rem',paddingLeft:'1rem' }}>
                    <Box>{comment.rating}</Box>
                    <Box sx={{paddingLeft: '1rem',paddingTop:'0.1rem'}}>{renderStars(comment.rating)}</Box>
                </Box>

            </Box>
        </Box>

    );
};

export default FootballCourtsCommentsCards;
