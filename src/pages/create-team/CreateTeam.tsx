import { useState } from "react";
import { Box, TextField, Button, Select, MenuItem, InputLabel, Typography, Container } from "@mui/material";
import html2canvas from "html2canvas";
import sahaImage from '@/assets/images/saha.png';
import { useTheme } from '@mui/material/styles';

const formations = [
  "2-2-1", // 6 kişilik (5+1 kaleci)
  "2-3-1", // 7 kişilik (6+1 kaleci)
  "3-2-1", // 7 kişilik (6+1 kaleci)
  "2-1-2", // 6 kişilik (5+1 kaleci)
  "3-1-2", // 7 kişilik (6+1 kaleci)
  "2-2-2", // 6 saha oyuncusu + 1 kaleci
  "3-3-0", // 6 saha oyuncusu + 1 kaleci
  "2-1-3", // 6 saha oyuncusu + 1 kaleci
];

const CreateTeam = (): JSX.Element => {
  const theme = useTheme();
  const [teamName, setTeamName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#FF0000");
  const [secondaryColor, setSecondaryColor] = useState("#000000");
  const [formation, setFormation] = useState(formations[0]);
  const [players, setPlayers] = useState<Array<{ name: string, number: string }>>([]);
  
  const handleDownload = async () => {
    const element = document.getElementById("team-preview");
    if (element) {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${teamName}-team.png`;
      link.click();
    }
  };

  const getPlayerPositions = (formation: string) => {
    const [def, mid, fwd] = formation.split('-').map(Number);
    const positions = [];
    
    // Kaleci
    positions.push({ top: '85%', left: '50%' });
    
    // Defans
    for (let i = 0; i < def; i++) {
      if (def === 2) {
        positions.push({ 
          top: '65%', 
          left: `${30 + (i * 40)}%`
        });
      } else if (def === 3) {
        positions.push({ 
          top: '65%', 
          left: `${25 + (i * 25)}%`
        });
      }
    }
    
    // Orta saha
    for (let i = 0; i < mid; i++) {
      if (formation === "3-3-0") {  // 3-3-0 formasyonu için özel pozisyonlama
        positions.push({ 
          top: '30%',  // Daha ileriye taşındı
          left: `${25 + (i * 25)}%`
        });
      } else if (mid === 1) {
        positions.push({ 
          top: '45%', 
          left: '50%'
        });
      } else if (mid === 2) {
        positions.push({ 
          top: '45%', 
          left: `${30 + (i * 40)}%`
        });
      } else if (mid === 3) {
        positions.push({ 
          top: '45%', 
          left: `${25 + (i * 25)}%`
        });
      }
    }
    
    // Forvet
    for (let i = 0; i < fwd; i++) {
      if (fwd === 1) {
        positions.push({ 
          top: '25%', 
          left: '50%'
        });
      } else if (fwd === 2) {
        positions.push({ 
          top: '25%', 
          left: `${30 + (i * 40)}%`
        });
      } else if (fwd === 3) {
        positions.push({ 
          top: '25%', 
          left: `${25 + (i * 25)}%`
        });
      }
    }
    
    return positions;
  };

  const handleFormationChange = (newFormation: string) => {
    setFormation(newFormation);
    const totalPlayers = 1 + newFormation.split('-').reduce((a, b) => a + parseInt(b), 0);
    const newPlayers = Array(totalPlayers).fill(null).map(() => ({ 
      name: '', 
      number: '' 
    }));
    setPlayers(newPlayers);
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      top: theme.spacing(10),
      mb: theme.spacing(25),
      width: '100vw'
    }}>
      <Container 
        maxWidth={false}
        sx={{ 
          py: 3,
          width: '100%',
          '& .MuiContainer-root': {
            maxWidth: 'none'
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          gap: 3,
          width: '100%',
          justifyContent: 'center'
        }}>
          {/* Sol taraf - Takım Renkleri */}
          <Box sx={{ 
            width: theme.spacing(31.25)
          }}>
            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Takım Renkleri</Typography>
              
              <Box sx={{ mb: 3 }}>
                <InputLabel>Ana Renk</InputLabel>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  style={{ width: '100%', height: '40px', marginTop: '8px' }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <InputLabel>İkincil Renk</InputLabel>
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  style={{ width: '100%', height: '40px', marginTop: '8px' }}
                />
              </Box>
            </Box>
          </Box>

          {/* Orta - Saha */}
          <Box sx={{ 
            width: theme.spacing(75),
            flex: 'none'
          }}>
            <Box id="team-preview">
              <Box 
                sx={{ 
                  height: theme.spacing(87.5),
                  position: 'relative',
                  border: '2px solid white',
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundImage: `url(${sahaImage})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                {getPlayerPositions(formation).map((pos, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      position: 'absolute',
                      top: pos.top,
                      left: pos.left,
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                      width: theme.spacing(10),
                      zIndex: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: theme.spacing(3.75),
                        height: theme.spacing(3.75),
                        borderRadius: '50%',
                        bgcolor: primaryColor,
                        border: `2px solid ${secondaryColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: theme.typography.pxToRem(12),
                        mb: 1
                      }}
                    >
                      {idx + 1}
                    </Box>
                    <TextField
                      size="small"
                      placeholder="İsim"
                      value={players[idx]?.name || ''}
                      onChange={(e) => {
                        const newPlayers = [...players];
                        newPlayers[idx] = { ...newPlayers[idx], name: e.target.value };
                        setPlayers(newPlayers);
                      }}
                      sx={{ 
                        '& .MuiInputBase-root': {
                          bgcolor: 'transparent',
                          color: secondaryColor,
                          fontWeight: 700,
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.7)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          }
                        },
                        '& .MuiInputBase-input': { 
                          py: 0.5,
                          textAlign: 'left',
                          paddingLeft: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          '&::placeholder': {
                            color: `${secondaryColor}80`,
                            opacity: 1,
                            textAlign: 'left',
                            fontWeight: 500
                          }
                        }
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            <Button 
              variant="contained" 
              onClick={handleDownload}
              fullWidth
            >
              Takımı İndir
            </Button>
          </Box>

          {/* Sağ taraf - Takım Bilgileri */}
          <Box sx={{ width: theme.spacing(31.25) }}>
            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Takım Bilgileri</Typography>
              
              <TextField
                label="Takım Adı"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />

              <Select
                value={formation}
                onChange={(e) => handleFormationChange(e.target.value)}
                fullWidth
                label="Formasyon"
                sx={{ mb: 2 }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      '& .MuiMenuItem-root': {
                        padding: '8px 16px',
                      }
                    }
                  },
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                  }
                }}
              >
                {formations.map((f) => (
                  <MenuItem key={f} value={f}>{f}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateTeam;
