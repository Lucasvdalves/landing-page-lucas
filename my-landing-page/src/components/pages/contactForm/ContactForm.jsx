import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Footer from '../../footer/Footer';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [buttonText, setButtonText] = useState('Enviar');

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Enviando...');
    try {
      const response = await axios.post('http://localhost:5000/contact', form);
      console.log('Mensagem do servidor:', response.data);
      setForm({ name: '', email: '', message: '' });
      setButtonText('Enviar');
      setSnackbarSeverity('success');
      setSnackbarMessage('E-mail enviado com sucesso!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setButtonText('Enviar');
      setSnackbarSeverity('error');
      setSnackbarMessage('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleMouseEnter = () => {
    if (buttonText === 'Enviar') {
      setButtonText('0101110111');
    }
  };

  const handleMouseLeave = () => {
    if (buttonText === '0101110111') {
      setButtonText('Enviar');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: 'url(https://images.alphacoders.com/435/435556.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: '150px',
        position: 'relative',
      }}
    >
      <Container sx={{ flex: '1' }}>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center',
            boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.5)',
            border: '2px solid #006400',
          }}
        >
          <Typography variant="h4" gutterBottom style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', marginTop: '40px' }}>
            Contato
          </Typography>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.1)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#ffffff' } }}
              InputProps={{ style: { color: '#ffffff' } }}
            />
            <TextField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { color: '#ffffff' } }}
              InputProps={{ style: { color: '#ffffff' } }}
            />
            <TextField
              label="Mensagem"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              InputLabelProps={{ style: { color: '#ffffff' } }}
              InputProps={{ style: { color: '#ffffff' } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' }, color: '#fff' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </Container>
      <Footer sx={{ position: 'absolute', bottom: 0, width: '100%' }} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
