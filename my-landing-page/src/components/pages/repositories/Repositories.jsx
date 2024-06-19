import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import Footer from '../../footer/Footer'; // Importando o Footer


const Repositories = () => {
  const repos = [
    { name: 'App-Lembrei', link: 'https://github.com/Lucasvdalves/lembrei-app-frontend', image: 'https://t3.ftcdn.net/jpg/05/55/06/70/360_F_555067051_3xPcPrhgAzzMa2DgvPYA8UNHH85LI7pY.jpg' },
    { name: 'E-commerce-API', link: 'https://github.com/Lucasvdalves/ecommerce-api', image: 'https://img.freepik.com/vetores-premium/comercio-eletronico-ou-conceito-de-marketing-de-compras-online-ilustracao-em-vetor_618588-583.jpg' },
    { name: 'DevInHouse - PharmacyControl', link: 'https://github.com/Lucasvdalves/DevInHouse---PharmacyManage', image: 'https://c4.wallpaperflare.com/wallpaper/775/373/113/3d-pills-white-background-wallpaper-preview.jpg' },
    { name: 'LABVaccine - Gestão de Administração de Vacinas', link: 'https://github.com/Lucasvdalves/ProjetoDevInHousePharmacy', image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/7/shutterstock_616263095.jpg' },
    { name: 'PharmacyInHouse - Sistema de Gestão Farmacêutica', link: 'https://github.com/Lucasvdalves/DevInPharmacy', image: 'https://t3.ftcdn.net/jpg/03/03/26/88/360_F_303268820_rIJyP7E5eGNBUFMdPct79XTjpOmLRiK9.jpg' },
    { name: 'Parking-Control', link: 'https://github.com/Lucasvdalves/Parking-Control', image: 'https://wallpapercave.com/wp/wp3218506.jpg' },

  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderButtonLabel = (index) => {
    if (hoveredIndex === index) {
      return '01001100';
    } else {
      return 'Acessar';
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://images.alphacoders.com/435/435556.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 0',
      }}
    >
      <Container>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            padding: '10px 20px', 
            borderRadius: '8px', 
            marginBottom: '20px', 
            textAlign: 'center', 
            boxShadow: '0px 0px 10px 3px #006400', 
          }}
        >
          <Typography variant="h4" gutterBottom style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Meus Repositórios
          </Typography>
        </div>
        <Grid container spacing={3}>
          {repos.map((repo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: '0px 0px 10px 3px #006400', // Efeito de sombra ao passar o mouse
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={repo.image}
                  alt={repo.name}
                />
                <CardContent style={{ flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ffffff' }}>
                  <Typography variant="h6">{repo.name}</Typography>
                  <Typography variant="body1">{repo.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    href={repo.link}
                    target="_blank"
                    sx={{
                      backgroundColor: hoveredIndex === index ? '#004d00' : '#006400', // Cor verde escuro
                      color: '#ffffff',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {renderButtonLabel(index)}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer sx={{ position: 'absolute', bottom: 0, width: '100%' }} /> {/* Posicionamento fixo do Footer */}
    </div>
  );
};

export default Repositories;
