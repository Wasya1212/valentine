import React, { useState } from 'react';
import catImage from './assets/F4sk0IrXsAAAQqF.jpg';
import successGif from './assets/happy-cat-happy-happy-cat.gif';

function ValentinePage() {
  const [text, setText] = useState('Чи станеш ти моїм Валентином?');
  const [showButtons, setShowButtons] = useState(true);
  const [backgroundSize, setBackgroundSize] = useState('0%');

  const changeTextAndButtons = () => {
    setText('Супер! Давай рухаємось далі!');
    setShowButtons(false);
  };

  const moveNoButton = () => {
    const button = document.querySelector('.noButton');
    const randomX = Math.random() * 60;
    const randomY = Math.random() * 50;
    button.style.left = `${randomX}vw`;
    button.style.top = `${randomY}vh`;
    button.style.position = 'absolute';
    setBackgroundSize(prevSize => {
      const newSize = parseInt(prevSize) + 10;
      return `${newSize}%`;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div style={{ backgroundRepeat: 'no-repeat', left: 0, top: 0, position: 'absolute', backgroundImage: `url(${catImage})`, backgroundSize, backgroundPosition: 'center', width: '100%', height: '100vh' }}></div>
      <div className="text-center" style={{ position: 'relative' }}>
        <p className="text-3xl mb-8" style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.5)' }}>{text}</p>
        {showButtons && (
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={changeTextAndButtons}>Так</button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline noButton" onClick={moveNoButton}>Ні</button>
          </div>
        )}
        {!showButtons && (
          <div>
            <img src={successGif} alt="Heart" className="my-8" />
            <a href="level1" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Продовжити</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ValentinePage;
