import { useState } from 'react';
import '../styles/LanguageSelector.css';

const topics = {
  javascript: [
    { id: 'conditionals', name: 'Condicionales', icon: '🔄' },
    { id: 'loops', name: 'Bucles', icon: '🔁' },
    { id: 'functions', name: 'Funciones', icon: '📦' },
    { id: 'arrays', name: 'Arrays', icon: '📚' },
    { id: 'objects', name: 'Objetos', icon: '🎯' }
  ],
  react: [
    { id: 'components', name: 'Componentes', icon: '🧩' },
    { id: 'props', name: 'Props', icon: '🔄' },
    { id: 'state', name: 'Estado', icon: '💾' },
    { id: 'hooks', name: 'Hooks', icon: '🎣' },
    { id: 'routing', name: 'Enrutamiento', icon: '🛣️' }
  ]
};

const LanguageSelector = ({ currentLanguage, onLanguageChange, onTopicSelect }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (language) => {
    setActiveMenu(activeMenu === language ? null : language);
  };

  return (
    <div className="language-selector">
      <div className="menu-container">
        <button 
          className={`menu-button ${activeMenu === 'javascript' ? 'active' : ''}`}
          onClick={() => toggleMenu('javascript')}
        >
          <i className="fab fa-js"></i> JavaScript
        </button>
        {activeMenu === 'javascript' && (
          <div className="dropdown-menu">
            {topics.javascript.map(topic => (
              <button
                key={topic.id}
                className="menu-item"
                onClick={() => {
                  onLanguageChange('javascript');
                  onTopicSelect(topic.id);
                  setActiveMenu(null);
                }}
              >
                <span className="topic-icon">{topic.icon}</span>
                {topic.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="menu-container">
        <button 
          className={`menu-button ${activeMenu === 'react' ? 'active' : ''}`}
          onClick={() => toggleMenu('react')}
        >
          <i className="fab fa-react"></i> React
        </button>
        {activeMenu === 'react' && (
          <div className="dropdown-menu">
            {topics.react.map(topic => (
              <button
                key={topic.id}
                className="menu-item"
                onClick={() => {
                  onLanguageChange('react');
                  onTopicSelect(topic.id);
                  setActiveMenu(null);
                }}
              >
                <span className="topic-icon">{topic.icon}</span>
                {topic.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;