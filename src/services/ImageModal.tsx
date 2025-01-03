import React, { useRef } from 'react';
import { Modal, Box } from '@mui/material';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, handleImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="image-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 420,
          bgcolor: '#f9f9f9',
          borderRadius: '16px',
          boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
          border: 'none',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '90%',
        }}
      >
        <h2
          id="image-modal-title"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.7rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#2e2e2e',
          }}
        >
          Profil Fotoğrafını Değiştir
        </h2>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <Box
          onClick={() => fileInputRef.current?.click()}
          sx={{
            backgroundColor: '#4CAF50',
            color: '#ffffff',
            padding: '1rem 1.5rem',
            borderRadius: '30px',
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.1rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#45a049',
              transform: 'scale(1.05)',
            },
          }}
        >
          Fotoğraf Seç
        </Box>
        <Box
          sx={{
            marginTop: '1.2rem',
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.9rem',
            color: '#666',
            opacity: '0.8',
            maxWidth: '280px',
          }}
        >
          <p>Profil fotoğrafınızı değiştirmek için yukarıdaki butona tıklayın.</p>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;
