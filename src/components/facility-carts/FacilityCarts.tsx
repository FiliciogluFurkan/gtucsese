import "src/components/facility-carts/FacilityCarts.css";
import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { Facility } from "@/interfaces/Facility";

interface CourtCartProps {
  field: Facility;
}

const FacilityCarts = ({ field }: CourtCartProps): JSX.Element => {
  const fieldId = field;
  console.log(field);

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = async () => {
    const newFavoriteStatus = !isFavorited;

    try {
      const response = newFavoriteStatus
        ? await axios.post(`/api/favorites/${fieldId}`)
        : await axios.delete(`/api/favorites/${fieldId}`);

      if (response.status === 200) {
        setIsFavorited(newFavoriteStatus);
        console.log(
          `Court ID ${fieldId} favorilere ${
            newFavoriteStatus ? "eklendi" : "silindi"
          }.`
        );
      } else {
        console.error("Favori işlemi başarısız oldu.");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "39.5rem",
        height: "17.5rem",
        marginLeft: "3.2rem",
        display: "flex",
        flexDirection: "row",
        marginTop: "1.25rem",
      }}
    >
      <div>
        <img
          className="footballcourts-list-fields-section-card-images"
          src={field.images[0]}
        />
      </div>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box
          sx={{
            paddingLeft: "2rem",
            paddingTop: "2rem",
            fontSize: "0.9rem",
            fontWeight: 400,
            fontFamily: "Roboto",
            color: "rgb(107, 114, 128)",
            font: "inter",
          }}
        >
          <span>
            {field.city} / {field.district}{" "}
          </span>
        </Box>
        <Box
          sx={{
            paddingLeft: "2rem",
            paddingTop: "0.625rem",
            fontSize: "1.5rem",
            fontWeight: 500,
            fontFamily: "Roboto",
            color: "rgb(55, 65, 81)",
            font: "inter",
          }}
        >
          {field.name.toUpperCase()}
        </Box>

        <Box
          sx={{
            paddingLeft: "2rem",
            paddingTop: "1.5rem",
            width: "5rem",
            color: "rgb(229, 231, 235)",
          }}
        >
          <hr />
        </Box>

        <Box
          sx={{
            paddingLeft: "2rem",
            paddingTop: "1.5rem",
            width: "22rem",
            fontFamily: "inter",
            fontWeight: 400,
            color: "rgb(107, 114, 128)",
            font: "inter",
          }}
        >
          {field.amenities}
        </Box>

        <Box
          sx={{
            paddingLeft: "2rem",
            paddingTop: "1.5rem",
            width: "5rem",
            color: "rgb(229, 231, 235)",
          }}
        >
          <hr />
        </Box>

        <Box
          sx={{ paddingTop: "1.5rem", display: "flex", flexDirection: "row" }}
        >
          <Box
            sx={{
              paddingTop: "0.2rem",
              color: "rgb(55, 65, 81)",
              fontFamily: "inter",
              fontWeight: 400,
              paddingLeft: "2rem",
            }}
          >
            {field.rating}
          </Box>

          <Box
            sx={{
              fontSize: "20px",
              color: "#f59e0b",
              stroke: "rgb(252, 211, 77)",
              strokeWidth: "1px",
              paddingLeft: "0.4rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#f59e0b"
              stroke="rgb(252, 211, 77)"
              stroke-width="1"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          </Box>

          <Box
            sx={{
              paddingTop: "0.2rem",
              color: "rgb(55, 65, 81)",
              fontFamily: "inter",
              fontWeight: 400,
              paddingLeft: "0.2rem",
            }}
          >
            (100 inceleme)
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box
          sx={{
            paddingLeft: "4rem",
            paddingTop: "1.5rem",
          }}
          onClick={handleFavoriteToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="16"
            viewBox="0 0 24 24"
            fill={isFavorited ? "#FDA4AF" : "none"}
            stroke="rgb(55, 65, 81)"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </Box>

        <Box
          sx={{ paddingTop: "10rem", display: "flex", flexDirection: "row" }}
        >
          <Box
            sx={{
              width: "5.5rem",
              fontFamily: "inter",
              fontWeight: 500,
              color: "rgb(55, 65, 81)",
              fill: "rgb(55, 65, 81)",
              fontSize: "1.2rem",
            }}
          >
            {150 * 14} TL /
          </Box>

          <Box
            sx={{
              fontFamily: "inter",
              fontWeight: 400,
              fontSize: "1rem",
              color: "rgb(55, 65, 81)",
            }}
          >
            Saat
          </Box>
        </Box>
      </Box>
      <div>
        <hr />
      </div>
    </Box>
  );
};

export default FacilityCarts;
