import React, { useState } from 'react';
import HomePage from './pages/home/HomePage';
import ScriptDescribe from './pages/script/ScriptDescribe';
import './assets/styles/main.css'
import './assets/styles/components.css'
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('Main');

  const renderPage = () => {
    switch (currentPage) {
      case 'Main':
        return <HomePage goToPage={setCurrentPage} />;
      case 'ScriptDescribe':
        return <ScriptDescribe goToPage={setCurrentPage} />;
      default:
        return <HomePage goToPage={setCurrentPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
};

export default App;
