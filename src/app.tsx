import React, { useState } from 'react';
// Home page
import HomePage from './pages/home/HomePage';
// script pages
import ScriptDescribe from './pages/script/ScriptDescribe';
import ScriptGenerate from './pages/script/ScriptGenerate';
// Design pages
import DesignDescribe from './pages/Design/DesignDescribe';
import DesignGenerate from './pages/Design/DesignGenerate';
// voiceover pages
import VoiceoverDescribe from './pages/voiceover/VoiceoverDescribe';
import VoiceoverGenerate from './pages/voiceover/VoiceoverGenerate';
// music pages
import MusicDescribe from './pages/music/MusicDescribe';
import MusicGenerate from './pages/music/MusicGenerate';
// css
import './assets/styles/main.css'
import './assets/styles/components.css'
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('Main');

  const renderPage = () => {
    switch (currentPage) {
      case 'Main':
        // return <HomePage goToPage={setCurrentPage} />;
        return <VoiceoverDescribe goToPage={setCurrentPage} />;
      case 'ScriptDescribe':
        return <ScriptDescribe goToPage={setCurrentPage} />;
      case 'ScriptGenerate':
        return <ScriptGenerate goToPage={setCurrentPage} />;
      case 'DesignDescribe':
        return <DesignDescribe goToPage={setCurrentPage} />;
      case 'DesignGenerate':
        return <DesignGenerate goToPage={setCurrentPage} />;
      case 'VoiceoverDescribe':
        return <VoiceoverDescribe goToPage={setCurrentPage} />;
      case 'VoiceoverGenerate':
        return <VoiceoverGenerate goToPage={setCurrentPage} />;
      case 'MusicDescribe':
        return <MusicDescribe goToPage={setCurrentPage} />;
      case 'MusicGenerate':
        return <MusicGenerate goToPage={setCurrentPage} />;
      default:
        return <HomePage goToPage={setCurrentPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
};

export default App;
