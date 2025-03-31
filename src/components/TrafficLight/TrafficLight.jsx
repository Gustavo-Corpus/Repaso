const TrafficLight = ({ currentLight, onLightChange }) => {
    return (
      <div className="traffic-light">
        <div 
          className={`light red ${currentLight === 'red' ? 'active' : ''}`}
          onClick={() => onLightChange('red')}
        >
          ROJO
        </div>
        <div 
          className={`light green ${currentLight === 'green' ? 'active' : ''}`}
          onClick={() => onLightChange('green')}
        >
          VERDE
        </div>
      </div>
    );
  };
  
  export default TrafficLight;