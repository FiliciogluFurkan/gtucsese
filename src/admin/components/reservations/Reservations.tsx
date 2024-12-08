import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Badge } from '@mui/material';
import { Clock, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Randevu } from '@/interfaces/Randevu';


const dummyRandevular: Randevu[] = [
  {
    id: 1,
    tarih: '2024-03-15',
    saat: '14:00',
    kullaniciAdi: 'Ahmet Yılmaz',
    telefon: '0532 123 45 67',
    halaSaha: 'Çim Saha 1',
    durum: 'bekleyen',
  },
  {
    id: 2,
    tarih: '2024-03-16',
    saat: '16:30',
    kullaniciAdi: 'Mehmet Demir',
    telefon: '0545 678 90 12',
    halaSaha: 'Halı Saha 2',
    durum: 'onaylandi',
  },
  {
    id: 3,
    tarih: '2024-03-14',
    saat: '10:00',
    kullaniciAdi: 'Ayşe Kaya',
    telefon: '0555 987 65 43',
    halaSaha: 'Çim Saha 3',
    durum: 'bekleyen',
  },
];

const FacilityReservationManagement: React.FC = () => {
  const [randevular, setRandevular] = useState<Randevu[]>(dummyRandevular);

  const bekleyenRandevular = randevular.filter((r) => r.durum === 'bekleyen');
  const onaylananRandevular = randevular.filter((r) => r.durum === 'onaylandi');

  const randevuOnayla = (id: number) => {
    const guncelRandevular = randevular.map((randevu) =>
      randevu.id === id ? { ...randevu, durum: 'onaylandi' as const } : randevu
    );
    setRandevular(guncelRandevular);
  };

  
  interface RandevuKartiProps {
    randevu: Randevu;
    onay: boolean;
  }

  const RandevuKarti: React.FC<RandevuKartiProps> = ({ randevu, onay }) => (
    <Card sx={{ mb: 2, p: 2, display: 'flex', justifyContent: 'space-between' }}>
      <CardContent>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Calendar size={20} style={{ marginRight: 8, color: '#1976d2' }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {randevu.tarih}
            </Typography>
            <Clock size={20} style={{ margin: '0 8px', color: '#43a047' }} />
            <Typography variant="body2">{randevu.saat}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <MapPin size={20} style={{ marginRight: 8, color: '#d32f2f' }} />
            <Typography variant="body2">{randevu.halaSaha}</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {randevu.kullaniciAdi}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {randevu.telefon}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          {randevu.durum === 'bekleyen' && onay && (
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => randevuOnayla(randevu.id)}
              sx={{ mb: 1 }}
            >
              Onayla
            </Button>
          )}
          <Badge sx={{paddingLeft:"2rem",paddingTop:"0.5rem"}}
            badgeContent={randevu.durum === 'bekleyen' ? 'Bekliyor' : 'Onaylandı'}
            color={randevu.durum === 'bekleyen' ? 'warning' : 'success'}
          />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Halısaha Randevu Yönetimi
      </Typography>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <CheckCircle size={20} style={{ marginRight: 8, color: '#ffb300' }} />
            Bekleyen Randevular ({bekleyenRandevular.length})
          </Typography>
          {bekleyenRandevular.map((randevu) => (
            <RandevuKarti key={randevu.id} randevu={randevu} onay={true} />
          ))}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <CheckCircle size={20} style={{ marginRight: 8, color: '#43a047' }} />
            Onaylanan Randevular ({onaylananRandevular.length})
          </Typography>
          {onaylananRandevular.map((randevu) => (
            <RandevuKarti key={randevu.id} randevu={randevu} onay={false} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FacilityReservationManagement;
