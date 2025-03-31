import { useEffect, useState } from 'react';
import TrafficLight from './TrafficLight';
import Car from './Car';
import Road from './Road';
import '../../styles/TrafficLight.css';

const TrafficScene = ({ currentLight, onLightChange }) => {
  const [cars, setCars] = useState([
    { id: 1, position: -100, lane: 'bottom' },
    { id: 2, position: -200, lane: 'top' },
    { id: 3, position: -300, lane: 'bottom' },
    { id: 4, position: -400, lane: 'top' },
    { id: 5, position: -500, lane: 'bottom' },
    { id: 6, position: -600, lane: 'top' }
  ]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCars(prevCars => 
        prevCars.map(car => ({
          ...car,
          position: currentLight === 'green' 
            ? (car.position > window.innerWidth ? -100 : car.position + 3)
            : car.position
        }))
      );
    }, 30);

    return () => clearInterval(animationInterval);
  }, [currentLight]);

  return (
    <div className="traffic-demo">
      <div className="traffic-scene">
        <TrafficLight 
          currentLight={currentLight}
          onLightChange={onLightChange}
        />
        <Road>
          {cars.map(car => (
            <Car 
              key={car.id}
              position={car.position}
              lane={car.lane}
              color={`car${car.id}`}
            />
          ))}
        </Road>
      </div>
    </div>
  );
};

export default TrafficScene;