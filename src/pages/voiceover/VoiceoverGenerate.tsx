import React from 'react';
import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface VoiceoverGenerateProps {
  goToPage: (page: string) => void;
}

const VoiceoverGenerate: React.FC<VoiceoverGenerateProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <h1>Voiceover Generate</h1>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default VoiceoverGenerate;
