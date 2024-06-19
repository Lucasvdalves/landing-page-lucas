import React, { useState, useEffect } from 'react';

const TypingText = ({ texts, interval = 150, cursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentCharIndex]);
      setCurrentCharIndex((prev) => prev + 1);
    }, interval);

    if (currentCharIndex === text.length) {
      clearTimeout(timeout);
      setTimeout(() => {
        setDisplayedText('');
        setCurrentCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, interval * 10); 
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, texts, interval]);

  return (
    <span>
      {displayedText}
      {cursor && <span className="cursor">|</span>}
    </span>
  );
};

export default TypingText;
