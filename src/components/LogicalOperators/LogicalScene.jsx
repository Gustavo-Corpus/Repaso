import { useState } from 'react';
import Flashlight from './Flashlight';
import Store from './Store';
import LightSwitch from './LightSwitch';
import Club from './Club';
import '../../styles/LogicalOperators.css';

const LogicalScene = () => {
  const [currentExample, setCurrentExample] = useState('flashlight');
  
  return (
    <div className="logical-demo">
      <div className="example-selector">
        <button 
          className={currentExample === 'flashlight' ? 'active' : ''}
          onClick={() => setCurrentExample('flashlight')}
        >
          🔦 AND (&&)
        </button>
        <button 
          className={currentExample === 'store' ? 'active' : ''}
          onClick={() => setCurrentExample('store')}
        >
          🏪 OR (||)
        </button>
        <button 
          className={currentExample === 'switch' ? 'active' : ''}
          onClick={() => setCurrentExample('switch')}
        >
          💡 NOT (!)
        </button>
        <button 
          className={currentExample === 'club' ? 'active' : ''}
          onClick={() => setCurrentExample('club')}
        >
          🎵 AND + OR
        </button>
      </div>

      <div className="example-display">
        {currentExample === 'flashlight' && <Flashlight />}
        {currentExample === 'store' && <Store />}
        {currentExample === 'switch' && <LightSwitch />}
        {currentExample === 'club' && <Club />}
      </div>
    </div>
  );
};

export default LogicalScene;