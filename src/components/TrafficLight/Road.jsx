import { useEffect, useState } from 'react';

const Road = ({ children }) => {
  const [roadLines, setRoadLines] = useState([]);

  useEffect(() => {
    const createRoadLines = () => {
      const sceneWidth = window.innerWidth;
      const lineCount = Math.floor(sceneWidth / 80);
      const lines = Array.from({ length: lineCount }, (_, i) => ({
        id: i,
        left: i * 80 + 40
      }));
      setRoadLines(lines);
    };

    createRoadLines();
    window.addEventListener('resize', createRoadLines);

    return () => window.removeEventListener('resize', createRoadLines);
  }, []);

  return (
    <div className="road">
      <div className="road-lines">
        {roadLines.map(line => (
          <div 
            key={line.id}
            className="road-line"
            style={{ left: `${line.left}px` }}
          />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Road;