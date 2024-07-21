import React from 'react';

import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface MusicGenerateProps {
  goToPage: (page: string) => void;
}

const MusicGenerate: React.FC<MusicGenerateProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <h1>Music Generate</h1>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default MusicGenerate;
