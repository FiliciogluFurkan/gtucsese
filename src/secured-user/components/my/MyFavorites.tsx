import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import FacilityCarts from "@/components/facility-carts/FacilityCarts";
import { Facility } from "@/interfaces/Facility";

const MyFavorites = (): JSX.Element => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const apiUrl = "https://server.sahancepte.com";
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/favorites`, {
          params: {
            userId: "9dec2f5c-8ee9-4af5-abc2-a70cc81770fb", // Replace with actual user ID
          },
        });
        setFacilities(response.data); // Assuming response data is a list of facilities
      } catch (err) {
        console.error("Failed to fetch favorite facilities", err);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <Box sx={{ width: "60%", overflowY: "auto", height: "100vh", flex: 1 }}>
      <div className="footballcourts-list-fields-section">
        {facilities.map((facility) => (
          <div key={facility.id}>
            <FacilityCarts facility={facility} />
            <hr className="footballcourts-container-informations-hr-list-section" />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default MyFavorites;
