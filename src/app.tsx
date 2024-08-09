import React, { useState } from 'react';
// Home page
import HomePage from './pages/home/HomePage';
// script pages
import ScriptDescribe from './pages/script/ScriptDescribe';
import ScriptGenerate from './pages/script/ScriptGenerate';
import ScriptLoading from './pages/script/ScriptLoading';
// Design pages
import DesignDescribe from './pages/Design/DesignDescribe';
import DesignLoading from './pages/Design/DesignLoading';
// voiceover pages
import VoiceoverDescribe from './pages/voiceover/VoiceoverDescribe';
import VoiceoverLoading from './pages/voiceover/VoiceoverLoading';
// music pages
import MusicDescribe from './pages/music/MusicDescribe';
import MusicLoading from './pages/music/MusicLoading';
// Summary page
import Summary from './pages/Summary/SummaryGeneration';

// css
import './assets/styles/main.css'
import './assets/styles/components.css'
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('Main');

  const renderPage = () => {
    switch (currentPage) {
      case 'Main':
        return <ScriptLoading goToPage={setCurrentPage} />;
      case 'ScriptDescribe':
        return <ScriptDescribe goToPage={setCurrentPage} />;
      case 'ScriptLoading':
        return <ScriptLoading goToPage={setCurrentPage} />;
      case 'ScriptGenerate':
        return <ScriptGenerate goToPage={setCurrentPage} />;

      case 'DesignDescribe':
        return <DesignDescribe goToPage={setCurrentPage} />;
      case 'DesignLoading':
        return <DesignLoading goToPage={setCurrentPage} />;

      case 'VoiceoverDescribe':
        return <VoiceoverDescribe goToPage={setCurrentPage} />;
      case 'VoiceoverLoading':
        return <VoiceoverLoading goToPage={setCurrentPage} />;      

      case 'MusicDescribe':
        return <MusicDescribe goToPage={setCurrentPage} />;
      case 'MusicLoading':
        return <MusicLoading goToPage={setCurrentPage} />;

      case 'Summary':
        return <Summary goToPage={setCurrentPage} />;
      default:
        return <HomePage goToPage={setCurrentPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
};

export default App;
