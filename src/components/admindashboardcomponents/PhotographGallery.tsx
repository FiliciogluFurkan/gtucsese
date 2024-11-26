
import React, { useState } from 'react';
import { Box, Card, CardHeader, CardContent, Grid, Button, Typography } from '@mui/material';
import { Upload } from '@mui/icons-material';
import axios from 'axios';

function PhotographGallery() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setShowSaveButton(true);
      console.log('File selected:', event.target.files[0]);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios.post('http://server.aymoose.ozkuls.com/api/v1/images', formData)
        .then(response => {
          console.log('Success:', response.data);
          setShowSaveButton(false);
          setSelectedFile(null);

       
          setImageUrls(prevUrls => [...prevUrls, response.data.url]);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <Card>
      <CardHeader title="Fotoğraf Galerisi" />
      <CardContent>
        <Grid container spacing={2}>
          {imageUrls.map((url, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#e0e0e0"
                height={150}
                borderRadius={2}
                sx={{ cursor: 'pointer' }}
              >
                <img src={url} alt={`Uploaded ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </Box>
            </Grid>
          ))}
          <Grid item xs={6} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#e0e0e0"
              height={150}
              borderRadius={2}
              sx={{ cursor: 'pointer' }}
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <Upload />
            </Box>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </Grid>
        </Grid>
        {showSaveButton && (
          <Box mt={2}>
            <Typography variant="body1">Seçilen Dosya: {selectedFile?.name}</Typography>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Kaydet
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default PhotographGallery;
