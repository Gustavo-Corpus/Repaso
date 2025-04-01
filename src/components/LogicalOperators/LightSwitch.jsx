// src/components/LogicalOperators/NotOperator.jsx
import { useState } from 'react';
import '../../styles/LightSwitch.css';

const LightSwitch = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div className="not-operator">
      <div className={`light-container ${isLightOn ? 'on' : 'off'}`}>
        <div className="light-bulb">
          <span className="bulb-icon">💡</span>
        </div>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" checked={isLightOn} onChange={toggleLight} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="light-status">
        <p>
          <strong>Estado de la luz:</strong> {isLightOn ? 'Encendida' : 'Apagada'}
        </p>
        <p>
          <strong>NOT estado (!luz):</strong> {(!isLightOn).toString()}
        </p>
      </div>

      <div className="code-preview">
        <pre>
          <code>
{`let luz = ${isLightOn.toString()};
const luzApagada = !luz; // luzApagada = ${(!isLightOn).toString()}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default LightSwitch;