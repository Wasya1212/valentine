import React, { useState } from 'react';
import Background from './assets/flowershopstocked-crop.jpg';
import Search from './assets/white_flower__by_prussiaart_d9c9zfy-fullview.png';

function Level1() {
  const [showButton, setShowButton] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [x, setX] = useState('50%');
  const [y, setY] = useState('90vh');

  const animateImage = () => {
    const centerX = window.innerWidth / 2 - 75; // половина ширини екрану мінус половина ширини картинки
    const centerY = window.innerHeight / 2 - 75; // половина висоти екрану мінус половина висоти картинки
    setX(`${centerX}px`);
    setY(`${centerY}px`);
    setShowButton(true);
    setAnimate(true);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url(${Background})`}}>
      <div className="absolute top-0 left-0 w-full text-center">
        <p className="text-3xl mb-8" style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.5)' }}>Знайди подаруночок</p>
      </div>
      <div className="absolute" style={{ left: x, top: y }}>
        <img src={Search} alt="Small Image" className={`smallImage cursor-pointer ${animate ? 'animate-moveToCenter' : ''}`} onClick={animateImage} />
        {showButton && (
          <a href="level2" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Молодець! Давай далі</a>
        )}
      </div>
    </div>
  );
}

export default Level1;
