import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FootballCourtCarts from '../components/FootballCourtCarts';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      borderRadius: '0.5rem',
    },
  },
};

const fields = [
  {
    id: 1,
    name: 'Aydın Halısaha',
    image: '/src/assets/images/fields/aydınHalısaha.png',
    rating: 4.5,
    place: 'Sakarya/erenler'
  },
  {
    id: 2,
    name: 'Kolezyum Halısaha',
    image: '/src/assets/images/fields/kolezyum.png',
    rating: 3,
    place: 'Sakarya/erenler'
  },
  {
    id: 3,
    name: 'Bora halısaha',
    image: '/src/assets/images/fields/boraHalısaha.png',
    rating: 1.5,
    place: 'Sakarya/erenler'
  },
  {
    id: 4,
    name: 'Serdivan Halısaha',
    image: '/src/assets/images/fields/serdivanhalısaha.png',
    rating: 4.5,
    place: 'Sakarya/erenler'
  },
  {
    id: 5,
    name: 'Alianz arena',
    image: '/src/assets/images/fields/alianz.png',
    rating: 2,
    place: 'Almanya/Munih'
  },
  {
    id: 6,
    name: 'Ada arena',
    image: '/src/assets/images/fields/evin.jpg',
    rating: 5,
    place: 'Sakarya/erenler'
  },
  {
    id: 7,
    name: 'Şampiyonlar sahası',
    image: '/src/assets/images/fields/cl.png',
    rating: 3.5,
    place: 'Sakarya/erenler'
  },
];

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
