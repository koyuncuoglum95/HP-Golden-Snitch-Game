import React, { useState, useEffect, useRef } from 'react';
import './CatchImage.css';
import snitchImage from './assets/golden-snitch.gif';

const CatchGoldenSnitch = () => {
  const snitchRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const updatePosition = () => {
    const snitchRect = snitchRef.current.getBoundingClientRect();

    setPosition({
      top: Math.random() * (window.innerHeight - snitchRect.height),
      left: Math.random() * (window.innerWidth - snitchRect.width),
    });
  };

  const handleMouseMove = (e) => {
    const snitchRect = snitchRef.current.getBoundingClientRect();
    const dx = e.clientX - (snitchRect.left + snitchRect.width / 2);
    const dy = e.clientY - (snitchRect.top + snitchRect.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 50) {
      updatePosition();
    }
  };

  const handleClick = () => {
    alert('You caught me, haha!');
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img 
        ref={snitchRef} 
        className="catch-snitch" 
        style={{...position}}
        src={snitchImage} 
        onClick={handleClick}
        alt="Golden Snitch"
      />
    </div>
  );
};

export default CatchGoldenSnitch;
