import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TypingText from '../escrita/TypingText';

const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [originalText, setOriginalText] = useState('');

  const handleMouseEnter = (text, setText, buttonIndex) => {
    setOriginalText(text);
    setHoveredButton(buttonIndex);
    setText(generateBinaryText(text.length));
  };

  const handleMouseLeave = (setText) => {
    setHoveredButton(null);
    setText(originalText);
  };

  const generateBinaryText = (length) => {
    let binaryText = '';
    for (let i = 0; i < length; i++) {
      binaryText += Math.round(Math.random()).toString();
    }
    return binaryText;
  };

  const buttons = [
    { text: 'Sobre', link: '/about' },
    { text: 'Repositórios', link: '/repositories' },
    { text: 'Contato', link: '/contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #006400, #000000)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <TypingText texts={[' Hello World - Seja Bem Vindo !🤘', '01010101010101']} />
        </Typography>
        {buttons.map((button, index) => (
          <HoverButton
            key={index}
            text={button.text}
            link={button.link}
            onHover={handleMouseEnter}
            onLeave={handleMouseLeave}
            isHovered={hoveredButton === index}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};

const HoverButton = ({ text, link, onHover, onLeave, isHovered }) => {
  const [buttonText, setButtonText] = useState(text);

  return (
    <Button
      color="inherit"
      component={Link}
      to={link}
      sx={{
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          color: '#00FF00',
        },
      }}
      onMouseEnter={() => onHover(text, setButtonText, isHovered)}
      onMouseLeave={() => onLeave(setButtonText)}
    >
      {buttonText}
    </Button>
  );
};

const generateBinaryText = (length) => {
  let binaryText = '';
  for (let i = 0; i < length; i++) {
    binaryText += Math.round(Math.random()).toString();
  }
  return binaryText;
};

export default Navbar;
