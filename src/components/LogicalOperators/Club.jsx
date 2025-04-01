import { useState } from 'react';
import '../../styles/club.css';

const Club = () => {
  const [age, setAge] = useState(18);
  const [accessOption, setAccessOption] = useState(null);

  const accessOptions = [
    { id: 'invitation', label: 'Invitación', emoji: '📩' },
    { id: 'vip', label: 'VIP', emoji: '🌟' },
    { id: 'list', label: 'En lista', emoji: '📝' },
  ];

  const canEnter = age >= 18 && accessOption !== null;

  return (
    <div className="club-access">
      <h2>
        <span className="emoji-icon">🎵</span> Club Nocturno
      </h2>

      {/* Control deslizante para la edad */}
      <div className="age-slider">
        <label htmlFor="age">Edad: {age}</label>
        <input
          id="age"
          type="range"
          min="0"
          max="100"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>

      {/* Botones de opciones de acceso */}
      <div className="access-buttons">
        {accessOptions.map((option) => (
          <button
            key={option.id}
            className={`access-button ${
              accessOption === option.id ? 'selected' : ''
            }`}
            onClick={() => setAccessOption(option.id)}
          >
            <span className="access-emoji">{option.emoji}</span>
            <span className="access-label">{option.label}</span>
          </button>
        ))}
      </div>

      {/* Mensaje dinámico */}
      <div className={`access-message ${canEnter ? 'success' : 'error'}`}>
        {canEnter ? (
          <>
            <span className="success-icon">✅</span> ¡Bienvenido al club!
          </>
        ) : (
          <>
            <span className="error-icon">❌</span> No puedes entrar al club.
          </>
        )}
      </div>
    </div>
  );
};

export default Club;