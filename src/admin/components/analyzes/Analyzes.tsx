import  { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, Grid, Chip, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { CalendarToday, AccessTime, LocationOn, Cancel, Block } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { tr } from 'date-fns/locale';
import { Facility } from '@/interfaces/Facility';
import { Court } from '@/interfaces/Court';
import { TimeSlot } from '@/interfaces/admin/TimeSlot';
import axios from 'axios';
import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { AppointmentCard  } from '@/interfaces/admin/AppointmentCard';

const AppointmentCardBlock = ({ randevu, status }: { randevu: any, status: string }) => (

  <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 }, p: 2 }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {randevu.firstName} {randevu.lastName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {randevu.phoneNumber}
          </Typography>
        </Box>
        <Chip
          label={status === 'CANCELLED' ? 'İptal' : 'Reddedildi'}
          color={status === 'CANCELLED' ? 'error' : 'warning'}
          icon={status === 'CANCELLED' ? <Cancel /> : <Block />}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CalendarToday sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="body2">{randevu.date}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <AccessTime sx={{ color: 'success.main', mr: 1 }} />
          <Typography variant="body2">{randevu.hour}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOn sx={{ color: 'error.main', mr: 1 }} />
          <Typography variant="body2">{randevu.courtName}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Analyzes = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('iptal');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [facility, setFacility] = useState<Facility | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<Court>();
  const [courts, setCourts] = useState<Court[]>([]);
  const [rejectedRandevular, setRejectedRandevular] = useState<any[]>([]);
  const [cancelledRandevular, setCancelledRandevular] = useState<any[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [cancelledReservations, setCancelledReservations] = useState<AppointmentCard[]>([]);
  const [rejectedReservations, setRejectedReservations] = useState<AppointmentCard[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const authState = useAuth();

  interface ResponseData {
    date: string;
    timeSlots: TimeSlot[];
  }

  const fetchUserDetails = async (userId: string) => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/account/${userId}`);
      return response.data;  // response.data, kullanıcı bilgilerini içeriyor
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;  // hata durumunda null döndür
    }
  };

  useEffect(() => {
    console.log(facility)
    console.log(timeSlots)
    const fetchFacility = async () => {
      try {
        let facilityResponse = await axios.get(`${apiUrl}/api/v1/facilities`, {
          headers: {
            Authorization: `Bearer ${authState.user?.access_token}`,
          },
        });

        console.log(facilityResponse.data);
        console.log("facility printed");
        setFacility(facilityResponse.data);
        setCourts(facilityResponse.data[0].courts);
        setSelectedCourt(facilityResponse.data[0].courts[0]);
      } catch (err) {
        console.error('Error fetching facilities:', err);
      }
    };

    fetchFacility();
  }, []);


  const formatDateToDayMonthYear = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const fetchTimeSlots = async (date: string, courtId: string) => {
    try {
      const response = await axios.get<ResponseData>(
        `${apiUrl}/api/v1/reservations/slots-rich/${courtId}/${date}`,
        {
          headers: {
            Authorization: `Bearer ${authState.user?.access_token}`,
          },
        }
      );

      console.log("Raw time slots response:", response);

      // Gelen veriyi dönüştür: sadece CANCELLED ve REJECTED olanları al
      const processedTimeSlots = response.data.timeSlots.map((slotGroup: any) => {
        if (slotGroup.length === 1) {
          // Alt dizide yalnızca 1 obje varsa, onu al
          return slotGroup[0];
        } else {
          // Alt dizide birden fazla obje varsa, sadece CANCELLED ve REJECTED olmayanları al
          return slotGroup.find(
            (slot: TimeSlot) =>
              slot.reservable !== null &&
              (slot.reservable.status === "CANCELLED" || slot.reservable.status === "REJECTED")
          ) || null;
        }
      });

      console.log("Processed time slots:", processedTimeSlots);

      // İşlenmiş veriyi state'e ata
      setTimeSlots(processedTimeSlots);

      const dummycancelledRandevular: any[] = [];
      const dummyrejectedRandevular: any[] = [];

      processedTimeSlots.forEach((slot) => {
        if (!slot || !slot.reservable) {
          // Eğer slot ya da slot.reservable null veya undefined ise burada işlem yapılmaz
          console.log("Invalid slot:", slot);
          return;  // İlgili slot'u geçiyoruz
        }

        if (slot.reservable.status === "CANCELLED") {
          dummycancelledRandevular.push(slot.reservable);
        } else if (slot.reservable.status === "REJECTED") {
          dummyrejectedRandevular.push(slot.reservable);
        }
      });

      setCancelledRandevular(dummycancelledRandevular);
      setRejectedRandevular(dummyrejectedRandevular);

      console.log("Cancelled randevularrr:", cancelledRandevular);
      console.log("Rejected randevularrr:", rejectedRandevular);

      const cancelledReservations1 = await Promise.all(
        dummycancelledRandevular.map(async (randevu) => {
          const userDetails = await fetchUserDetails(randevu.userId);  // userDetails'ı almak için await kullanıyoruz
          console.log("User details:", userDetails);
          return {
            id: randevu.id,
            date: randevu.date,
            hour: randevu.hour,
            firstName: userDetails?.firstName || '',
            lastName: userDetails?.lastName || '',
            phoneNumber: userDetails?.phoneNumber || '',
            courtName: selectedCourt?.name || '',
          };
        })
      );
      setCancelledReservations(cancelledReservations1);

  

      const rejectedReservations1 = await Promise.all(
        dummyrejectedRandevular.map(async (randevu) => {
          const userDetails = await fetchUserDetails(randevu.userId);  // fetchUserDetails'ı await ile çağırıyoruz
          return {
            id: randevu.id,
            date: randevu.date,
            hour: randevu.hour,
            firstName: userDetails?.firstName || '',
            lastName: userDetails?.lastName || '',
            phoneNumber: userDetails?.phoneNumber || '',
            courtName: selectedCourt?.name || '',
          };
        })
      );

      // State'e yeni veriyi set et
      console.log("rejectedReservations1:", rejectedReservations1);
      console.log("cancelledReservations1:", cancelledReservations1);
      setRejectedReservations(rejectedReservations1);


      console.log("Cancelled randevular:", cancelledReservations);
      console.log("Rejected randevular:", rejectedReservations);


    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  useEffect(() => {
    console.log("Selected date:", selectedDate);
    const formattedDate = formatDateToDayMonthYear(selectedDate);
    console.log("Formatted date:", formattedDate);
    console.log("Selected court:", selectedCourt?.id);



    if (selectedCourt && selectedDate) {
      fetchTimeSlots(formattedDate, String(selectedCourt.id));
    }
  }, [selectedDate, selectedCourt]);


  const handleCourtChange = (event: SelectChangeEvent<string>) => {
    const selectedCourtId = event.target.value;
    console.log("Selected court id:", selectedCourtId);
    console.log("helllooooo")
    const selectedCourt = courts.find((court) => String(court.id) === String(selectedCourtId));
    setSelectedCourt(selectedCourt);
  };
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Halısaha Randevu Yönetimi
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button
          variant={activeTab === 'iptal' ? 'contained' : 'outlined'}
          color="error"
          onClick={() => setActiveTab('iptal')}
          sx={{ mr: 1 }}
        >
          İptal Edilenler ({cancelledRandevular.length})
        </Button>
        <Button
          variant={activeTab === 'reddedildi' ? 'contained' : 'outlined'}
          color="warning"
          onClick={() => setActiveTab('reddedildi')}
        >
          Reddedilenler ({rejectedRandevular.length})
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 3 }}>
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="saha-select-label">Saha Seç</InputLabel>
          <Select
            labelId="saha-select-label"
            id="saha-select"
            value={String(selectedCourt?.id)}
            label="Saha Seç"
            onChange={handleCourtChange}
            sx={{
              '& .MuiSelect-outlined': { borderRadius: 2 },
            }}
          >
            {courts.map((court) => (
              <MenuItem key={court.id} value={court.id}> {/* Burada value'yu court.id olarak ayarlıyoruz */}
                {court.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            customInput={
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#90caf9',
                  color: '#000',
                  '&:hover': { backgroundColor: '#64b5f6' },
                  borderRadius: 2,
                }}
              >
                Tarih Seç
              </Button>
            }
            locale={tr}
          />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {activeTab === 'iptal' &&
          cancelledReservations.map((randevu) => (
            <Grid item xs={12} sm={6} key={randevu.id}>
              <AppointmentCardBlock  randevu={randevu} status={"CANCELLED"} />
            </Grid>
          ))}
        {activeTab === 'reddedildi' &&
          rejectedReservations.map((randevu) => (
            <Grid item xs={12} sm={6} key={randevu.id}>
              <AppointmentCardBlock  randevu={randevu} status={"REJECTED"} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Analyzes;
