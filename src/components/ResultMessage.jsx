import '../styles/ResultMessage.css';

const ResultMessage = ({ currentLight }) => {
    const message = currentLight === 'green'
      ? '¡Semáforo en verde! Los autos pueden avanzar 🚗'
      : '¡Semáforo en rojo! Los autos deben detenerse 🛑';
  
    const className = `result-message show ${currentLight === 'green' ? 'success' : 'error'}`;
  
    return (
      <div className={className}>
        {message}
      </div>
    );
  };
  
  export default ResultMessage;