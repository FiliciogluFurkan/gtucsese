import { useEffect, useState } from 'react';
import { Card, Avatar, Typography, Divider, Box, CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import { useAuth } from 'react-oidc-context';
import { Account } from '@/interfaces/Account';
import { parseJwt } from '@/services/ParseJwt';

const AdminAccount = () => {
  const [user, setUser] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;
  const authState = useAuth();


  const fetchUserDetails = async (userId: string) => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/account/${userId}`);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const userId = parseJwt(authState.user?.access_token).sub;
    fetchUserDetails(userId);
  }, []);

  if (loading) {
    return <CircularProgress sx={{ display: 'block', margin: 'auto' }} />;
  }

  if (!user) {
    return <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>Kullanıcı bilgileri alınamadı.</Typography>;
  }

  return (
    <Card sx={{
      maxWidth: 600,
      margin: 'auto',
      padding: 4,
      borderRadius: 8,
      boxShadow: 15,
      marginTop: "4rem",
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(200, 225, 255, 0.8) 100%)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 20,
      },
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 3,
      }}>
        <Avatar
          src={user.profilePicture}
          alt={`${user.firstName} ${user.lastName}`}
          sx={{
            width: 130,
            height: 130,
            marginBottom: 2,
            boxShadow: 15,
            border: '4px solid #ffffff',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1) rotate(360deg)',
            },
          }}
        />
        <Typography variant="h5" align="center" sx={{ marginTop: 2, fontWeight: 'bold', color: '#333' }}>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'gray', marginTop: 1 }}>
          {user.email}
        </Typography>
      </Box>
      <Divider sx={{ marginY: 3, backgroundColor: '#ddd' }} />
      
      {/* Contact Information Section */}
      <Box sx={{ paddingX: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#555' }}>Telefon:</Typography>
            <Typography variant="body1" sx={{ color: '#444' }}>{user.phoneNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#555' }}>Email:</Typography>
            <Typography variant="body1" sx={{ color: '#444' }}>{user.email}</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Admin-Specific Message */}
      <Box sx={{ paddingX: 3, marginTop: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>Admin Paneli</Typography>
        <Typography variant="body2" sx={{ color: '#666', marginTop: 1 }}>
          Bizi tercih ettiğiniz için teşekkür ederiz! Yönetim panelinde yapacağınız işlemler, platformumuzun daha verimli ve kullanıcı dostu olmasına yardımcı olacaktır. Herhangi bir sorunuz veya öneriniz olduğunda, lütfen bizimle iletişime geçmekten çekinmeyin. İyi çalışmalar!
        </Typography>
      </Box>

      {/* Admin Specific Announcements */}
      <Box sx={{ paddingX: 3, marginTop: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>Duyurular</Typography>
        <Typography variant="body2" sx={{ color: '#666', marginTop: 1 }}>
          Şu anda platformumuzda yeni özellikler üzerinde çalışıyoruz. Lütfen her gün güncellemeleri kontrol edin ve admin panelindeki yeniliklere göz atın!
        </Typography>
      </Box>
    </Card>
  );
};

export default AdminAccount;
