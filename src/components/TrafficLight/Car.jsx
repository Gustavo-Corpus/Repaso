const Car = ({ position, lane, color }) => {
    return (
      <div 
        className={`car ${color}`} 
        style={{
          left: `${position}px`,
          bottom: lane === 'bottom' ? '40px' : '80px'
        }}
      >
        <div className="car-body"></div>
        <div className="car-top"></div>
        <div className="car-wheel left"></div>
        <div className="car-wheel right"></div>
      </div>
    );
  };
  
  export default Car;