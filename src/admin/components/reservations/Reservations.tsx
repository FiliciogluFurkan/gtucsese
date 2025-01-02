import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Badge, Modal } from '@mui/material';
import { Clock, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { PendingReservations } from '@/interfaces/admin/PendingAppointments';
import axios from 'axios';

const FacilityReservationManagement: React.FC = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [reservations, setReservations] = useState<any[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const authState = useAuth();
  const [pendingReservations, setPendingReservations] = useState<PendingReservations[]>([]);
  const [approvedReservations, setApprovedReservations] = useState<PendingReservations[]>([]);


  const fetchUserDetails = async (userId: string) => {
    console.log(reservations)
    try {
      const response = await axios.get(`${apiUrl}/api/v1/account/${userId}`);
      return response.data;  // response.data, kullanıcı bilgilerini içeriyor
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;  // hata durumunda null döndür
    }
  };

  useEffect(() => {
    try{
      fetchApprovedReservations();
    }catch(error){

    }
  }, []);

  const fetchCourtName = async (courtId: string) => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/courts/${courtId}`);
      return response.data.name;  // response.data, kullanıcı bilgilerini içeriyor
    } catch (error) {
      console.error("Error fetching court name:", error);
      return null;  // hata durumunda null döndür
    }
  };

  const fetchApprovedReservations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/reservations?type=owner&status=APPROVED`, {
        headers: {
          Authorization: `Bearer ${authState.user?.access_token}`,
        },
      });
  
      const reservationsData = response.data;
  
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Bugünün saatini sıfırlayarak sadece tarihi karşılaştırmak için
  
      const approvedReservations1 = await Promise.all(
        reservationsData
          .filter((randevu: any) => {
            // Tarihi dönüştür
            const [day, month, year] = randevu.date.split('-').map(Number); // Gün, Ay, Yıl olarak ayır
            const reservationDate = new Date(year, month - 1, day); // Ay 0 tabanlıdır
            reservationDate.setHours(0, 0, 0, 0); // Saatleri sıfırla
            return reservationDate >= today; // Karşılaştır
          })
          .map(async (randevu: any) => {
            const userDetails = await fetchUserDetails(randevu.userId);
            const courtName = await fetchCourtName(randevu.courtId);
  
            return {
              id: randevu.id,
              date: randevu.date,
              hour: randevu.hour,
              firstName: userDetails?.firstName || '',
              lastName: userDetails?.lastName || '',
              phoneNumber: userDetails?.phoneNumber || '',
              courtName: courtName || '',
            };
          })
      );
  
      setReservations(reservationsData);
      setApprovedReservations(approvedReservations1);
      console.log("Rezervasyonlar yüklendi (bugünden itibaren):", approvedReservations1);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/reservations?type=owner&status=PENDING`, {
        headers: {
          Authorization: `Bearer ${authState.user?.access_token}`,
        },
      });
  
      const reservationsData = response.data;
  
      const pendingReservations1 = await Promise.all(
        reservationsData.map(async (randevu:any) => {
          const userDetails = await fetchUserDetails(randevu.userId);
          const courtName = await fetchCourtName(randevu.courtId);
  
          return {
            id: randevu.id,
            date: randevu.date,
            hour: randevu.hour,
            firstName: userDetails?.firstName || '',
            lastName: userDetails?.lastName || '',
            phoneNumber: userDetails?.phoneNumber || '',
            courtName: courtName || '',
          };
        })
      );
  
      setReservations(reservationsData);
      setPendingReservations(pendingReservations1);
      console.log("Rezervasyonlar yüklendi:", pendingReservations1);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    fetchReservations();
  }, []);

  const acceptReservation = async (id: string) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/api/v1/reservation/${id}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authState.user?.access_token}`,
          },
        }
      );
      console.log('Rezervasyon onaylandı:', response.data);
  
      await fetchReservations();
      await fetchApprovedReservations(); // Onaylanan rezervasyonları yeniden yükle
    } catch (error) {
      console.error('Randevu onaylama hatası:');
    }
  };

  const rejectReservation = async (id: string) => {
    try {
      const userConfirmed = window.confirm("Bu rezervasyonu iptal etmek istediğinize emin misiniz?");
      if (!userConfirmed) return;
  
      const response = await axios.post(
        `${apiUrl}/api/v1/reservations/${id}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authState.user?.access_token}`, // JWT token
          },
        }
      );
      await fetchReservations();
      console.log("Rezervasyon başarıyla iptal edildi:", response.data);

    } catch (error) {

    }
  };
  
  interface RandevuKartiProps {
    randevu: PendingReservations;
    onay: boolean;
    status: string;
  }

  const RandevuKarti: React.FC<RandevuKartiProps> = ({ randevu, onay,status }) => (
    <Card sx={{ mb: 2, p: 2, display: 'flex', justifyContent: 'space-between' }}>
      <CardContent>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Calendar size={20} style={{ marginRight: 8, color: '#1976d2' }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {randevu.date}
            </Typography>
            <Clock size={20} style={{ margin: '0 8px', color: '#43a047' }} />
            <Typography variant="body2">{randevu.hour}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <MapPin size={20} style={{ marginRight: 8, color: '#d32f2f' }} />
            <Typography variant="body2">{randevu.courtName}</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {randevu.firstName} {randevu.lastName}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {randevu.phoneNumber}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right',paddingTop:"1rem"}}>
          {status === 'bekleyen' && onay && (
            <>
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={() => acceptReservation(randevu.id)}
                sx={{ mb: 1 }}
              >
                Onayla
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => rejectReservation(randevu.id)}
                sx={{ mb: 1, ml: 1 }}
              >
                Reddet
              </Button>
            </>
          )}
          <Badge sx={{ paddingLeft: '2rem', paddingTop: '0.5rem' }}
            badgeContent={status === 'bekleyen' ? 'Bekliyor' : 'Onaylandı'}
            color={status === 'bekleyen' ? 'warning' : 'success'}
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
            Bekleyen Randevular ({pendingReservations.length})
          </Typography>
          {pendingReservations.map((randevu) => (
            <RandevuKarti key={randevu.id} randevu={randevu} onay={true} status={"bekleyen"} />
          ))}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <CheckCircle size={20} style={{ marginRight: 8, color: '#43a047' }} />
            Onaylanan Randevular ({approvedReservations.length})
          </Typography>
          {approvedReservations.map((randevu) => (
            <RandevuKarti key={randevu.id} randevu={randevu} onay={false} status={"reddedildi"} />
          ))}
        </Box>
      </Box>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'rgba(0, 0, 0, 0.8)', // Dark background with transparency
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: '#fff' }}>
            Randevu Reddedildi
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: '#fff' }}>
            Randevu başarıyla reddedildi.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default FacilityReservationManagement;