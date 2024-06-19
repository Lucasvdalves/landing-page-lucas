import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Avatar, Modal, Button, Link } from '@mui/material';
import Footer from '../../footer/Footer'; 
const About = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://images.alphacoders.com/435/435556.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container>
        <Box
          sx={{
            marginTop:'40px',
            width: '100%',
            height: '200px',
            backgroundImage: 'url(https://hermes.dio.me/articles/cover/4c1a8139-2ff7-467d-a33e-cf9e22e0c15f.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '30px',
          }}
        />
        
        <Box
          sx={{
            border: '2px solid #ffffff',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'left', 
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            color: '#ffffff', 
          }}
        >
          <Grid container spacing={3} mt={4}>
            <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
              <Avatar
                alt="Minha Foto"
                src="https://hermes.dio.me/articles/cover/4c1a8139-2ff7-467d-a33e-cf9e22e0c15f.jpg" 
                sx={{ width: 150, height: 150, margin: 'auto' }}
              />
              <Box mt={2}>
                <Button variant="outlined" onClick={handleOpenModal}>
                  Ver informações pessoais
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h4" gutterBottom style={{ color: '#fff' }}>
                Sobre Mim
              </Typography>
              <Typography variant="body1" style={{ color: '#fff', marginBottom: '15px', lineHeight: '1.6' }}>
                Olá, sou um desenvolvedor apaixonado por tecnologia. Tenho experiência em várias linguagens de programação e frameworks.
                Amo resolver problemas complexos e criar soluções eficientes e elegantes. Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
              </Typography>
              <Typography variant="body1" style={{ color: '#fff', marginBottom: '15px', lineHeight: '1.6' }}>
                Algumas das tecnologias com as quais trabalho incluem:
              </Typography>
              <ul style={{ color: '#fff', marginBottom: '15px', paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>JavaScript (React, Node.js)</li>
                <li>Java (Springboot, EJB)</li>
                <li>Oracle e PL/SQL Postgres</li>
                <li>Sankhya ERP</li>
                <li>Desenvolvimentos de API</li>
              </ul>
              <Typography variant="body1" style={{ color: '#fff', lineHeight: '1.6' }}>
                Nos meus projetos, foco na qualidade do código, desempenho e melhores práticas de desenvolvimento.
                Estou disponível para novos desafios e colaborações. Se você tem um projeto interessante ou uma oportunidade de trabalho, não hesite em entrar em contato comigo!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffffff',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
            maxWidth: '90%',
            maxHeight: '90%',
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" id="modal-title" sx={{ marginBottom: '15px' }}>
            Informações Pessoais
          </Typography>
          <Typography variant="body1" id="modal-description" sx={{ marginBottom: '15px' }}>
            <strong>Idade:</strong> 25 anos
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px' }}>
            <strong>Idiomas:</strong> Português, Inglês
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px' }}>
            <strong>E-mail:</strong> lucasalvesbh2017@gmail.com
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px' }}>
            <strong>Nome Completo:</strong> Lucas Damasceno
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px' }}>
            <strong>LinkedIn:</strong>{' '}
            <Link href="https://www.linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/lucas-damasceno-821983169/</Link>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '15px' }}>
            <strong>Blog:</strong>{' '}
            <Link href="https://seublog.com" target="_blank" rel="noopener noreferrer">https://techloversdeveloper.blogspot.com/2024/03/ola-seja-bem-vindo.html</Link>
          </Typography>
        </Box>
      </Modal>
      <Footer sx={{ position: 'absolute', bottom: 0, width: '100%' }} />
    </Box>
  );
};

export default About;
