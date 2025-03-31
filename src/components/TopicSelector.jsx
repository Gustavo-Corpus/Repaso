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
  
  const TopicSelector = ({ currentLanguage, selectedTopic, onTopicSelect }) => {
    return (
      <div className="topic-selector">
        <div className="topic-dropdown">
          <select 
            value={selectedTopic} 
            onChange={(e) => onTopicSelect(e.target.value)}
            className="topic-select"
          >
            <option value="">Selecciona un tema</option>
            {topics[currentLanguage]?.map(topic => (
              <option key={topic.id} value={topic.id}>
                {topic.icon} {topic.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default TopicSelector;