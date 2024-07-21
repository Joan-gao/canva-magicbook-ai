import React from 'react';

import { Rows, Text, Button, Title } from '@canva/app-ui-kit';

interface VoiceoverDescribeProps {
  goToPage: (page: string) => void;
}

const VoiceoverDescribe: React.FC<VoiceoverDescribeProps> = ({ goToPage }) => {
  return (
    <div className="scrollContainer">
      <h1>Voiceover Describe</h1>
      <Button variant="primary" onClick={() => goToPage('GenerateTab')}>
        Back to GenerateTab
      </Button>
      {/* Add your Script Describe content here */}
    </div>
  );
};

export default VoiceoverDescribe;
