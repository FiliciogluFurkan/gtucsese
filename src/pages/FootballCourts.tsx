import * as React from 'react';
//import { Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FootballCourtCarts from '../components/FootballCourtCarts';
import "../css/footballcourts/FootballCourts.css";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Popover, List, ListItem, ListItemText, MenuItem, SelectChangeEvent, Select } from '@mui/material'
import { FootballCourt } from '../interface/FootballCourt';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const cities = [
  'İstanbul',
  'Ankara',
  'İzmir',
  'Bursa',
  'Antalya',
];

const districts = [
  'Kadıköy',
  'Çankaya',
  'Bornova',
  'Osmangazi',
  'Muratpaşa',
];


/* function getStyles(name: string, selected: readonly string[], theme: Theme) {
  return {
    fontWeight: selected.includes(name)
     / ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
    backgroundColor: selected.includes(name) ? theme.palette.action.hover : 'transparent',
  };
}
 */
export default function FootballCourts() {

  const [fields, setFields] = useState<FootballCourt[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('Cumhuriyet, Gebze teknik üniversitesi tenis kulübü, 41400 Gebze/Kocaeli');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [listType, setListType] = useState<'cities' | 'districts' | null>(null);
  const [sortOption, setSortOption] = useState('recommended');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('https://db.aymoose.devodev.online/fields');
        setFields(response.data);
        console.log(response.data);
      } catch (err) {
      }
    };
    fetchFields();
    console.log(fields);
  }, []);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, type: 'cities' | 'districts') => {
    setAnchorEl(event.currentTarget);
    setListType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setListType(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // const theme = useTheme();
  const [selectedCity, setSelectedCity] = React.useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = React.useState<string>('');

  const handleSelect = (item: string) => {
    if (listType === 'cities') {
      setSelectedCity(item);
      setSelectedDistrict('')
    } else if (listType === 'districts') {
      setSelectedDistrict(item);
    }
    handleClose();
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;

    setSortOption(selectedValue);
    fetchSortedData(selectedValue);
  };


  type SortOption = 'recommended' | 'priceAsc' | 'priceDesc' | 'ratingAsc' | 'ratingDesc';
  const fetchSortedData = async (sortOption: string) => {
    const validSortOptions: SortOption[] = ['recommended', 'priceAsc', 'priceDesc', 'ratingAsc', 'ratingDesc'];

    if (validSortOptions.includes(sortOption as SortOption)) {
      try {
        // const response = await axios.get(`/api/items?sortOption=${sortOption}`);
        //  setFields(response.data);  

      } catch (error) {
        console.error("Error fetching sorted data:", error);
      }
    } else {
      console.error("Invalid sort option");
    }
  };


  return (
    <div>
      <div style={{ paddingTop: '4rem' }}> </div>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100vw' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: 2,
            overflow: 'hidden',
            width: '40rem',
            marginTop: '2.5rem',
            marginLeft: '2.5rem',
            height: '3.5rem',
          }}
        >
          <Button
            onClick={(e) => handleClick(e, 'cities')}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 0.75rem',
              borderRight: '1px solid #ccc',
              borderRadius: 0,
              color: '#333',
              textTransform: 'none',
              height: '100%',
              minHeight: '3.5rem',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography variant="body1" sx={{ color: '#888' }}>
              {selectedCity ? selectedCity : 'İl Seçiniz'}
            </Typography>
            <SearchIcon sx={{ color: '#1976d2' }} />
          </Button>

          <Button
            onClick={(e) => handleClick(e, 'districts')}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 0.75rem',
              borderRadius: 0,
              color: '#333',
              textTransform: 'none',
              height: '100%',
              minHeight: '3rem',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <Typography variant="body1" sx={{ color: '#888' }}>
              {selectedDistrict ? selectedDistrict : 'İlçe Seçiniz'}
            </Typography>
            <SearchIcon sx={{ color: '#1976d2' }} />
          </Button>

        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          <List
            sx={{
              width: '14rem',
              maxHeight: '15rem',
              overflowY: 'auto',
            }}
          >
            {(listType === 'cities' ? cities : districts).map((item, index) => (
              <ListItem
                component="li"
                key={index}
                onClick={() => handleSelect(item)}
                sx={{
                  '&:hover': {
                    backgroundColor: '#d3e3fd',
                  },
                  backgroundColor: 'rgba(0, 0, 0, 50, 0.5)',
                }}
              >
                <ListItemText primary={item} sx={{ color: '#333' }} />
              </ListItem>
            ))}
          </List>
        </Popover>


        <Box
          sx={{
            marginTop: '2.2rem',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '18%',
              marginRight: '10rem',
              height: '3rem',
            }}
          >
            <Select
              value={sortOption}
              onChange={handleSortChange}
              sx={{
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '0.25rem',
                height: '100%',
                '& .MuiSelect-icon': { color: '#1976d2' },

              }}
            >

              <MenuItem value="recommended" sx={{ backgroundColor: '#f1f1f1', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                Önerilen
              </MenuItem>
              <MenuItem value="priceAsc" sx={{ backgroundColor: '#f1f1f1', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                Fiyat: Azdan Çoka
              </MenuItem>
              <MenuItem value="priceDesc" sx={{ backgroundColor: '#f1f1f1', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                Fiyat: Çoktan Aza
              </MenuItem>
              <MenuItem value="ratingAsc" sx={{ backgroundColor: '#f1f1f1', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                Puan: Azdan Çoka
              </MenuItem>
              <MenuItem value="ratingDesc" sx={{ backgroundColor: '#f1f1f1', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                Puan: Çoktan Aza
              </MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>

      <div style={{ marginTop: '1rem' }}>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <hr />
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ width: '60%', overflowY: 'auto', height: '100vh', flex: 1 }}>

          <div className='footballcourts-list-fields-section'>

            {fields.map((field) => {

              const handleMouseEnter = () => {
                setSelectedLocation(field.location);
              };

              const handleClick = () => {
                navigate(`/fields/field-details/${field.id}`);
              };

              return (
                <div
                  key={field.id}
                  onMouseEnter={handleMouseEnter}
                  onClick={handleClick}
                >
                  <FootballCourtCarts field={field} />
                  <hr className='footballcourts-container-informations-hr-list-section' />
                </div>
              );
            })}
          </div>
        </Box>

        <Box sx={{ width: '38rem', height: '100vh', flexShrink: 0 }}>
          <iframe className='football-courts-location-map-iframe'
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBjMQ2kwfcQ-vk2pue1mdt-rvKsEG8PwD8&q=${selectedLocation}`}
          >
          </iframe>
        </Box>
      </Box>


    </div>
  );
}
