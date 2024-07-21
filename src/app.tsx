import React, { useState } from 'react';
// Home page
import HomePage from './pages/home/HomePage';
// script pages
import ScriptDescribe from './pages/script/ScriptDescribe';
import ScriptGenerate from './pages/script/ScriptGenerate';
// painting pages
import PaintingDescribe from './pages/painting/PaintingDescribe';
import PaintingGenerate from './pages/painting/PaintingGenerate';
// voiceover pages
import VoiceoverDescribe from './pages/music/MusicDescribe';
import VoiceoverGenerate from './pages/music/MusicGenerate';
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
        return <ScriptGenerate goToPage={setCurrentPage} />;
      case 'ScriptDescribe':
        return <ScriptDescribe goToPage={setCurrentPage} />;
      case 'ScriptGenerate':
        return <ScriptGenerate goToPage={setCurrentPage} />;
      case 'PaintingDescribe':
        return <PaintingDescribe goToPage={setCurrentPage} />;
      case 'PaintingGenerate':
        return <PaintingGenerate goToPage={setCurrentPage} />;
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
