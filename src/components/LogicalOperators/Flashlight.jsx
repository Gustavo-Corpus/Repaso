import { useState } from 'react';
import '../../styles/Flashlight.css';
import flashlightImg from '../../assets/flashlight.png';
import giftImg from '../../assets/gift.png';
import CodeSnippet from '../CodeSnippet';

const Flashlight = () => {
  const [hasBattery, setHasBattery] = useState(false);
  const [isButtonOn, setIsButtonOn] = useState(false);

  const isFlashlightOn = hasBattery && isButtonOn;

  return (
    <div className="flashlight-demo">
      <div className="controls">
        {/* Botón de batería */}
        <button 
          className={`battery-button ${hasBattery ? 'has-battery' : ''}`}
          onClick={() => setHasBattery(!hasBattery)}
        >
          {hasBattery ? '🔋' : '🔌'}
        </button>

        {/* Botón de encendido */}
        <button 
          className={`power-button ${isButtonOn ? 'on' : ''}`}
          onClick={() => setIsButtonOn(!isButtonOn)}
        >
          {isButtonOn ? '⚡' : '🔘'}
        </button>
      </div>

      <div className="scene-container">
        <div className="dark-room">
          {/* Linterna */}
          <div className="flashlight-container">
            <img 
              src={flashlightImg} 
              alt="Linterna" 
              className="flashlight-image"
            />
            {isFlashlightOn && <div className="light-beam"></div>}
          </div>

          {/* Regalo */}
          <div className={`hidden-object ${isFlashlightOn ? 'visible' : ''}`}>
            <img 
              src={giftImg} 
              alt="Regalo" 
              className="gift-image"
            />
          </div>
        </div>
      </div>

      <CodeSnippet  
        code={`const isFlashlightOn = ${hasBattery} && ${isButtonOn}; // Esto resultara en: ${isFlashlightOn}`}  
      />
    </div>
  );
};

export default Flashlight;