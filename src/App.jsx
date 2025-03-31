import { useState } from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import ContentDisplay from './components/ContentDisplay';
import './styles/App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('javascript');
  const [selectedTopic, setSelectedTopic] = useState('');

  return (
    <div className="container">
      <Header />
      <LanguageSelector 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onTopicSelect={setSelectedTopic}
      />
      <ContentDisplay 
        currentLanguage={currentLanguage}
        selectedTopic={selectedTopic}
      />
    </div>
  );
}

export default App;