import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "src/assets/images/courtS2.jpg";
import image2 from "src/assets/images/court-2.jpg";
import image3 from "src/assets/images/court-3.jpg";
import CommentOfCourts from "src/components/court-comments/CourtComments";
import ReservationSystem from "src/components/reservation-system/ReservationSystem";
import { renderStars } from "@/services/CommentService";
import { Facility } from "@/interfaces/Facility";
import {
  Bath,
  Utensils,
  CreditCard,
  Toilet,
  SquareParking,
} from "lucide-react";
import { Review } from "@/interfaces/Review";

const CourtDetails = (): JSX.Element => {
  const params = useParams();

  const [facility, setFacility] = useState<Facility | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dummy, setDummy] = useState<Facility| null>(null);

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const response = await axios.get(
          "https://db.aymoose.devodev.online/fields"
        );
        response.data.forEach((item:Facility) => {
          if (item.id === params.id) {
            setFacility(item);
            console.log("Selected Field:", item);
            console.log(facility)
          }
        });
      } catch (err) {
        console.error("Error fetching fields:", err);
      }
    };
    fetchFacility();
  }, [params.id]);

 
  useEffect(() => {
    const dummyData: Facility = {
      id: "1",
      name: "Aydın Halısaha",
      address: "Mustafa Kemal Paşa metrobüs durağı",
      city: "İstanbul",
      district: "Kadıköy",
      phone: "0850 455 85 45",
      courts: [], // Eğer sahalar (courts) bilgisi varsa burada doldurun.
      amenities: ["6+6 · 7+7 · 8+8 Sahalar", "Ayakkabı", "Su", "Duş"],
      location:
        "Göztepe, Tütüncü Mehmet Efendi Cd. 18/A, 34730 Kadıköy/İstanbul",
      openTime: "09:00",
      closeTime: "22:00",
      rating: (Math.random() * 4 + 1).toFixed(1), // 1.0 ile 5.0 arasında rastgele değer
      description:
        'Tesisimiz Mustafa Kemal Paşa metrobüs durağının yanında bulunmaktadır. Detaylı konum bilgisine sayfanın en altındaki "Konum" bölümünden ulaşabilirsiniz.',
      isActive: true,
      images: [
        image1,
        image2,
        image3,
      ],
      
    };

    setDummy(dummyData);
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (dummy?.images.length || 1) - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (dummy?.images.length || 1) - 1 ? 0 : prevIndex + 1
    );
  };

  const [reviews, setReviews] = useState<Review[]>([]);

  const dummyReviews: Review[] = [
    {
      id: 1,
      userId: 101,
      review:
        "Harika bir deneyimdi! Tesis oldukça temiz ve çalışanlar çok ilgiliydi.",
      day: "3",
      rating: 5,
      fullName: "Mustafa Kemal",
    },
    {
      id: 2,
      userId: 102,
      review: "Genel olarak iyiydi ama yemekler biraz daha iyi olabilirdi.",
      day: "4",
      rating: 4.2,
      fullName: "Mehmet Efendi",
    },
    {
      id: 3,
      userId: 103,
      review: "Tesisin konumu güzeldi ama odalar biraz eskiydi.",
      day: "2",
      rating: 4.8,
      fullName: "Hasan Öztürk",
    },
    {
      id: 4,
      userId: 104,
      review:
        "Çok memnun kalmadım, temizlik yeterli değildi ve personel ilgisizdi.Kesinlikle çok memnun kalmadım, temizlik yeterli değildi ve personel ilgisizdi.",
      day: "23",
      rating: 2,
      fullName: "Ömer Özkan",
    },
    {
      id: 5,
      userId: 105,
      review: "Tam bir hayal kırıklığı. Bir daha asla gitmem.",
      day: "6",
      rating: 1,
      fullName: "Furkan Fevzi",
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
    { icon: <Bath size={18} />, name: "Duş" },
    { icon: <Utensils size={18} />, name: "Yemek" },
    { icon: <Bath size={18} />, name: "Havuz" },
    { icon: <Toilet size={18} />, name: "Tuvalet" },
    { icon: <SquareParking size={18} />, name: "Otopark" },
    { icon: <CreditCard size={18} />, name: "Kredi Kartı" },
    { icon: <Bath size={18} />, name: "Sauna" },
    { icon: <Utensils size={18} />, name: "Bar" },
    { icon: <Bath size={18} />, name: "Spa" },
  ];

  return (
    <Box sx={{ width: "100vw", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          paddingTop: "8rem",
          // backgroundColor: 'rgb(245, 245, 245)',
          height: "90vh",
          paddingBottom: "3rem",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "40vw",
            height: "100vh",
            position: "relative",
            marginLeft: "5rem",
          }}
        >
          <img
            src={dummy?.images[currentImageIndex]}
            alt={"footballCourt"}
            style={{
              width: "45vw",
              height: "60vh",
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
          <button
            onClick={handlePrevious}
            style={{
              position: "absolute",
              top: "30%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            {"<"}
          </button>

          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "30%",
              left: "41vw",
              transform: "translateY(-50%)",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            {">"}
          </button>
        </Box>

        <Box
          sx={{
            width: "60vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Montserrat", sans-serif',
              fontSize: "1rem",
              color: "#333",
            }}
          >
            {dummy?.name.toUpperCase()}
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "row", paddingTop: "0.5rem" }}
          >
            <Typography sx={{}}>{dummy?.rating}</Typography>
            <Box sx={{ paddingTop: "0.2rem", paddingLeft: "0.5rem" }}>
              {renderStars(Number(dummy?.rating))}
            </Box>
            <Typography sx={{ paddingLeft: "1rem", color: "#666" }}>
              {reviews.length} Değerlendirme
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}
          >
            <span
              style={{ color: "#696969" }}
              className="material-symbols-outlined"
            >
              schedule
            </span>
            <Typography sx={{ paddingLeft: "0.5rem", color: "#666" }}>
              {dummy?.amenities}
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}
          >
            <span
              style={{ color: "#696969" }}
              className="material-symbols-outlined"
            >
              call
            </span>
            <Typography sx={{ paddingLeft: "0.5rem", color: "#666" }}>
              {dummy?.phone}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "1rem",
              color: "#333",
              fontWeight: "bold",
              paddingTop: "2.5rem",
            }}
          >
            Tesis Açıklaması
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "1rem",
              color: "#333",
              paddingTop: "1rem",
              width: "35vw",
            }}
          >
            {dummy?.description}
          </Typography>

          <Typography
            sx={{
              paddingTop: "2rem",
              fontSize: "1rem",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Konumu
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: "row", paddingTop: "0.5rem" }}
          >
            <span
              style={{ color: "#696969" }}
              className="material-symbols-outlined"
            >
              location_on
            </span>

            <Typography
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "1rem",
                color: "#333",
              }}
            >
              {dummy?.location}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100vw", display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            paddingLeft: "8rem",
            width: "55vw",
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            minHeight: "70vh",
            maxHeight: "70vh",
            overflowY: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "8px",
              marginLeft: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#7a7c7b",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f0f0f0",
              marginLeft: "4px",
            },
          }}
        >
          <Typography
            fontWeight={700}
            sx={{ fontSize: "1.5rem", color: "#333", fontFamily: "Montserrat" }}
          >
            Yorumlar ({reviews.length})
          </Typography>
          <hr style={{ marginTop: "1rem", width: "40vw" }} />
          <Box>
            {reviews.slice(0, visibleCount).map((review, index) => (
              <CommentOfCourts key={index} review={review} />
            ))}

            {visibleCount < reviews.length && (
              <Box marginTop={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#434945",
                    color: "#FFFFFF",
                    borderRadius: "0.5rem",
                    padding: "2px 5px",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "#7a7c7b",
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

        <Box sx={{ width: "45vw" }}>
          <ReservationSystem />
        </Box>
      </Box>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: "1.5rem",
          color: "#333",
          fontFamily: "Montserrat",
          marginTop: "7rem",
          marginLeft: "8rem",
        }}
      >
        Tesis Özellikleri
      </Typography>

      <Box
        sx={{
          marginTop: "20px",
          width: "50vw",
          paddingLeft: "8rem",
          marginBottom: "10rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "Montserrat",
            fontSize: "1rem",
            color: "#333",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "5px",
                width: "calc(33.33% - 1rem)",
              }}
            >
              {feature.icon}
              <Typography sx={{ fontSize: "1rem", color: "#333" }}>
                {feature.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourtDetails;