import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FootballCourtCarts from '../components/FootballCourtCarts';
/* import aydinFootballCourt from '/src/assets/images/fields/aydinHalisaha.png'
import kolezyumFootballCourt from '/src/assets/images/fields/kolezyum.png'
import boraFootballCourt from '/src/assets/images/fields/boraHalisaha.png'
import serdivanFootballCourt from '/src/assets/images/fields/serdivanHalisaha.png'
import alianzFootballCourt from '/src/assets/images/fields/alianz.png'
import adaFootballCourt from '/src/assets/images/fields/evin.jpg'
import clFootballCourt from '/src/assets/images/fields/cl.png' */ 

import { FootballCourt } from '../interface/FootballCourt';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      borderRadius: '0.5rem',
    },
  },
};



/*  const fields: FootballCourt[] = [
  {
    id: 1,
    name: 'Aydın Halısaha',
    image: aydinFootballCourt,
    rating: 4.5,
    place: 'Sakarya/erenler'
  },
  {
    id: 2,
    name: 'Kolezyum Halısaha',
    image: kolezyumFootballCourt,
    rating: 3,
    place: 'Sakarya/erenler'
  },
  {
    id: 3,
    name: 'Bora halısaha',
    image: boraFootballCourt,
    rating: 1.5,
    place: 'Sakarya/erenler'
  },
  {
    id: 4,
    name: 'Serdivan Halısaha',
    image: serdivanFootballCourt,
    rating: 4.5,
    place: 'Sakarya/erenler'
  },
  {
    id: 5,
    name: 'Alianz arena',
    image: alianzFootballCourt,
    rating: 2,
    place: 'Almanya/Munih'
  },
  {
    id: 6,
    name: 'Ada arena',
    image: adaFootballCourt,
    rating: 5,
    place: 'Sakarya/erenler'
  },
  {
    id: 7,
    name: 'Şampiyonlar sahası',
    image: clFootballCourt,
    rating: 3.5,
    place: 'Sakarya/erenler'
  },
]; */



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


function getStyles(name: string, selected: readonly string[], theme: Theme) {
  return {
    fontWeight: selected.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
    backgroundColor: selected.includes(name) ? theme.palette.action.hover : 'transparent',
  };
}

export default function FootballCourts() {

  const [fields, setFields] = useState<FootballCourt[]>([]); // Başlangıç değeri boş dizi


  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('https://db.aymoose.devodev.online/fields'); // db.json dosyasının URL'si
        setFields(response.data); // Verileri state'e ata
      } catch (err) {
      } finally {
      }
    };
    fetchFields(); // Verileri almak için fonksiyonu çağır
    console.log(fields);
  }, []);

  const theme = useTheme();
  const [selectedCity, setSelectedCity] = React.useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = React.useState<string>('');

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (event: SelectChangeEvent<string>) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <div style={{ paddingTop: '4rem' }}> </div>
      <div className='fieldspage-search-section'>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: '#1D3C4E',
            textAlign: 'center',
            fontWeight: '800'
          }}
        >
          Seçim Yapın
        </Typography>

        <div>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <FormControl sx={{ width: '100%', mt: 3, backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                <Select
                  displayEmpty
                  value={selectedCity}
                  onChange={handleCityChange}
                  input={<OutlinedInput style={{ borderColor: theme.palette.primary.main, borderWidth: 2 }} />}
                  renderValue={(selected) => {
                    if (selected === '') {
                      return <em style={{ color: theme.palette.text.secondary }}>Şehir Seçiniz</em>;
                    }
                    return selected;
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em style={{ color: theme.palette.text.secondary }}>Şehir Seçiniz</em>
                  </MenuItem>
                  {cities.map((city) => (
                    <MenuItem
                      key={city}
                      value={city}
                      style={getStyles(city, [selectedCity], theme)}
                    >
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl sx={{ width: '100%', mt: 3, backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                <Select
                  displayEmpty
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  input={<OutlinedInput style={{ borderColor: theme.palette.primary.main, borderWidth: 2 }} />}
                  renderValue={(selected) => {
                    if (selected === '') {
                      return <em style={{ color: theme.palette.text.secondary }}>İlçe Seçiniz</em>;
                    }
                    return selected;
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em style={{ color: theme.palette.text.secondary }}>İlçe Seçiniz</em>
                  </MenuItem>
                  {districts.map((district) => (
                    <MenuItem
                      key={district}
                      value={district}
                      style={getStyles(district, [selectedDistrict], theme)}
                    >
                      {district}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{ marginTop: '1.875rem' }}>
        <hr />
      </div>
      <div style={{ marginTop: '3.125rem' }}>
      </div>


      <div className='fieldspage-list-fields-section'>
        {fields.map((field, index) => {
          const number = String(index + 1).padStart(2, '0');

          return (
            <FootballCourtCarts key={field.id} field={field} number={number} />
          );
        })}
      </div>

    </div>
  );
}
